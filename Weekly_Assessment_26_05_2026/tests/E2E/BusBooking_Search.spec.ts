import {test, expect} from "@playwright/test"
import BusBookingSearch from "../../Pages/BusBooking_Search.page"
import path from "path"
import fs from "fs"

const data = fs.readFileSync(path.join(__dirname, "../../Utils/BusBookingData.json"), 'utf-8')
const jsonData = JSON.parse(data)

test('busBookingSearch', async({page}) => {

    await page.goto(jsonData.url, {
        waitUntil : 'domcontentloaded'
    })
    
    const busBookingSearch = new BusBookingSearch(page)
    await busBookingSearch.BusBookingSearchScenario()
})