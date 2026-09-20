import { test, expect } from '../../fixtures/apiFixture.js';
import { EmployeePage } from '../../pages/EmployeePage.js';
import { apiEmployeeData } from '../../test-data/apiEmployees.js';

test('HRMS - API and UI Employee Integration', async ({
    apiContext,
    page
}) => {

    // Create employee through API
    const response =
        await apiContext.post('/users', {
            data: apiEmployeeData.createEmployee
        });

    expect(response.status()).toBe(201);

    const employee =
        await response.json();

    expect(employee.name).toBe(
        apiEmployeeData.createEmployee.name
    );

    // Open HRMS Employee page
    const employeePage =
        new EmployeePage(page);

    await employeePage.open();

    // Create corresponding employee in UI
    await employeePage.addEmployee(
        apiEmployeeData.createEmployee.name,
        apiEmployeeData.createEmployee.email,
        apiEmployeeData.createEmployee.department,
        apiEmployeeData.createEmployee.role
    );

    // Verify employee in UI
    const row =
        await employeePage.getEmployeeRow(
            apiEmployeeData.createEmployee.name
        );

    await expect(row).toBeVisible();

    await expect(row).toContainText(
        apiEmployeeData.createEmployee.email
    );

    await expect(row).toContainText(
        apiEmployeeData.createEmployee.role
    );
});