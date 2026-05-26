3 end to end scenarios



Here are 3 solid end-to-end scenarios you can automate for the [MakeMyTrip](https://www.makemytrip.com/?utm_source=chatgpt.com) website using the Playwright Page Object Model (POM).
These are realistic, interview-friendly, and good for demonstrating automation architecture.

---

# 1. Flight Search Scenario ✈️

## Scenario

* Open MakeMyTrip
* Close login popup
* Select **From** city
* Select **To** city
* Select departure date
* Search flights
* Validate flight results page appears

## Why this is good for POM

This scenario involves:

* Auto-suggestion dropdowns
* Calendar handling
* Dynamic locators
* Page navigation

## Suggested Pages

### `HomePage.js`

Methods:

* `goto()`
* `closePopup()`
* `selectFromCity(city)`
* `selectToCity(city)`
* `selectDepartureDate(date)`
* `clickSearch()`

### `FlightResultsPage.js`

Methods:

* `verifyResultsVisible()`
* `getFlightCount()`

## Assertions

* Results page URL contains `flight/search`
* Flight cards are visible
* Search summary matches selected cities

---

# 2. Hotel Search Scenario 🏨

## Scenario

* Open website
* Navigate to Hotels section
* Enter city
* Select check-in/check-out dates
* Select guests/rooms
* Search hotels
* Apply price filter
* Verify hotel listings appear

## Why this is good

Demonstrates:

* Multiple filters
* Dropdown handling
* Complex UI interactions
* Reusable components

## Suggested Pages

### `HotelsPage.js`

Methods:

* `selectCity()`
* `selectDates()`
* `selectGuests()`
* `searchHotels()`

### `HotelResultsPage.js`

Methods:

* `applyPriceFilter()`
* `verifyHotelsDisplayed()`

## Assertions

* Hotel cards count > 0
* Filters applied correctly
* URL contains hotel search params

---

# 3. Bus Booking Search Scenario 🚌

## Scenario

* Open MakeMyTrip
* Go to Bus section
* Select source and destination
* Choose travel date
* Search buses
* Filter by AC/Sleeper
* Validate filtered buses displayed

## Why this is good

Covers:

* Radio buttons
* Filters
* Lists
* Dynamic search results

## Suggested Pages

### `BusPage.js`

Methods:

* `enterSource()`
* `enterDestination()`
* `selectTravelDate()`
* `searchBus()`

### `BusResultsPage.js`

Methods:

* `applyACFilter()`
* `applySleeperFilter()`
* `verifyResults()`

## Assertions

* Bus listings visible
* Applied filters reflected
* Search route displayed correctly

---

# Recommended POM Folder Structure

```plaintext
project/
│
├── pages/
│   ├── HomePage.js
│   ├── FlightResultsPage.js
│   ├── HotelsPage.js
│   ├── HotelResultsPage.js
│   ├── BusPage.js
│   └── BusResultsPage.js
│
├── tests/
│   ├── flight.spec.js
│   ├── hotel.spec.js
│   └── bus.spec.js
│
├── utils/
│   └── testData.js
│
└── playwright.config.js
```

---

# Best Scenario for Interview/Demo

If you want the strongest project:

1. Flight Booking Search
2. Hotel Search with Filters
3. Bus Search with Filters

Together they showcase:

* Dynamic locators
* Date pickers
* Dropdowns
* Assertions
* Filters
* Reusable POM architecture
* Real-world automation challenges

---

# Bonus Advanced Features You Can Add

You can impress further by adding:

* Data-driven testing using CSV/JSON
* Screenshots on failure
* Retry mechanism
* Parallel execution
* Allure reports
* Environment configs
* CI/CD with GitHub Actions
* Cross-browser testing

These make your Playwright framework look production-ready.
