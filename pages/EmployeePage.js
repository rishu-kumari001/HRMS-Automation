export class EmployeePage {

    constructor(page) {
        this.page = page;

        this.employeeName = page.locator('#employeeName');
        this.employeeEmail = page.locator('#employeeEmail');
        this.employeeDepartment = page.locator('#employeeDepartment');
        this.employeeRole = page.locator('#employeeRole');

        this.addEmployeeButton =
            page.locator('#addEmployeeButton');

        this.successMessage =
            page.locator('#successMessage');

        this.employeeTableBody =
            page.locator('#employeeTableBody');

        this.editButton =
            page.locator('.editButton');

        this.deleteButton =
            page.locator('.deleteButton');
    }

    async open() {
        await this.page.goto('/employees.html');
    }

    async addEmployee(name, email, department, role) {

        await this.employeeName.fill(name);
        await this.employeeEmail.fill(email);
        await this.employeeDepartment.selectOption(department);
        await this.employeeRole.fill(role);

        await this.addEmployeeButton.click();
    }

    async getEmployeeRow(name) {

        return this.employeeTableBody.locator('tr').filter({
            hasText: name
        });
    }

    async editEmployee(name) {

        const row = await this.getEmployeeRow(name);

        await row.locator('.editButton').click();
    }

    async updateEmployee(name, email, department, role) {

        await this.employeeName.fill(name);
        await this.employeeEmail.fill(email);
        await this.employeeDepartment.selectOption(department);
        await this.employeeRole.fill(role);

        await this.addEmployeeButton.click();
    }

    async deleteEmployee(name) {

        const row = await this.getEmployeeRow(name);

        await row.locator('.deleteButton').click();
    }
}