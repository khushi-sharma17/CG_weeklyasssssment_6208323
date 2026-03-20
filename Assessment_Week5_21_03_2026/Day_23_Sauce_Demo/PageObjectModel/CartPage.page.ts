import { Page, expect } from "@playwright/test";

export class CartPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProduct(productName: string) {
        await expect(this.page.locator(".cart-item__name")).toContainText(productName);
    }

    async proceedToCheckout() {
        await this.page.click("button[name='checkout']");
    }
}