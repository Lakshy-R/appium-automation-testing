import { $, driver, expect } from '@wdio/globals';

describe.only('Expo App - View all transactions history', () => {
  it('should view all of the transactions with specific filters', async () => {
    
    //TestCase2 : Checking all of the transactions history and using the filter buttons
    // Step 1: Enter username
    const usernameInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    await usernameInput.setValue('agbtest');
    await driver.pause(2000);
    
    // Step 2: Enter password
    const passwordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    await passwordInput.setValue('Agb@test123');
    await driver.pause(2000);
    
    // Step 3: Click login button
    const loginButton = await $('android=new UiSelector().resourceId("login-button")');
    await loginButton.click();
    
    // Wait for login to complete
    await driver.pause(3000);

    // Step 4: Press "View All" button
    const viewAllButton = await $('android=new UiSelector().text("View All")');
    await viewAllButton.click();
    await driver.pause(2000);

    // Step 5: Press "Date" button
    const dateButton = await $('android=new UiSelector().description("Date")');
    await dateButton.click();
    await driver.pause(2000);

    // Step 6: Press "Start date" button
    const startDateButton = await $('android=new UiSelector().description("Start date, 13 Aug, 2025")');
    await startDateButton.click();
    await driver.pause(2000);

    // Step 7: Choose date 12 for start date
    const date12Button = await $('android=new UiSelector().text("12")');
    await date12Button.click();
    await driver.pause(1000);

    // Step 8: Press OK to confirm start date
    const okButton1 = await $('android=new UiSelector().resourceId("android:id/button1")');
    await okButton1.click();
    await driver.pause(2000);

    // Step 9: Press "End date" button
    const endDateButton = await $('android=new UiSelector().description("End date, 13 Aug, 2025")');
    await endDateButton.click();
    await driver.pause(2000);

    // Step 10: Choose date 13 for end date
    const date13Button = await $('android=new UiSelector().text("13")');
    await date13Button.click();
    await driver.pause(1000);

    // Step 11: Press OK to confirm end date
    const okButton2 = await $('android=new UiSelector().resourceId("android:id/button1")');
    await okButton2.click();
    await driver.pause(2000);

    // Step 12: Press "Apply" button to apply the date filter
    const applyButton = await $('android=new UiSelector().description("Apply")');
    await applyButton.click();
    await driver.pause(2000);

    // Step 13: Press "Type" button
    const typeButton = await $('android=new UiSelector().description("Type")');
    await typeButton.click();
    await driver.pause(2000);

    // Step 14: Choose "Sent amount" button
    const sentAmountButton = await $('android=new UiSelector().className("android.view.ViewGroup").instance(72)');
    await sentAmountButton.click();
    await driver.pause(2000);

     // Step 15: Press "Type" button again (now shows "Sent Amounts")
    const typeButton2 = await $('android=new UiSelector().description("Sent Amounts")');
    await typeButton2.click();
    await driver.pause(2000);
    // Step 16: Choose "Received amount" button
    const receivedAmountButton = await $('android=new UiSelector().className("android.view.ViewGroup").instance(66)');
    await receivedAmountButton.click();
    await driver.pause(2000);

    // Step 17: Finally press on mobile banking account (green arrow)
    const mobileBankingGreenButton = await $('android=new UiSelector().description("Mobile Banking, 6:28 AM, USD +0.4")');
    await mobileBankingGreenButton.click();
    await driver.pause(2000);

    // Add verification step if needed
    console.log('Test scenario completed successfully');
      });
});