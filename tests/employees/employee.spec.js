import { test, expect } from '../../fixtures/employeeFixture.js';
import { employeeData } from '../../test-data/employees.js';


test('@smoke HRMS - Add Employee', async ({ employeePage }) => {

    await employeePage.open();

    await employeePage.addEmployee(
        employeeData.validEmployee.name,
        employeeData.validEmployee.email,
        employeeData.validEmployee.department,
        employeeData.validEmployee.role
    );

    await expect(
        employeePage.successMessage
    ).toHaveText('Employee added successfully');

    const row = await employeePage.getEmployeeRow(
        employeeData.validEmployee.name
    );

    await expect(row).toContainText(
        employeeData.validEmployee.email
    );

    await expect(row).toContainText(
        employeeData.validEmployee.role
    );
});


test('@regression HRMS - Edit Employee', async ({ employeePage }) => {

    await employeePage.open();

    await employeePage.addEmployee(
        employeeData.validEmployee.name,
        employeeData.validEmployee.email,
        employeeData.validEmployee.department,
        employeeData.validEmployee.role
    );

    await employeePage.editEmployee(
        employeeData.validEmployee.name
    );

    await expect(
        employeePage.addEmployeeButton
    ).toHaveText('Update Employee');

    await employeePage.updateEmployee(
        employeeData.editEmployee.name,
        employeeData.editEmployee.email,
        employeeData.editEmployee.department,
        employeeData.editEmployee.role
    );

    await expect(
        employeePage.successMessage
    ).toHaveText('Employee updated successfully');

    const row = await employeePage.getEmployeeRow(
        employeeData.editEmployee.name
    );

    await expect(row).toBeVisible();

    await expect(row).toContainText(
        employeeData.editEmployee.email
    );

    await expect(row).toContainText(
        employeeData.editEmployee.role
    );
});


test('@regression HRMS - Delete Employee', async ({ employeePage }) => {

    await employeePage.open();

    await employeePage.addEmployee(
        employeeData.validEmployee.name,
        employeeData.validEmployee.email,
        employeeData.validEmployee.department,
        employeeData.validEmployee.role
    );

    const row = await employeePage.getEmployeeRow(
        employeeData.validEmployee.name
    );

    await expect(row).toBeVisible();

    await employeePage.deleteEmployee(
        employeeData.validEmployee.name
    );

    await expect(row).toHaveCount(0);
});


test(
    '@regression HRMS - Employee Required Field Validation',
    async ({ employeePage }) => {

        await employeePage.open();

        await employeePage.addEmployee(
            employeeData.invalidEmployee.name,
            employeeData.invalidEmployee.email,
            employeeData.invalidEmployee.department,
            employeeData.invalidEmployee.role
        );

        const rows =
            employeePage.employeeTableBody.locator('tr');

        await expect(rows).toHaveCount(0);
    }
);


test(
    '@regression HRMS - Duplicate Employee Validation',
    async ({ employeePage }) => {

        await employeePage.open();

        await employeePage.addEmployee(
            employeeData.validEmployee.name,
            employeeData.validEmployee.email,
            employeeData.validEmployee.department,
            employeeData.validEmployee.role
        );

        await employeePage.addEmployee(
            employeeData.duplicateEmployee.name,
            employeeData.duplicateEmployee.email,
            employeeData.duplicateEmployee.department,
            employeeData.duplicateEmployee.role
        );

        await expect(
            employeePage.successMessage
        ).toHaveText('Employee already exists');

        const rows =
            employeePage.employeeTableBody.locator('tr');

        await expect(rows).toHaveCount(1);
    }
);