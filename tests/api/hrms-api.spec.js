import { test, expect } from '../../fixtures/apiFixture.js';
import { apiEmployeeData } from '../../test-data/apiEmployees.js';
test('HRMS API - Get Employee', async ({ apiContext }) => {

    const response =
        await apiContext.get('/users/1');

    expect(response.status()).toBe(200);

    expect(
        response.headers()['content-type']
    ).toContain('application/json');

    const data =
        await response.json();

    expect(data.id).toBe(1);
    expect(data.name).toBeTruthy();
    expect(data.email).toBeTruthy();
});

test('HRMS API - Create Employee', async ({ apiContext }) => {

    const response =
        await apiContext.post('/users', {
           data: apiEmployeeData.createEmployee
        });

    expect(response.status()).toBe(201);

    const data =
        await response.json();

   expect(data.name).toBe(apiEmployeeData.createEmployee.name);
expect(data.email).toBe(apiEmployeeData.createEmployee.email);
expect(data.department).toBe(apiEmployeeData.createEmployee.department);
expect(data.role).toBe(apiEmployeeData.createEmployee.role); 
});

test('HRMS API - Update Employee', async ({ apiContext }) => {

    const response =
        await apiContext.put('/users/1', {
            data: apiEmployeeData.updateEmployee
        });

    expect(response.status()).toBe(200);

    const data =
        await response.json();

   expect(data.name).toBe(apiEmployeeData.updateEmployee.name);
expect(data.email).toBe(apiEmployeeData.updateEmployee.email);
expect(data.role).toBe(apiEmployeeData.updateEmployee.role);
});

test('HRMS API - Delete Employee', async ({ apiContext }) => {

    const response =
        await apiContext.delete('/users/1');

    expect(response.status()).toBe(200);
});

test('HRMS API - Employee Not Found', async ({ apiContext }) => {

    const response =
        await apiContext.get('/users/9999');

    expect(response.status()).toBe(404);
});