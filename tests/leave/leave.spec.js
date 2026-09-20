import { test, expect } from '../../fixtures/hrmsFixture.js';

test('HRMS - Apply Employee Leave', async ({ leavePage }) => {

    await leavePage.open();

    await leavePage.applyLeave(
        'Rishu',
        'Casual Leave',
        '2026-09-20',
        '2026-09-22'
    );

    await expect(
        leavePage.successMessage
    ).toHaveText('Leave applied successfully');

    const row =
        await leavePage.getLeaveRow('Rishu');

    await expect(row).toBeVisible();
});