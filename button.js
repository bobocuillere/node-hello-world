const puppeteer = require('puppeteer');
const assert = require('assert');

describe('Button Test', async function() {
  let browser;
  let page;

  before(async function() {
    browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/google-chrome'
    });
    page = await browser.newPage();
    await page.goto('http://localhost:7000/');
  });

  it('should click the button and return "Button Clicked!"', async function() {
    await page.click('input[type="submit"]');
    const message = await page.$eval('body', el => el.innerText);
    assert.equal(message, 'Button Clicked!');
  });

  after(async function() {
    await browser.close();
  });
});
