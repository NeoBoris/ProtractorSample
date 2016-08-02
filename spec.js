describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');

    element(by.model('first')).sendKeys('3');
    element(by.model('second')).sendKeys('4');
    element(by.id('gobutton')).click();
    browser.sleep(3000);
    var latest = element(by.binding('latest'));
    expect(latest.getText()).toEqual('7');
  });
});