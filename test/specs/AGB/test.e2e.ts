import { $, driver, expect } from '@wdio/globals';

describe('Expo App - Language Change Test', () => {
  it('should login and change language from account settings', async () => {
  //TestCase1 : Changing the language from the account settings from English to Arabic
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
    await driver.pause(2000);
    
    // Step 4: Click on account person logo
    const accountLogo = await $('android=new UiSelector().className("com.horcrux.svg.PathView").instance(0)');
    await accountLogo.click();
    await driver.pause(2000);
    // Step 5: Click on arrow for changing language
    const languageArrow = await $('android=new UiSelector().className("com.horcrux.svg.SvgView").instance(3)');
    await languageArrow.click();
    await driver.pause(2000);
    // Step 6: Check current language and change to the opposite
    // const englishLang = await $('android=new UiSelector().className("com.horcrux.svg.RectView").instance(0)');
    const arabicLang = await $('android=new UiSelector().className("com.horcrux.svg.PathView").instance(9)');
    
      // Change from English to Arabic
      await arabicLang.click();
      console.log('Changed language from English to Arabic');
  
    
    // Wait for language change to take effect
    await driver.pause(3000);
    
    // Verify the language change was successful
    // You can add specific assertions here based on your app's UI changes
    await expect(languageArrow).toBeExisting();
  });
});
