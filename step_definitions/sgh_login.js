const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const url = 'https://stage.sunglasshut.com/UserSignInView?catalogId=20602&langId=-1&storeId=10152'
const user = 'test.sgh.us@abstract.it'
const pass = 'Password1!'

Given(/^browser is on sign-in page$/, () => {
  // Write code here that turns the phrase above into concrete actions
  return client.url(url).waitForElementVisible('body', 1000);
});

Given(/^user has valid credentials$/, () => {
  return client.setValue('#WC_AccountDisplay_FormInput_logonId_In_Logon_1_copy4', user)
    .setValue('#WC_AccountDisplay_FormInput_logonPassword_In_Logon_1_copy4', pass)
});

When(/^user sign-in$/, () => {
  return client.waitForElementVisible('.red-button', 1000).click('.red-button')
});

Then(/^the browser should show the "([^"]*)" message$/, message => {
  return client.waitForElementVisible('.myaccount-welcome', 2000).assert.visible('.myaccount-welcome', message)
});