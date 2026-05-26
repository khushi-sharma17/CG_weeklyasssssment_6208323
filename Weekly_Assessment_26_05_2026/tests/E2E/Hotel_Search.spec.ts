import {test, expect} from "@playwright/test"
import HotelSearch from "../../Pages/Hotel_Search.page"
import path from "path"
import fs from "fs"

const data = fs.readFileSync(path.join(__dirname, "../Utils/HotelData.json"), 'utf-8')
const jsonData = JSON.parse(data)

test('hotelSearch', async({page}) => {
    await page.goto(jsonData.url, {
        waitUntil : 'domcontentloaded'
    })
    const hotelSearch = new HotelSearch(page)
    await hotelSearch.HotelSearchScenario()
})