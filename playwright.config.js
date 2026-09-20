// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: 'html',

    use: {
    baseURL: 'http://127.0.0.1:3000',

    trace: 'retain-on-failure',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure'
},

    

    webServer: {
        command: 'npx http-server app -p 3000',
        url: 'http://127.0.0.1:3000/login.html',
        reuseExistingServer: !process.env.CI,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});