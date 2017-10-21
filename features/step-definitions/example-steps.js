let {defineSupportCode} = require('cucumber');

defineSupportCode(({When, Then}) => {
  When('I navigate to {string}', function(site) {
    return browser.get(site);
  });

  Then('the title should be {string}', function(title) {
    return expect(browser.getTitle()).to.eventually.eql(title);
  });
});
