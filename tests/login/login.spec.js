import { test, expect } from '../../fixtures/hrmsFixture.js';

test('HRMS - Login With Valid Credentials', async ({ loginPage }) => {

    await loginPage.open();

    await loginPage.login('admin', 'Admin@123');

    await expect(loginPage.page).toHaveURL(
        'http://localhost:3000/dashboard.html'
    );
});

test('HRMS - Login With Invalid Credentials', async ({ loginPage }) => {

    await loginPage.open();

    await loginPage.login('wronguser', 'wrongpassword');

    await expect(loginPage.errorMessage).toBeVisible();
});

test('HRMS - Login With Empty Username', async ({ loginPage }) => {

    await loginPage.open();

    await loginPage.enterPassword('Admin@123');

    await loginPage.clickLogin();

    await expect(loginPage.usernameInput).toHaveValue('');
});

test('HRMS - Login With Empty Password', async ({ loginPage }) => {

    await loginPage.open();

    await loginPage.enterUsername('admin');

    await loginPage.clickLogin();

    await expect(loginPage.passwordInput).toHaveValue('');
});