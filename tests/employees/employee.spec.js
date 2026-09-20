import { test, expect } from '../../fixtures/employeeFixture.js';
import { employeeData } from '../../test-data/employees.js';

test('HRMS - Add Employee', async ({ employeePage }) => {


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

    const row =
        await employeePage.getEmployeeRow('Rishu');

    await expect(row).toContainText('rishu@gmail.com');
    await expect(row).toContainText('QA Engineer');
});

test('HRMS - Edit Employee', async ({ employeePage }) => {

    await employeePage.open();

    await employeePage.addEmployee(
        'Rishu',
        'rishu@gmail.com',
        'IT',
        'QA Engineer'
    );

    await employeePage.editEmployee('Rishu');

    await expect(
        employeePage.employeeName
    ).toHaveValue('Rishu');
});

test('HRMS - Delete Employee', async ({ employeePage }) => {

    await employeePage.open();

    await employeePage.addEmployee(
        'Rishu',
        'rishu@gmail.com',
        'IT',
        'QA Engineer'
    );

    const row =
        await employeePage.getEmployeeRow('Rishu');

    await expect(row).toBeVisible();

    await employeePage.deleteEmployee('Rishu');

    await expect(row).toHaveCount(0);
});

test('HRMS - Employee Required Field Validation', async ({ employeePage }) => {

    await employeePage.open();

    await employeePage.addEmployee(
        '',
        '',
        '',
        ''
    );

    await expect(
        employeePage.employeeName
    ).toBeVisible();

    const rows =
        employeePage.employeeTableBody.locator('tr');

    await expect(rows).toHaveCount(0);
});

test('HRMS - Duplicate Employee Validation', async ({ employeePage }) => {

    await employeePage.open();

    await employeePage.addEmployee(
        'Rishu',
        'rishu@gmail.com',
        'IT',
        'QA Engineer'
    );

    await employeePage.addEmployee(
        'Rishu',
        'rishu@gmail.com',
        'IT',
        'QA Engineer'
    );

    await expect(
        employeePage.successMessage
    ).toHaveText('Employee already exists');

    const rows =
        employeePage.employeeTableBody.locator('tr');

    await expect(rows).toHaveCount(1);
});

