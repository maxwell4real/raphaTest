import {Given, When, Then} from '@cucumber/cucumber'
import {loginpage} from "../../page-objects/loginPage";


Given(/^I am on heroku login page$/, async function() {
    await browser.url('/login')
    await browser.pause(1000)
});

When(/^I login with (.*) and (.*)$/, async function(username, password) {
    await loginpage.enterUsername.setValue(username)
    await loginpage.enterPassword.setValue(password)
    await loginpage.loginBtn.click()
});

Then(/^I should see a flash message saying (.*)$/, async function (message) {
    let expectedMessage = await $('#flash')
    await expect(expectedMessage).toBeExisting();
    await expect(expectedMessage).toHaveTextContaining(message);
});