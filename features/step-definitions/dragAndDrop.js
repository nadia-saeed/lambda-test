const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorDragAndDropDemo =  "//*[contains(text(),'Drag and Drop')]"
const elementDragItem1 = $("//div[@id='todrag']//span[text()='Draggable 1']")
const elementDragItem2 = $("//div[@id='todrag']//span[text()='Draggable 2']")
let itemsText

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
async function dragAndDropItems(element){
    itemsText = await element.getText()
    const elementDropArea = await $('#mydropzone')
    await element.dragAndDrop(elementDropArea)
    
}

// function 4
async function verifyDroppedItems(){
    const elementDroppedItemsList = await $("#droppedlist")
    let droppedItems = await elementDroppedItemsList.getText()
    console.log(droppedItems)
    await expect(droppedItems).toBe(itemsText)
}

Given('user is on the drag and drop demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorDragAndDropDemo)
});

When('user drags Draggable item to the drop area', async () => {
    await dragAndDropItems(elementDragItem2)
});

Then('the Draggable item should be listed in the Dropped Items List', async ()=> {
    await verifyDroppedItems()
});