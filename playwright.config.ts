import {defineConfig, devices} from '@playwright/test';


export default defineConfig({
    testDir: './tests',
    globalSetup: './support/setup/global.setup.ts',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'https://games.lotto24.de',
        storageState: 'support/setup/storage-state.json',
        trace: 'retain-on-failure',
    },

    projects: [
        {
          name: 'Mobile Chrome',
          use: { ...devices['Pixel 7'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 15 Pro Max'] },
        },
    ],
});
