import { test, expect } from "../../fixtures/pageFixture";

test("Flight Search to Hotel Search Integration", async ({
    page,
    flightSearch,
    hotelSearch
}) => {

    await page.goto("https://www.makemytrip.com");

    // Flight Search

    await flightSearch.FlightSearchScenario();

    await expect(page).toHaveURL(/flight\/search/);

    // Navigate back

    await page.goto("https://www.makemytrip.com");

    // Hotel Search

    await hotelSearch.HotelSearchScenario();

    await expect(page).toHaveURL(/hotels/);

});