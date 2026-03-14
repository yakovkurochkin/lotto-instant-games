import {test, expect} from "../support/fixtures/fixtures";

test('ZEAL Instant Games Teaser Carousel – Mobile Navigation Flow', async ({ page, indexPage, locatorHelper, gamePage, gameHelpPage }) => {
    await indexPage.goto();
    await expect(indexPage.instantGamesTeaserSection, 'Instant games Teaser is appeared').toBeVisible();

    await indexPage.instantGamesTeaserSection.scrollIntoViewIfNeeded();
    await locatorHelper.swipeLeft(indexPage.instantGamesTeaserSection);
    await locatorHelper.swipeLeft(indexPage.instantGamesTeaserSection);

    // nth 3 because we can see small parts of 3 games from previous slide
    const targetGame = indexPage.instantGamesTeaserSection.locator(indexPage.gameName).filter({visible: true}).nth(3);
    const targetGameName = await targetGame.innerText();
    await targetGame.click();

    await expect(page, 'User was redirected to the correct url')
        .toHaveURL(new RegExp(`${gamePage.url}${targetGameName.toLowerCase().replace(/\s/g, '')}`));
    await expect(gamePage.pageTittle, 'Page has correct tittle').toContainText(targetGameName);
    await expect(gamePage.gameHelpButton, 'Help button has correct text').toContainText(`Zur ${targetGameName} Hilfe`);

    await gamePage.gameHelpButton.click();
    await expect(page, 'User was redirected to the correct url')
        .toHaveURL(new RegExp(`${gameHelpPage.url}${targetGameName.toLowerCase().replace(/\s/g, '')}`));
    await expect(gameHelpPage.pageTittle, 'Page has correct tittle').toContainText(gameHelpPage.tittle);
    await expect(gameHelpPage.gameName, 'Page has correct game name').toContainText(targetGameName);

    await expect(gameHelpPage.gameHelpSelectedOption, 'Select has a correct game name').toHaveText(targetGameName);
});
