import { test as base } from "@playwright/test";

import FlightSearch from "../Pages/Flight_Search.page";
import HotelSearch from "../Pages/Hotel_Search.page";
import BusBookingSearch from "../Pages/BusBooking_Search.page";

type MyFixtures = {
    flightSearch: FlightSearch;
    hotelSearch: HotelSearch;
    busSearch: BusBookingSearch;
};

export const test = base.extend<MyFixtures>({
    
    flightSearch: async ({ page }, use) => {
        await use(new FlightSearch(page));
    },

    hotelSearch: async ({ page }, use) => {
        await use(new HotelSearch(page));
    },

    busSearch: async ({ page }, use) => {
        await use(new BusBookingSearch(page));
    }

});

export { expect } from "@playwright/test";