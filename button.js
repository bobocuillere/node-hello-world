const puppeteer = require('puppeteer');
const assert = require('assert');

describe('Button Test', async function() {
    let browser;
    let page;

    before(async function() {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        page = await browser.newPage();
        await page.goto('http://localhost:7000/');
    });

    it('Should returned "Button Clicked!"', async function() {
        await page.click('input[type="submit"]');
        await new Promise(resolve => page.on('load', resolve));
        const message = await page.evaluate(() => document.querySelector('body').textContent);
        assert.equal(message, 'Button Clicked!');
    });

    after(async function() {
        await browser.close();
    });
});

