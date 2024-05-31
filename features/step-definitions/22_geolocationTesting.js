const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/geolocation-testing'
const locatorIPaddress =  '//p[contains(text(), "IP Address:")]/span'
const locatorCountryName = '//p[contains(text(), "Country Name:")]/span'
const locatorCountryCode = '//p[contains(text(), "Country Code:")]/span'
const locatorLatitude = '//p[contains(text(), "Latitude:")]/span'
const locatorLongitude = '//p[contains(text(), "longitude:")]/span'
let IPaddress = ''
let countryName = ''
let countryCode = ''
let latitude = ''
let longitude = ''

// function 1
async function openTheWebsite(){
    await browser.url(url)
}

// function 2
async function toGetTheValues(){
    await browser.getGeoLocation()
    console.log('Current Geolocation:', location)
    this.location = location;
    const location = this.location;
    expect(location).toHaveProperty('latitude');
    expect(location).toHaveProperty('longitude');
    expect(location).toHaveProperty('altitude');
    IPaddress = $(locatorIPaddress)
    console.log(await IPaddress.getText(), 'IP')
    countryName = $(locatorCountryName)
    console.log(await countryName.getText(), 'Name')
    countryCode = $(locatorCountryCode)
    console.log(await countryCode.getText(), 'code')
    latitude = $(locatorLatitude)
    console.log(await latitude.getText(), 'latitude')
    longitude = $(locatorLongitude)
    console.log(await longitude.getText(), 'longitude')
}

// function 2
async function toVerifyValues(IP, name, code, latitudeValue, longitudeValue){
    console.log(IP, name, code, latitudeValue, longitudeValue, 'LOOP')
    await expect(IPaddress).toHaveText(expect.stringContaining(IP))
    await expect(countryName).toHaveText(expect.stringContaining(name))
    await expect(countryCode).toHaveText(expect.stringContaining(code))
    await expect(latitude).toHaveText(expect.stringContaining(latitudeValue))
    await expect(longitude).toHaveText(expect.stringContaining(longitudeValue))
}


Given('the geolocation information', async () => {
    await openTheWebsite()
    await toGetTheValues()
});

Then('the information is valid', async ()=> {
    await toVerifyValues('182.191.83.208', 'Pakistan', 'PK' , '30', '70' )
});
