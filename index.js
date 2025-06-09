const { chromium } = require('playwright');
const { login } = require('./handlers/login');
const data = require('./data/data.json');
const raiseIssue = require('./handlers/raiseIssue');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await login(page, data.username, data.password);
        console.log('Login Successfully');
        await raiseIssue(page);
    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await browser.close();
    }
})();
