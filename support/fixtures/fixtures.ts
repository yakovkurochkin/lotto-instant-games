import { test as base } from '@playwright/test';
import { IndexPage } from '../../pages/index.page';
import { GamePage } from '../../pages/game.page';
import { LocatorHelper } from '../helpers/locator.helper';
import {GameHelpPage} from "../../pages/game-help.page";

type Fixtures = {
    indexPage: IndexPage;
    gamePage: GamePage;
    gameHelpPage: GameHelpPage;
    locatorHelper: LocatorHelper;
};

export const test = base.extend<Fixtures>({
    indexPage: async ({ page }, use) => {
        await use(new IndexPage(page));
    },
    gamePage: async ({ page }, use) => {
        await use(new GamePage(page));
    },
    gameHelpPage: async ({ page }, use) => {
        await use(new GameHelpPage(page));
    },
    locatorHelper: async ({ page }, use) => {
        await use(new LocatorHelper(page));
    },
});

export { expect } from '@playwright/test';
