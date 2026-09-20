import { test, expect } from '../../fixtures/hrmsFixture.js';

test('HRMS - Mark Employee Attendance', async ({ attendancePage }) => {

    await attendancePage.open();

    await attendancePage.markAttendance(
        'Rishu',
        '2026-09-20',
        'Present'
    );

    await expect(
        attendancePage.successMessage
    ).toHaveText('Attendance marked successfully');

    const row =
        await attendancePage.getAttendanceRow('Rishu');

    await expect(row).toBeVisible();
});