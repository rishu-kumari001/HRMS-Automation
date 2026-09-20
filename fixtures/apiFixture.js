import { test as base } from '@playwright/test';

export const test = base.extend({

    apiContext: async ({ playwright }, use) => {

        const apiContext =
            await playwright.request.newContext({
                baseURL: 'https://jsonplaceholder.typicode.com',
                extraHTTPHeaders: {
                    'Content-Type': 'application/json'
                }
            });

        await use(apiContext);

        await apiContext.dispose();
    }
});

export { expect } from '@playwright/test';