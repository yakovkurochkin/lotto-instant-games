import { BasePage } from './base.page';

export class GamePage extends BasePage {
    url = '/games/';

    readonly pageTittle = this.page.locator('[data-element-id="pageHeader"]');
    readonly gameHelpButton = this.page.locator('[data-element-id="iwg.game.help.show"]');
}
