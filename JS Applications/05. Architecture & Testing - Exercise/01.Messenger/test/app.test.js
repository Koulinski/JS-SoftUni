const { chromium } = require('playwright-chromium');
const { expect,assert } = require('chai');
const { test } = require('mocha');

let browser, page;
let url = 'http://localhost:3000/'

function fakeRes(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}
let testContent = {
    1: {_id:1, author: 'Boyko',content: 'Bam Bam'},
    2: {_id:2, author: 'Borisov',content: 'Bla Bla Bla'},
    3: {_id:3, author: 'Stamat',content: 'Samo Levski'},
}
describe('E2E tests', function () {
    before(async () => { 
      //  browser = await chromium.launch(); 
      browser = await chromium.launch({ headless: false, slowMo: 500 });

    });
    after(async () => { await browser.close() });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    describe('show messages', () => {
        it('should call server', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeRes(testContent))
            });
            await page.goto(url);
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
            let result = await response.json();
           assert.deepEqual(result,testContent)
        });
    })
    describe('create message', () => {
        it('should call server', async () => {
            let requestData = undefined;
            let expected = {
                author: 'Pesho',
                content: 'I am Superman'
            };
            await page.route('**/jsonstore/messenger', (route, request) => {
                if(request.method().toLowerCase() === 'post'){
                    requestData = request.postData();
                    route.fulfill(fakeRes(expected))
                }
            });
            await page.goto(url);
            await page.fill('#author', expected.author);          
            await page.fill('#content', expected.content);  

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);
            let result = JSON.parse(requestData);
           assert.deepEqual(result,expected)
        });
    })
});
