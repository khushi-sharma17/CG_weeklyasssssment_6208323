import {Locator, expect, Page} from "@playwright/test"
import path from "path"
import fs from "fs"

const data = fs.readFileSync(path.join(__dirname, "../Utils/flightData.json"), 'utf-8')
const jsonData = JSON.parse(data)

class FlightSearch {

    page : Page
    jsData : any = jsonData

    closeLoginButton : Locator
    backToClassicSearchBtn : Locator

    selectFromCityBtn : Locator
    FromCityTextField : Locator

    selectToCityBtn : Locator
    toCityTextArea : Locator

    selectDepartureDateBtn : Locator
    selectDepartureDate : Locator

    selectSearchButton : Locator


    constructor(page : Page) {

        this.page = page
        
        this.closeLoginButton = page.locator(".commonModal__close[data-cy='closeModal']")

        this.backToClassicSearchBtn = page.locator("//span[text()='Back to Classic Search']")
        
        this.selectFromCityBtn = page.locator('#fromCity')
        this.FromCityTextField = page.getByPlaceholder("From")

        this.selectToCityBtn = page.locator('#toCity')
        this.toCityTextArea = page.getByPlaceholder("To")

        this.selectDepartureDateBtn = page.locator('//label[@for="departure"]')
        this.selectDepartureDate = page.locator('//div[@class="DayPicker-Day"]//p[text()="25"]')

        this.selectSearchButton = page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]')
    }


    // async FlightSearchScenario() {

    //     await this.closeLoginButton.click()
    //     await this.backToClassicSearchBtn.click()
        
    //     await this.selectFromCityBtn.click()
    //     await this.FromCityTextField.fill(this.jsData.flightSearch.fromCity)
    //     // await this.page.locator('//span[@class="revampedCityName" and text()="Jaipur, India"]').click()



    //     await this.selectToCityBtn.waitFor({
    //         state: 'visible'
    //     })

    //     await this.selectToCityBtn.click()
    //     await this.toCityTextArea.fill(this.jsData.flightSearch.toCity)
    //     await this.page.locator('//span[@class="revampedCityName" and text()="Bengaluru, India"]').first().click()

    //     await this.selectDepartureDateBtn.click()
    //     await this.selectDepartureDate.first().click()

    //     await this.selectSearchButton.click()

    //     // Validation 1 : -> URL validation
    //     await expect(this.page).toHaveURL(/flight\/search/)

    //     // Validation 2 -> Flight results visible
    //     await expect(
    //         this.page.locator('.fontSize24.blackFont.whiteText.appendBottom20.journey-title.makeFlex.spaceBetween.bottom')
    //     ).toBeVisible()
    // }



    async FlightSearchScenario() {

        // Close login popup if visible
        if(await this.closeLoginButton.isVisible()) {
            await this.closeLoginButton.click()
        }

        // Switch to classic search if visible
        if(await this.backToClassicSearchBtn.isVisible()) {
            await this.backToClassicSearchBtn.click()
        }

        await this.selectFromCityBtn.click()

        await this.FromCityTextField.fill(this.jsData.flightSearch.fromCity)

        await this.page.getByRole('option', {
            name: 'Jaipur, Rajasthan'
        }).click()

        await this.selectToCityBtn.click()

        await this.toCityTextArea.fill(this.jsData.flightSearch.toCity)

        await this.page.getByRole('option', {
            name: 'Bengaluru, Karnataka'
        }).click()

        await this.selectDepartureDateBtn.click()

        await this.selectDepartureDate.first().click()

        await this.selectSearchButton.click()
    }

}

export default FlightSearch