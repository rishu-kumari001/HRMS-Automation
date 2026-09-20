import { test, expect } from '../../fixtures/hrmsFixture.js';

test('HRMS - Generate Employee Payroll', async ({ payrollPage }) => {

    await payrollPage.open();

    await payrollPage.generatePayroll(
        'Rishu',
        '2026-09',
        30000,
        5000,
        2000
    );

    await expect(
        payrollPage.successMessage
    ).toHaveText('Payroll generated successfully');

    const row =
        await payrollPage.getPayrollRow('Rishu');

    await expect(row).toBeVisible();

    await expect(row).toContainText('33000');
});