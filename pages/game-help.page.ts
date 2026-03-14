import { BasePage } from './base.page';

export class GameHelpPage extends BasePage {
    url = '/hilfe/games/';
    readonly title = 'Hilfe';

    readonly pageTitle = this.page.locator('[data-element-id="pageHeader"]');
    readonly gameName = this.page.locator('.help-title');
    readonly gameHelpSelect = this.page.locator('select');
    readonly gameHelpSelectedOption = this.gameHelpSelect.locator('option:checked');

    readonly pageContentSection = this.page.locator('.page-layout__content');
    readonly contentGameButton = this.pageContentSection.locator('a[role="button"]');
}
