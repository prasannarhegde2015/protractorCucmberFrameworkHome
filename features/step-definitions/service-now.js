
describe('Angular Test', function() {
  it('Service Now test', function() {
	  var incnum = "";
	  
	   var fs = require('fs');

    // abstract writing screen shot to a file
 function writeScreenShot(data, filename,path) {
        var stream = fs.createWriteStream(path+ filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
	function jswait(millisecondsToWait)
{
	setTimeout(function() { console.log("Sleeping for "+millisecondsToWait)}, millisecondsToWait);
}
	browser.ignoreSynchronization = true
	browser.manage().window().maximize();
	browser.executeScript("alert('Test');").then(function () {
	return browser.switchTo().alert().accept(); });
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
	browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.linkText('Incidents'))
		.then(function(elem) {
			elem.click();
			return true;
		});
	},60000);
	browser.driver.wait(function() {
	  return browser.driver.findElement(by.id('gsft_main'))
              .then(function(elem) {
                browser.driver.switchTo().frame(elem);
                return true;
              });
	},60000);
	browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.id('sysverb_new'))
		.then(function(elem) {
			elem.click();
			return true;
		});
	},60000);
	var name = element(by.id('incident.number'));
name.getAttribute('value').then(function(text) {
  console.log("Incident number  text is : "+text);
   incnum = text;
});

	//incident.short_description
		browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.id('incident.short_description'))
		.then(function(elem) {
			elem.sendKeys('Protractor Input');
			return true;
		});
	},60000);
	browser.driver.findElement(by.id('incident.comments')).sendKeys('Incidents Description');
	element(by.cssContainingText('option', '2 - Medium')).click();	
	/*  browser.driver.wait(
	 function()
	 {
			return browser.driver.findElement(by.id('incident.number'))
              .then(function(elem) {
                elem.getText()
				.then(function(text)
				{ console.log("Incident Number Extracted:"+text); });
                return true;
  });
}, 15000) */

	browser.driver.findElement(by.id('sysverb_insert')).click();
	
	
	browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.linkText(incnum))
		.then(function(elem) {
			elem.click();
			return true;
		});
	},60000);
	
	 // within a test:
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'incnum'+incnum+'.png','.\\Screenshots\\');
    });
	
	//browser.driver.findElement(by.id('sysverb_delete')).click();
	browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.id('sysverb_delete'))
		.then(function(elem) {
			elem.click();
			jswait(5000);
			return true;
		});
	},60000);
	
	browser.sleep(5000);
	browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.id('ok_button'))
		.then(function(elem) {
			elem.click();
			return true;
		});
	},60000);
	browser.sleep(2000);
	browser.driver.switchTo().defaultContent();
	browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.id("user_info_dropdown"))
		.then(function(elem) {
			elem.click();
			return true;
		});
	},60000);
	
	browser.driver.wait( 
	function()
	{
		return browser.driver.findElement(by.xpath("//*[contains(text(),'Logout')]"))
		.then(function(elem) {
			elem.click();
			return true;
		});
	},60000);
	
	   browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'loggedout.png','.\\Screenshots\\');
    });
	console.log("Test Ended"); 
    
  });

});
