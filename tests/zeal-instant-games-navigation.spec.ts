import {test, expect} from "../support/fixtures/fixtures";

test('ZEAL Instant Games Teaser Carousel – Mobile Navigation Flow', async ({ page, indexPage, locatorHelper, gamePage, gameHelpPage }) => {
    await test.step('Open the games area on a mobile viewport', async () => {
        await indexPage.goto();
    })
    await expect(indexPage.instantGamesTeaserSection, 'Verify that the “ZEAL Instant Games” teaser section is present on the page')
        .toBeVisible();

    await test.step('Swipe twice to the left within the “ZEAL Instant Games” teaser section', async () => {
        await locatorHelper.swipeLeft(indexPage.instantGamesTeaserSection);
        await locatorHelper.swipeLeft(indexPage.instantGamesTeaserSection);
    })

    // After 2 swipes, the carousel shows 3 partially visible games from the previous slide
    // on the left edge, followed by the first fully visible game — hence nth(3).
    const targetGame = indexPage.instantGamesTeaserSection.locator(indexPage.gameName).filter({visible: true}).nth(3);
    const targetGameName = await targetGame.innerText();

    await test.step('Click on the product teaser for the first game in the list', async () => {
        await targetGame.click();
    })

    const gameNameUrlPart = `${targetGameName.toLowerCase().replace(/\s/g, '')}`;

    await expect(page, 'Verify that the correct game page is opened / loaded')
        .toHaveURL(new RegExp(gamePage.url + gameNameUrlPart));
    await expect(gamePage.pageTitle, 'Page has correct title').toContainText(targetGameName);
    await expect(gamePage.gameHelpButton, 'Verify that the correct help link “Zur [game name] Hilfe” is on the page')
        .toContainText(`Zur ${targetGameName} Hilfe`);

    await test.step('Click on the help link', async () => {
        await gamePage.gameHelpButton.click();
    })

    await expect(page, 'Verify that the correct help page is opened')
        .toHaveURL(new RegExp(gameHelpPage.url + gameNameUrlPart));
    await expect(gameHelpPage.pageTitle, 'Page has correct title').toContainText(gameHelpPage.title);
    await expect(gameHelpPage.gameName, 'Page has correct game name').toContainText(targetGameName);

    await expect(gameHelpPage.gameHelpSelectedOption, 'Verify that the correct game is selected in the combo box on the help page')
        .toHaveText(targetGameName);

    await expect(gameHelpPage.contentGameButton, 'Verify that the button on the help page links to the correct game')
        .toHaveText(`${targetGameName} spielen`);
    await expect(gameHelpPage.contentGameButton, 'Verify that the button on the help page has the correct href')
        .toHaveAttribute('href', gamePage.url + gameNameUrlPart);
});
