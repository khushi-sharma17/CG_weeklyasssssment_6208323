import { test, expect } from "../../fixtures/pageFixture";

test("Flight Search to Bus Search Integration", async ({
    page,
    flightSearch,
    busSearch
}) => {

    await page.goto("https://www.makemytrip.com");

    await flightSearch.FlightSearchScenario();

    await expect(page).toHaveURL(/flight\/search/);

    await page.goto("https://www.makemytrip.com");

    await busSearch.BusBookingSearchScenario();

    await expect(page).toHaveURL(/bus-tickets/);

});