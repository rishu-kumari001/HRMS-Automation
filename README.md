# HRMS Automation Framework
[![Playwright Tests](https://github.com/rishu-kumari001/HRMS-Automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/rishu-kumari001/HRMS-Automation/actions/workflows/playwright.yml)

A complete Human Resource Management System automation framework built using **Playwright, JavaScript, Page Object Model, API Testing, Fixtures, and GitHub Actions CI/CD**.

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- API Testing
- Fixtures
- HTML Reports
- GitHub Actions
- Git & GitHub

## Project Structure

```text
HRMS-Automation/
│
├── app/
│   ├── attendance.html
│   ├── dashboard.html
│   ├── employees.html
│   ├── leave.html
│   ├── login.html
│   └── payroll.html
│
├── fixtures/
│   ├── apiFixture.js
│   ├── employeeFixture.js
│   └── hrmsFixture.js
│
├── pages/
│   ├── AttendancePage.js
│   ├── DashboardPage.js
│   ├── EmployeePage.js
│   ├── LeavePage.js
│   ├── LoginPage.js
│   └── PayrollPage.js
│
├── test-data/
│
├── tests/
│   ├── api/
│   ├── attendance/
│   ├── employees/
│   ├── integration/
│   ├── leave/
│   ├── login/
│   └── payroll/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.js
├── package.json
└── README.md