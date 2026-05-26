import {test, expect} from "@playwright/test"
import FlightSearch from "../../Pages/Flight_Search.page"
import path from "path"
import fs from "fs"

const data = fs.readFileSync(path.join(__dirname, "../Utils/flightData.json"), 'utf-8')
const jsonData = JSON.parse(data)

test('flightSearch', async({page}) => {

    await page.goto(jsonData.url, {
        waitUntil : 'domcontentloaded'
    })

    const flightSearch = new FlightSearch(page)
    await flightSearch.FlightSearchScenario()

})