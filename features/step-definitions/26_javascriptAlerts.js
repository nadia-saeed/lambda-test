const elementJSAlert = $('button.btn.btn-dark.my-30.mx-10.hover\:bg-lambda-900.hover\:border-lambda-900')
const elementConfirmBox = $('')
const elementPromptBox = $('')
async function verifyAlert(expectedAlertText){
    const alertText = await browser.getAlertText();
    await expect(alertText).toBe(expectedAlertText);
    
    // Accept the alert
    await browser.acceptAlert();
}