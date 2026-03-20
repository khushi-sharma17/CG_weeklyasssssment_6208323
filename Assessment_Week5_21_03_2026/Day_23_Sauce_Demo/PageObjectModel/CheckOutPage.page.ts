import { Page } from "@playwright/test";

export class CheckoutPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillDetails(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill("#checkout_shipping_address_first_name", firstName);
        await this.page.fill("#checkout_shipping_address_last_name", lastName);
        await this.page.fill("#checkout_shipping_address_zip", postalCode);
    }
}