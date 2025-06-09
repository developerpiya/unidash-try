async function login(page,username,password) {
    await page.goto('https://unidash-test.unibots.com/login');
    await page.fill('#login-form_username', username);
    await page.fill('#login-form_password', password);
    await page.click('button[type="submit"]');

}
module.exports = { login };
