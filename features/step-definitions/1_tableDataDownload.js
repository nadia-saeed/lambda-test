const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorTableDataDownload =  "//*[contains(text(),'Table Data Download')]"
let tableData = []
let getlocator = ''



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
async function getLocator(action){
    return  $(`//*[contains(text(),'${action}')]`)
}

// function 4
async function performAction(action){
    getlocator = await getLocator(action)
    await $(getlocator).waitForDisplayed()
    await $(getlocator).click()
}

// function 5
async function getData (){
    let data = await $$("//tbody/tr[@role='row']")
    for(const row of data){
        const cells = await row.$$('td')
        const rowData = {
            'First Name':   await cells[0].getText(),
            'Last Name':    await cells[1].getText(),
            'Gender':       await cells[2].getText(),
            'Age':          await cells[3].getText(),
            'Occupation':   await cells[4].getText(),
            'Experience':   await cells[5].getText()
        };
        tableData.push(rowData);
    };
        this.tableData = tableData;

        const tableDataJson = JSON.stringify(this.tableData, null, 2);
        console.log(tableDataJson);
        await expect(this.tableData.length).toBeGreaterThan(0);
}

Given('user opens the website', async () => {
    await openTheWebsite()
});

When('user chooses the relevant option', async () => {
    await clickSpecificGround(locatorTableDataDownload)
//  await performAction('Print')
});

Then('user gets the data', async ()=> {
    await getData()
});

