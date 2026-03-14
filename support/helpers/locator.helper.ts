import { Locator, Page } from '@playwright/test';

export class LocatorHelper {
    private readonly _page: Page;

    constructor(page: Page) {
        this._page = page;
    }

    /**
     * Perform swipe left on locator
     *
     * @param locator
     */
    async swipeLeft(locator: Locator): Promise<void> {
        const box = await locator.boundingBox();
        if (!box) throw new Error('Could not get bounding box for locator');

        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;

        await this._page.mouse.move(startX, startY);
        await this._page.mouse.down();
        await this._page.mouse.move(startX - box.width, startY);
        await this._page.mouse.up();
    }
}
