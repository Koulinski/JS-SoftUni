const { describe } = require("mocha");
const { assert } = require("chai");
const { chromium } = require("playwright-chromium");

describe("All tests", () => {
  let url = "http://127.0.0.1:5500/index.html";
  let browser;
  let page;
  let textContent;

  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    browser = await browser.close();
  });
  beforeEach(async () => {
    textContent = {
      1: { author: "Boyko", title: "Javascript is the Best" },
      2: { author: "Borisov", title: "Python is the Best" },
      3: { author: "Slavi", title: "C# is the Best" },
      4: { author: "Trifonov", title: "Java is the Best" },
    };
    page = await browser.newPage();
    await page.goto(url);
  });
  afterEach(async () => {
    await page.close();
  });
  it("loads all books", async () => {
    let fakeResponse = {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(textContent),
    };
    await page.route("**/jsonstore/collections/books", (x) => x.fulfill(fakeResponse));
    let [response] = await Promise.all([
      page.waitForResponse("**/jsonstore/collections/books"),
      page.click("#loadBooks"),
    ]);
    response = await response.json();
    assert.deepEqual(response, textContent);
  });
  it("add books", async () => {
    let book = { title: "IT", author: "StevenKing", _id: "5" };
    let fakeResponse = {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    };
    await page.route("**/jsonstore/collections/books", (route) => {
      let sent = route.request().postData();
      assert.deepEqual(JSON.parse(sent), { title: "IT", author: "StevenKing" });
      route.fulfill(fakeResponse);
    });
    await page.fill('input[name="title"]', book.title);
    await page.fill('input[name="author"]', book.author);
    let [response] = await Promise.all([
      page.waitForResponse("**/jsonstore/collections/books"),
      page.click("#createForm > button"),
    ]);
    response = await response.json();
    assert.deepEqual(response, book);
  });
  it("edit books", async () => {
    let allBooks = {
      original: { id: "3", book: { author: "Slavi", title: "C# is the Best" } },
      edited: { author: "Stamat", title: "Rubi is the Best" },
    };
    let responseAll = {
      table: {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(textContent),
      },
      edit: {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allBooks.edited),
      },
      original: {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(textContent[3]),
      },
    };
    await page.route("**/jsonstore/collections/books", (x) => x.fulfill(responseAll.table));
    await Promise.all([
      page.waitForResponse("**/jsonstore/collections/books"),
      page.click("#loadBooks"),
    ]);
    await page.route("**/jsonstore/collections/books/**", (route) => {
      let replies = {
        get: responseAll.original,
        put: responseAll.edit,
        delete: responseAll.del,
      };
      let method = route.request().method();
      route.fulfill(replies[method.toLowerCase()]);
    });
    let [create, edit] = await Promise.all([
      page.isVisible("form#createForm"),
      page.isVisible("form#editForm"),
    ]);
    assert.equal(create, true);
    assert.equal(edit, false);
    await page.click('tr[data-id="3"] button.editBtn');
    [create, edit] = await Promise.all([
      page.isVisible("form#createForm"),
      page.isVisible("form#editForm"),
    ]);
    assert.equal(create, false);
    assert.equal(edit, true);
    let [tit, auth] = await Promise.all([
      page.$eval('#editForm > input[name="title"]', (el) => el.value),
      page.$eval('#editForm > input[name="author"]', (el) => el.value),
    ]);
    assert.equal(tit, allBooks.original.book.title);
    assert.equal(auth, allBooks.original.book.author);
    await page.fill('#editForm > input[name="title"]', allBooks.edited.title);
    await page.fill('#editForm > input[name="author"]', allBooks.edited.author);
    await page.click("#editForm > button");
    [tit, auth] = await Promise.all([
      page.$eval('#editForm > input[name="title"]', (el) => el.value),
      page.$eval('#editForm > input[name="author"]', (el) => el.value),
    ]);
    assert.equal(tit, "");
    assert.equal(auth, "");
  });
  it("delete books", async () => {
    let allBooks = {
      original: { id: "3", book: { author: "Slavi", title: "C# is the Best" } },
      deleted: { author: "Slavi", title: "C# is the Best" },
    };
    let responseAll = {
      table: {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(textContent),
      },
      del: {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allBooks.deleted),
      },
      original: {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(textContent[3]),
      },
    };
    await page.route("**/jsonstore/collections/books*", (route) => {
      let replies = {
        get: responseAll.table,
        delete: responseAll.del,
      };
      let method = route.request().method();
      route.fulfill(replies[method.toLowerCase()]);
    });
    await Promise.all([
      page.waitForResponse("**/jsonstore/collections/books*"),
      page.click("#loadBooks"),
    ]);
    page.on("dialog", (dialog) => {
      dialog.accept();
    });
    await page.route("**/jsonstore/collections/books/3", (route) => {
      assert.equal(route.request().method(), "DELETE");
      route.fulfill(responseAll.del);
    });
    await page.click('tr[data-id="3"] button.deleteBtn');
  });
});
