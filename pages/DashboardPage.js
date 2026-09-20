export class DashboardPage {

    constructor(page) {
        this.page = page;

        this.dashboardHeading = page.getByRole('heading', {
            name: 'HRMS Dashboard'
        });

        this.welcomeMessage = page.getByText(
            'Welcome to the Human Resource Management System.'
        );

        this.employeesMenu = page.getByText('Employees');
        this.attendanceMenu = page.getByText('Attendance');
        this.leaveMenu = page.getByText('Leave Management');
        this.payrollMenu = page.getByText('Payroll');
    }

    async verifyDashboard() {
        await this.dashboardHeading.waitFor();
    }

    async isDashboardVisible() {
        return await this.dashboardHeading.isVisible();
    }
}