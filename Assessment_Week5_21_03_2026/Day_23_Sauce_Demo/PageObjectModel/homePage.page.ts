import { Page } from "@playwright/test";

export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async selectProduct(productName: string) {
        await this.page.locator(`text=${productName}`).first().click();
    }
}