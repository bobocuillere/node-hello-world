const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const mocha = require('mocha');
const puppeteer = require('puppeteer');


describe('Button Test', function() {
    
    let driver = await puppeteer.launch({headless: true});


    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('0.0.0.0:7000/');
    });

    it('should click the button and return "Button Clicked!"', async function() {
        const button = await driver.findElement(By.css('input[type="submit"]'));
        await button.click();
        const message = await driver.findElement(By.css('body')).getText();
        assert.equal(message, 'Button Clicked!');
    });

    after(async function() {
        await driver.quit();
    });
});
