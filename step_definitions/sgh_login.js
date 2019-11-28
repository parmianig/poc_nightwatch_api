const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const url = 'https://uat2.sunglasshut.com/UserSignInView?catalogId=20602&langId=-1&storeId=10152'
const user = 'test.sgh.us@abstract.it'
const pass = 'Password1!'

Given(/^browser is on sign-in page$/, () => {
  // Write code here that turns the phrase above into concrete actions
  return client.url(url).waitForElementVisible('body', 1000);
});

Given(/^user has valid credentials$/, () => {
  return 'pending';
});

When(/^user sign-in$/, () => {
  return 'pending';
});

Then(/^the browser should show the welcome page$/, () => {
  return 'pending';
});