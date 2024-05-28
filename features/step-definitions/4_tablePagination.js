const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorTablePagination =  "//*[contains(text(),'Table Pagination')]"
const locatorNextButton = 'li[data-page="next"] span'

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
async function gettingData(){
    this.extractedData = [];

    let nextButtonExists;
    do {
        const rows = await $$('table tbody tr');
        for (const row of rows) {
            const cells = await row.$$('td');
            const rowData = [];
            for (const cell of cells) {
                rowData.push(await cell.getText());
            }
            this.extractedData.push(rowData);
        }

        const nextButton = await $(locatorNextButton);
        nextButtonExists = await nextButton.isExisting() && await nextButton.isEnabled();
        if (nextButtonExists) {
            await nextButton.click();
            await browser.pause(1000);
        }
    } while (nextButtonExists);
    console.log('Extracted Data:', this.extractedData);
    expect(this.extractedData.length).toBeGreaterThan(0);
}

Given('user opens the website and desired ground', async () => {
    await openTheWebsite()
});

When('user chooses the relevant option', async () => {
    await clickSpecificGround(locatorTablePagination)
});

Then('user gets the respective data of all the pages', async ()=> {
    await gettingData()
});

