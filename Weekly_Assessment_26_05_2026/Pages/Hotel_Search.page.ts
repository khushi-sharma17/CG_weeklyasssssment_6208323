import {Locator, expect, Page} from "@playwright/test"
import path from "path"
import fs from "fs"

const data = fs.readFileSync(path.join(__dirname, "../Utils/HotelData.json"), 'utf-8')
const jsonData = JSON.parse(data)


class HotelSearch {

    page : Page
    jsData : any = jsonData

    closeLoginButton : Locator
    backToClassicSearchBtn : Locator

    selectHotelsOption : Locator

    selectCityBtn : Locator    
    selectCityTextField : Locator
    selectCityOption : Locator


    selectCheckInDateBtn : Locator
    selectCheckInDate : Locator

    selectCheckOutDate : Locator    


    increaseRoomNumberBtn : Locator
    selectApplyInRoomNumberBtn : Locator

    selectPriceFilterBtn : Locator
    selectPriceOption : Locator

    selectSearchOption : Locator



    constructor(page : Page) {

        this.page = page
        this.closeLoginButton = page.locator(".commonModal__close[data-cy='closeModal']")
        this.selectHotelsOption = page.locator(".chNavIcon.appendBottom2.chSprite.chHotels.inactive")
        this.backToClassicSearchBtn = page.locator("//span[text()='Back to Classic Search']")

        this.selectCityBtn = page.locator("#city")
        this.selectCityTextField = page.getByPlaceholder("Where do you want to stay?")

        this.selectCityOption = page.locator('//p[@class="freeText"]')

        this.selectCheckInDateBtn = page.locator('#checkin')
        this.selectCheckInDate = page.locator('//span[text()=20]')

        this.selectCheckOutDate = page.locator('//div[@class="DayPicker-Day DayPicker-Day--selected"]//span[text()="1"]')

        this.increaseRoomNumberBtn = page.getByRole("button", {name : "Increase value from 1"})         // but it won't work for the next time when tested again......what xpath should I use for this then ??
        this.selectApplyInRoomNumberBtn = page.getByRole("button", {name : "APPLY"})

        this.selectPriceFilterBtn = page.locator("//div[@class='hsw_inputBox travelFor']")
        this.selectPriceOption = page.locator('//ul[@class="ppn__list"]//li[text()="₹1500-₹2500"]')

        this.selectSearchOption = page.getByRole('button', {name : "Search"})
    }



    async HotelSearchScenario() {
        
        await this.closeLoginButton.click()
        await this.selectHotelsOption.click()
        await this.backToClassicSearchBtn.click()
        await this.selectCityBtn.click()
        await this.selectCityTextField.fill(this.jsData.hotelSearch.city)
        await this.selectCityOption.click()

        await this.selectCheckInDateBtn.click()
        await this.selectCheckInDate.first().click()

        await this.selectCheckOutDate.click()

        await this.increaseRoomNumberBtn.click()

        await this.selectApplyInRoomNumberBtn.click()

        await this.selectPriceOption.click()

        await this.selectSearchOption.click()


        // Validtion 1 -> URL 
        await expect(this.page).toHaveURL(/hotels/)

        // Validation 2 -> Validating hotel listings appear
        await expect(
            this.page.locator('//div[contains(@class,"listingRow")]').first()
        ).toBeVisible()
    }   

}

export default HotelSearch