export class LeavePage {

    constructor(page) {
        this.page = page;

        this.employeeName =
            page.locator('#leaveEmployee');

        this.leaveType =
            page.locator('#leaveType');

        this.fromDate =
            page.locator('#fromDate');

        this.toDate =
            page.locator('#toDate');

        this.applyLeaveButton =
            page.locator('#applyLeaveButton');

        this.successMessage =
            page.locator('#leaveSuccess');

        this.leaveTableBody =
            page.locator('#leaveTableBody');
    }

    async open() {
        await this.page.goto('/leave.html');
    }

    async applyLeave(
        employee,
        leaveType,
        fromDate,
        toDate
    ) {
        await this.employeeName.fill(employee);

        await this.leaveType.selectOption(leaveType);

        await this.fromDate.fill(fromDate);

        await this.toDate.fill(toDate);

        await this.applyLeaveButton.click();
    }

    async getLeaveRow(employee) {
        return this.leaveTableBody.locator('tr').filter({
            hasText: employee
        });
    }
}