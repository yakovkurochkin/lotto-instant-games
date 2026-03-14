import { chromium } from '@playwright/test';

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const expires = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;

    await context.addCookies([
        {
            name: 'cookieConsentDisclaimer',
            value: '1',
            domain: '.lotto24.de',
            path: '/',
            expires,
        },
        {
            name: 'cookieConsentGiven',
            value: '%7B%22functional%22%3Atrue%2C%22optimization%22%3Atrue%2C%22remarketing%22%3Atrue%2C%22consentVersion%22%3A16%2C%22updated%22%3Atrue%7D',
            domain: '.lotto24.de',
            path: '/',
            expires,
        },
    ]);

    await context.storageState({ path: 'support/setup/storage-state.json' });
    await browser.close();
}

export default globalSetup;
