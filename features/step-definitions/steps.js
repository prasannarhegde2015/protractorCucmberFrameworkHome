let {defineSupportCode} = require('cucumber');

function jswait(millisecondsToWait)
{
	setTimeout(function() { console.log("Sleeping for "+millisecondsToWait)}, millisecondsToWait);
}

module.exports = function() {
    this.setDefaultTimeout(60 * 1000);
}; 

defineSupportCode(({When, Then}) => {
   When('I am on the homepage', function(callback) {
    console.log("Executing step 1---------------------------");
    browser.driver.ignoreSynchronization = true ;
    browser.driver.get('http://13.126.109.72/home');
	browser.manage().window().maximize();
	callback();
  });

  Then('I should see a {string}', function(title,callback) {
   console.log("Executing step 2---------------------------"+title);
   var lnktext = "";
   browser.driver.ignoreSynchronization = true ;
   browser.driver.wait(function() {
   return browser.driver.findElement(by.xpath('//a[text()="'+'"'+title+'"'+'"]'))
              .then(function(elem) {
                elem.getText().then(function(text){ console.log("Text Retrvive from WebPage"+text);expect(text).to.equal('PHP Samples');});
                console.log("Text Retrvive from WebPage: "+lnktext);
                return true;
  });
}, 15000);
callback();
});
});
defineSupportCode(({When, Then}) => {
  When('I click on {string}', function(link) {
    console.log("Executing step 3---------------------------");
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//a[text()="'+'"'+link+'"'+'"]'))
              .then(function(elem) {
                elem.click();
                return true;
              });
  }, 15000);
  browser.sleep(5000);
  });
  
  Then('I should find {string}', function(title) {
   console.log("Executing step 4---------------------------");
   var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//a[contains(text(),"'+'"'+title+'"'+'")]'))
              .then(function(elem) {
                elem.getText().then(function(text){ console.log("text last step : 2:  "+text);expect(text).to.contain(title); });
                return true;
              });
  }, 15000);
});
});
defineSupportCode(({When,Then}) => {
  When('I click link {string}', function(link) {
    console.log("Executing step 3---------------------------");
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//a[text()="'+'"'+link+'"'+'"]'))
              .then(function(elem) {
                elem.click();
                return true;
              });
  }, 15000);
  //browser.sleep(5000);
  });
 }); 
 defineSupportCode(({When,Then}) => {
  When('I enter firstname as {string}', function(arg1){
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="firstname"]'))
              .then(function(elem) {
                elem.click();
				  console.log("typing ... "+arg1);
				elem.sendKeys(arg1);
                return true;
              });
  }, 15000);
    });
});
defineSupportCode(({When, Then}) => {
   When('I enter lastname as {string}', function(arg1){
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="lastname"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
  }, 15000);
    });
	});

	
defineSupportCode(({When, Then}) => {
   When('I enter email as {string}', function(arg1){
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="email"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
  }, 15000);
   
    });
	 });

defineSupportCode(({When, Then}) => {
    When('I enter phone as {string}', function(arg1){
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="phone"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
  }, 15000);
         
    });
  });
  
defineSupportCode(({When, Then}) => {
	When('I enter address as {string}', function(arg1){
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="address"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
  }, 15000);
         
    });
	   });
	
defineSupportCode(({When, Then}) => {
When('I click submit', function(callback){
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="btnsubmit"]'))
              .then(function(elem) {
                elem.click();
                return true;
              });
  }, 15000);
         callback();
    });
  Then('I should see {string}', function(vrtxt) {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//font[contains(text(),"System Message:")]'))
              .then(function(elem) {
          //     elem.click();
                elem.getText().then(function(text){ console.log("text last step : 2:  "+text);expect(text).to.contain('Prasanna'); });
          //      expect(lnktext).to.equal('Create Web List.');
		   var userpath = getUserHome();
		   var timestamp =  GetFormattedDate();
		   console.log("Time stamp "+timestamp);
		   browser.takeScreenshot().then(function (png) {
           writeScreenShot(png, 'screenshot_'+timestamp+'.png' , userpath+'\\Screenshots\\');
    });
                return true;
              });
  }, 15000);
            
  });
});


 