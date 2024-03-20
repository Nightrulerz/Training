const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('https://getcovered.bewellnm.com/individual/prescreenNav/beginNewApp#');
  await page.getByLabel('Your ZIP Code  * Required Use five digit ZIP Code format').click();
  await page.getByLabel('Your ZIP Code  * Required Use five digit ZIP Code format').type('87124', delay=10000);
  await page.getByLabel('County * Required').click();
  await page.getByLabel('County * Required').click();
  await page.getByLabel('County * Required').click();
  await page.getByRole('combobox', { name: 'County * Required' }).selectOption('SANDOVAL');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('How many people are in your household? * Required  \n\t\t\t\t\tInclude your spouse (if you have one) plus all dependents on your federal tax return (even if they don\'t need coverage).').click({ timeout: 10000 });
  await page.getByLabel('How many people are in your household? * Required  \n\t\t\t\t\tInclude your spouse (if you have one) plus all dependents on your federal tax return (even if they don\'t need coverage).').fill('1');
  await page.getByLabel('First Name  * Required').click();
  await page.getByLabel('First Name  * Required').fill('John');
  await page.getByLabel('Date of Birth (MM/DD/YYYY)  * Required').click();
  await page.getByLabel('Date of Birth (MM/DD/YYYY)  * Required').type("06/06/2000", delay=10000)
  await page.getByText('Male').first().click();
  await page.locator('#application').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Dollar Annual Household Income * Required Per Year').click();
  await page.getByLabel('Dollar Annual Household Income * Required Per Year').type('500000', delay=5000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Preview Plans and Costs' }).click({ timeout: 10000 });
  await page.getByLabel('Dental').uncheck();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Skip to preview plans' }).click({ timeout: 10000 });
})();