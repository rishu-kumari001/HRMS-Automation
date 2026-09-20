import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { EmployeePage } from '../pages/EmployeePage.js';
import { AttendancePage } from '../pages/AttendancePage.js';
import { LeavePage } from '../pages/LeavePage.js';
import { PayrollPage } from '../pages/PayrollPage.js';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    employeePage: async ({ page }, use) => {
        await use(new EmployeePage(page));
    },

    attendancePage: async ({ page }, use) => {
        await use(new AttendancePage(page));
    },

    leavePage: async ({ page }, use) => {
        await use(new LeavePage(page));
    },

    payrollPage: async ({ page }, use) => {
        await use(new PayrollPage(page));
    }
});

export { expect } from '@playwright/test';