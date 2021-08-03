/* const { chromium } = require('playwright-chromium');

(async () => {

    const browser = await chromium.launch();

    const page = await browser.newPage();

    await page.goto('https://google.com/');

    await page.screenshot({ path: `example.png` });

    await browser.close();

})(); */

const { chromium } = require('playwright');

const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', function () {
    this.timeout(6000);
    before(async () => { browser = await chromium.launch(); });

    after(async () => { await browser.close(); });

    beforeEach(async () => { page = await browser.newPage(); });

    afterEach(async () => { await page.close(); });

    it('loads static page', async () => {

        //testing specific text on page
        /*  await page.goto('http://127.0.0.1:5500/01.%20Accordion/');
         // await page.screenshot({ path: 'index.png' });
         const content = await page.textContent('.accordion .head span');
         expect(content).to.contains('Scalable Vector Graphics');
  */
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/');

        const titles = await page.$$eval('.accordion .head span', (spans) => spans.map(s => s.textContent));
        expect(titles).includes('Scalable Vector Graphics');
        expect(titles).includes('Open standard');
        expect(titles).includes('ALGOL');
        expect(titles).includes('Unix');

    });

    it('toggles content', async () => {
        /* await page.goto('http://127.0.0.1:5500/01.%20Accordion/');

        await page.click('text=More');

        const visible = await page.isVisible('.extra p');
        expect(visible).to.be.true; */

        await page.goto('http://127.0.0.1:5500/01.%20Accordion/');
        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.true;
    });

    it('toggles content on and then off', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/');

        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        await page.click('#main>.accordion:first-child >> text=Less');


        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.false;
    });
});