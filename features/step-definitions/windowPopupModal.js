const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorWindowPopupModal =  "//*[contains(text(),'Window Popup Modal')]"

const elementFollowOnTwitterBtn = $("//a[text()='  Follow On Twitter ']") // Twitter not working in PAK
const elementLikeUsOnFacebookBtn = $("//a[text()='  Like us On Facebook ']")
const elementFollowUsOnLinkedInBtn = $("//a[text()='  Follow us On Linkedin ']")
const elementOpenURLBtn = $("//a[text()='  Open URL ']")
const elementEnterURL = $("//input[@type='url']")
const elementFollowAllBtn = $('#followall') // Twitter not working
let initialWindowHandle
let newWindowHandle
let currentUrl

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
async function clickOnButton(element){
    await element.waitForClickable({timeout: 5000})
    await element.click()
}

// function 4
async function getNewWindowOpened(expectedUrl){
    initialWindowHandle = await browser.getWindowHandle();
    // Wait until a new window opens
    await browser.waitUntil(
        async () => {
            let handle = await browser.getWindowHandles();
            return handle.length > 1;
        },
        {
            timeout: 10000,
            timeoutMsg: 'Expected a new window to open'
        }
    );
    // window handle is a unique identifier for a browser window or tab. this identifier allows you
    // to interact with and control multiple windows or tabs within a single browser session.
    // Each window or tab that is opened by the browser is assigned a unique handle, which you can use
    // to switch focus between windows or tabs, close them, or perform other actions.
    
    let handles = await browser.getWindowHandles();
    newWindowHandle = handles.filter(handle => handle !== initialWindowHandle)[0];
    await browser.switchToWindow(newWindowHandle);

    currentUrl = await browser.getUrl();
    await expect(currentUrl).toContain(expectedUrl);

    await browser.closeWindow();
    await browser.switchToWindow(initialWindowHandle);
};

// function 5
async function enterURL(newUrl){
    await elementEnterURL.setValue(newUrl)
}

Given('user is on the popup modal page', async()=>{
    await openTheWebsite()
    await clickSpecificGround(locatorWindowPopupModal)
});

When('user clicks on the button', async()=>{
await clickOnButton(elementLikeUsOnFacebookBtn);
});

Then('a new window should open', async()=>{
    await getNewWindowOpened('https://www.facebook.com/lambdatest/')

})

When('user enters any Url', async() =>{
    await enterURL('https://www.lambdatest.com/selenium-playground/')
})

Then('a new url containing window should open', async()=>{
    await clickOnButton(elementOpenURLBtn);
    await getNewWindowOpened('https://www.lambdatest.com/selenium-playground/')
})