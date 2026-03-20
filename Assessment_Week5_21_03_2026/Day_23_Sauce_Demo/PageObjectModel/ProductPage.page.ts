import { Page } from "@playwright/test";

export class ProductPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        await this.page.click("button[name='add']");
    }

    async goToCart() {
        await this.page.click("a[href='/cart']");
    }

    async goToCheckout() {
        await this.page.click("button[name='checkout']");
    }
}