import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';


Given(/^I am on the "([^"]*)" page$/, async (page) => {
    browser.url(page);
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I am redirected to inventory page$/, async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
});


Then(/^I should see error message saying "([^"]*)"$/, async (message) => {
    await expect(LoginPage.errorMessage).toHaveTextContaining(message);
});
