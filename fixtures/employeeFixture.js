import { test as base } from '@playwright/test';
import { EmployeePage } from '../pages/EmployeePage.js';

export const test = base.extend({

    employeePage: async ({ page }, use) => {

        const employeePage =
            new EmployeePage(page);

        await use(employeePage);
    }
});

export { expect } from '@playwright/test';