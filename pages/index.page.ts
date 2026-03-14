import {BasePage} from "./base.page";

export class IndexPage extends BasePage {
    url = '/';

    readonly instantGamesTeaserSection = this.page.locator('teaser-product-teaser-games-feature:has-text("ZEAL Instant Games")');
    readonly gameName = this.page.locator('.info-container .headline');
}