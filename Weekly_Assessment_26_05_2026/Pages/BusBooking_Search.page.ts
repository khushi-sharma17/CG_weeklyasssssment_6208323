import {Locator, expect, Page} from "@playwright/test"
import path from "path"
import fs from "fs"

const data = fs.readFileSync(path.join(__dirname, "../Utils/BusBookingData.json"), 'utf-8')
const jsonData = JSON.parse(data);


class BusBookingSearch {

    page : Page
    jsdata : any = jsonData

    closeLoginButton : Locator
    selectBusesOption : Locator

    selectFromCityBtn : Locator
    selectFromCityTextField : Locator
    selectFromCityOption : Locator

    selectToCityBtn : Locator
    selectToCityTextField : Locator
    selectToCityOption : Locator


    selectTravelDateBtn : Locator
    selectDate : Locator

    selectSearchButton : Locator


    constructor(page : Page) {
        
        this.page = page
        this.closeLoginButton = page.locator(".commonModal__close[data-cy='closeModal']")
        this.selectBusesOption = page.locator('.chNavIcon.appendBottom2.chSprite.chBuses.inactive')

        this.selectFromCityBtn = page.locator("#fromCity")
        this.selectFromCityTextField = page.getByPlaceholder("From")
        this.selectFromCityOption = page.getByText("Jaipur, Rajasthan")
        
        this.selectToCityBtn = page.locator("#toCity")
        this.selectToCityTextField = page.getByPlaceholder("To")
        this.selectToCityOption = page.getByText("Delhi")
        
        this.selectTravelDateBtn = page.locator("#travelDate")
        this.selectDate = page.locator("//div[@aria-label='Sat May 30 2026']")

        this.selectSearchButton = page.getByRole("button", {name : "Search"})

    }


    async BusBookingSearchScenario() {

        await this.closeLoginButton.click()
        await this.selectBusesOption.click()

        await this.selectFromCityBtn.click()
        await this.selectFromCityTextField.fill(this.jsdata.busSearch.fromCity)
        await this.selectFromCityOption.click()

        await this.selectToCityBtn.click()
        await this.selectToCityTextField.fill(this.jsdata.busSearch.toCity)
        await this.selectToCityOption.click()

        await this.selectTravelDateBtn.click()
        await this.selectDate.click()

        await this.selectSearchButton.click()

        
        // Validations

        await expect(this.page).toHaveURL(/bus-tickets/)

        await expect(
            this.page.locator("//div[contains(@class,'BusCard_listingTopInfo__QnWvr')]").first()
        ).toBeVisible()
    }
}

export default BusBookingSearch