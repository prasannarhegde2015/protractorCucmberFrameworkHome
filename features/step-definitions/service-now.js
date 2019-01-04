describe('Angular Test', function() {
  it('Service Now test', function() {
	browser.ignoreSynchronization = true
	browser.manage().window().maximize();
    browser.get('https://dev46183.service-now.com');
	browser.driver.wait(function() {
    return browser.driver.findElement(by.id('gsft_main'))
              .then(function(elem) {
                browser.driver.switchTo().frame(elem);
                return true;
              });
  }, 60000);
	 console.log("Switched to Frame");  
//	
browser.driver.wait(function() {
     return browser.driver.findElement(by.id('user_name'))
              .then(function(elem) {
                elem.sendKeys('admin');
                return true;
              });
  }, 60000);
	//driver.findElement(by.id('user_name')).sendKeys('admin');
	browser.driver.findElement(by.id('user_password')).sendKeys('ServiceNow97bd916$');
	browser.driver.findElement(by.id('sysverb_login')).click();
	console.log("clicked Login"); 
	browser.driver.switchTo().defaultContent();
	browser.waitForAngular();
    
  });
});
