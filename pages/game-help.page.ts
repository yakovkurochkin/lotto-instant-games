import { BasePage } from './base.page';

export class GameHelpPage extends BasePage {
    url = '/hilfe/games/';
    readonly tittle = 'Hilfe';

    readonly pageTittle = this.page.locator('[data-element-id="pageHeader"]');
    readonly gameName = this.page.locator('.help-title');
    readonly gameHelpSelect = this.page.locator('select');
    readonly gameHelpSelectedOption = this.gameHelpSelect.locator('option:checked');
}
