export class AttendancePage {

    constructor(page) {
        this.page = page;

        // Employee name input
        this.employeeName =
            page.locator('#attendanceEmployee');

        // Attendance date input
        this.attendanceDate =
            page.locator('#attendanceDate');

        // Attendance status dropdown
        this.attendanceStatus =
            page.locator('#attendanceStatus');

        // Mark attendance button
        this.markAttendanceButton =
            page.locator('#markAttendanceButton');

        // Success message
        this.successMessage =
            page.locator('#attendanceSuccess');

        // Attendance table
        this.attendanceTableBody =
            page.locator('#attendanceTableBody');
    }

    // Open Attendance page
    async open() {
        await this.page.goto('/attendance.html');
    }

    // Mark employee attendance
    async markAttendance(
        employee,
        date,
        status
    ) {
        await this.employeeName.fill(employee);

        await this.attendanceDate.fill(date);

        await this.attendanceStatus.selectOption(status);

        await this.markAttendanceButton.click();
    }

    // Get attendance row for an employee
    async getAttendanceRow(employee) {
        return this.attendanceTableBody.locator('tr').filter({
            hasText: employee
        });
    }
}