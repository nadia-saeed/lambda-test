const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

let url = 'https://www.lambdatest.com/selenium-playground/'
let getResultsLocator = ''
let isPresent = ''
const locatorTableFilter =  "//*[contains(text(),'Table Filter')]"
 let filterButtonLocator = ''

// function 1
async function openTheWebsite(){
    await browser.url(url)
}

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

// function 3
async function getResults (filterText){
    filterButtonLocator = $(`//button[text()="${filterText}"]`)
    await filterButtonLocator.click()
    await browser.pause(1000)
    let arr= []
    let rows = $$('//div[contains(@class, "content")]//h3');

    // for(let i=0; i<rows.length; i++){
    //  arr.push(await rows[i].getText())
    // }
    // console.log(arr, 'arrr')

    let found = false;
    for (const row of rows) {
      const cellText = await row.getText();
      // console.log(cellText, 'POLO')
      if (cellText === filterText) {
        found = true;
        break;
      }}
      expect(found).toBe(true)
}


Given('user opens the website and desired ground', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorTableFilter)
});

When('user filters the desired entry', async () => {
    await getResults('Selenium Testing', )

});

Then('user gets the respective data if it was present', async ()=> {
    await browser.pause(1000)
});




