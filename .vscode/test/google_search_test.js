
const { Browser, By, Key, until } = require('selenium-webdriver')
const { ignore, suite } = require('selenium-webdriver/testing')

suite(function (env) {
  describe('Google Search', function () {
    let driver

    before(async function () {
      // env.builder() returns a Builder instance preconfigured for the
      // envrionment's target browser (you may still define browser specific
      // options if nророппропопаапаппрорпecessary (i.e. firefox.Options or chrome.Options)).
      driver = await env.builder().build()
    })

    it('demo', async function () {
      await driver.get('https://www.google.com/ncr')
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
      await driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000)
    })

    // The ignore function returns wrappers around describe & it that will
    // suppress tests if the provided predicate returns true. You may provide
    // any synchronous predicate. The env.browsers(...) function generates a
    // predicate that will suppress tests if the  env targets one of the
    // specified browsers.
    //
    // This example is always configured to skip Chrome.
    ignore(env.browsers(Browser.CHROME)).it('demo 2', async function () {
      await driver.get('https://www.google.com/ncr')
      await driver.wait(until.urlIs('https://www.google.com/'), 1500)
    })

    after(() => driver && driver.quit())
  })
})
