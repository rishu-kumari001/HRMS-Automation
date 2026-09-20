export class PayrollPage {

    constructor(page) {
        this.page = page;

        this.employeeName =
            page.locator('#payrollEmployee');

        this.payrollMonth =
            page.locator('#payrollMonth');

        this.basicSalary =
            page.locator('#basicSalary');

        this.allowance =
            page.locator('#allowance');

        this.deduction =
            page.locator('#deduction');

        this.generatePayrollButton =
            page.locator('#generatePayrollButton');

        this.successMessage =
            page.locator('#payrollSuccess');

        this.payrollTableBody =
            page.locator('#payrollTableBody');
    }

    async open() {
        await this.page.goto('/payroll.html');
        
    }

    async generatePayroll(
        employee,
        month,
        basicSalary,
        allowance,
        deduction
    ) {
        await this.employeeName.fill(employee);

        await this.payrollMonth.fill(month);

        await this.basicSalary.fill(
            basicSalary.toString()
        );

        await this.allowance.fill(
            allowance.toString()
        );

        await this.deduction.fill(
            deduction.toString()
        );

        await this.generatePayrollButton.click();
    }

    async getPayrollRow(employee) {
        return this.payrollTableBody.locator('tr').filter({
            hasText: employee
        });
    }
}