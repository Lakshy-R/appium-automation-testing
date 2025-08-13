require('dotenv').config();
if (!process.env.USERNAME || !process.env.PASSWORD) {
  throw new Error("USERNAME or PASSWORD is not defined in .env");
}
const UsernameENV: string = process.env.USERNAME;
const PasswordENV: string = process.env.PASSWORD;

describe('Tap test', () => {

  it('UserName Wrong', async () => {

    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const NextButton = await $('//android.view.ViewGroup[@content-desc="Log in"]');
    expect(NextButton).not.toBeClickable();
    const Username = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    await Username.setValue('iqwduwqhdwi');
    const Password = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    await Password.setValue(PasswordENV);
    await browser.pause(3000);
    expect(NextButton).toBeClickable();
    await NextButton.click();
    await browser.pause(15000);
    const ErrorMessage = await $('//android.widget.TextView[@text="An error has occurred"]')
    expect(ErrorMessage).toBeDisplayed();

  });

  it('Valid Credentials', async () => {

    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const NextButton = await $('//android.view.ViewGroup[@content-desc="Log in"]');
    expect(NextButton).not.toBeClickable();
    const Username = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    await Username.setValue(UsernameENV);
    const Password = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    await Password.setValue(PasswordENV);
    await browser.pause(3000);
    expect(NextButton).toBeClickable();
    await NextButton.click();
    await browser.pause(15000);
    await expect($('//android.view.View[@text="Hello"]')).toBeDisplayed();
  });

  it('Check Mandatory Fields', async () => {
    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const NextButton = await $('//android.view.ViewGroup[@content-desc="Log in"]');
    expect(NextButton).not.toBeClickable();
    const Username = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    await Username.setValue(UsernameENV);
    const Password = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    await Password.setValue(PasswordENV);
    await Username.setValue('');
    await Password.setValue('');
    expect(await $('(//android.widget.TextView[@text="This field is mandatory. Please fill it."])[1]')).toBeDisplayed();
    expect(await $('(//android.widget.TextView[@text="This field is mandatory. Please fill it."])[2]')).toBeDisplayed();
  });

  it('Password Match Check', async () => {
    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const ForgetPassword = await $('//android.widget.TextView[@text="Forgot password?"]');
    await ForgetPassword.click();
    const UserName = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    await UserName.setValue('askldm');
    const NewPassword = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    await NewPassword.setValue('Newpassword123@');
    const ConfirmPassword = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText');
    await ConfirmPassword.setValue('newpassword1234@');
    expect(await $('//android.widget.TextView[@text="Password must match"]')).toBeDisplayed();
  });

  it('Requirements Match Check', async () => {
    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const ForgetPassword = await $('//android.widget.TextView[@text="Forgot password?"]');
    await ForgetPassword.click();
    const UserName = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    await UserName.setValue('askldm');
    const NewPassword = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    await NewPassword.setValue('s');
    expect(await $('//android.widget.TextView[@text="Contains 1 uppercase."]')).toBeDisplayed();
    await NewPassword.setValue('S');
    expect(await $('//android.widget.TextView[@text="Contains 1 lowercase."]')).toBeDisplayed();
    await NewPassword.setValue('sS');
    expect(await $('//android.widget.TextView[@text="Contains 1 number."]')).toBeDisplayed();
    await NewPassword.setValue('sS1');
    expect(await $('//android.widget.TextView[@text="Contains 1 special character."]')).toBeDisplayed();
    await NewPassword.setValue('sS1@');
    expect(await $('//android.widget.TextView[@text="Contains 8 characters."]')).toBeDisplayed();
    await NewPassword.setValue('sS1@kkkkkkkxxxxxxxxxxmmmmxxxxxxxxxxxxxxxxx');
    expect(await $('//android.widget.TextView[@text="Must be maximum 20 characters."]')).toBeDisplayed();

  });

  it('Button Clickable in forget password with empty fields', async () => {
    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const ForgetPassword = await $('//android.widget.TextView[@text="Forgot password?"]');
    await ForgetPassword.click();
    const UserName = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    const NewPassword = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    const ConfirmPassword = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText');
    const continueButton = await $('//android.view.ViewGroup[@content-desc="Continue"]');
    await UserName.setValue('askldm');
    await NewPassword.setValue('Ssss2@ssasdsa');
    expect(continueButton).not.toBeClickable();
    await NewPassword.setValue('');
    await ConfirmPassword.setValue('Ssss2@ssasdsa');
    expect(continueButton).not.toBeClickable();
    await NewPassword.setValue('Ssss2@ssasdsa');
    await UserName.setValue('');
    expect(continueButton).not.toBeClickable();
    await UserName.setValue('askldm');
    expect(continueButton).toBeClickable();
   });

  it('OPT buttons check', async () => {
    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const ForgetPassword = await $('//android.widget.TextView[@text="Forgot password?"]');
    await ForgetPassword.click();
    const UserName = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    const NewPassword = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    const ConfirmPassword = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText');
    const continueButton = await $('//android.view.ViewGroup[@content-desc="Continue"]');
    await UserName.setValue('askldm');
    await NewPassword.setValue('Ssss2@ssasdsa');
    await ConfirmPassword.setValue('Ssss2@ssasdsa');
    continueButton.click();
    await browser.pause(8000);
    const OPT = await $('//android.widget.EditText');
    const verifyOPT = await $('//android.view.ViewGroup[@content-desc="Verify"]');
    OPT.setValue('12');
    expect(verifyOPT).not.toBeClickable();
    OPT.setValue('1234');
    expect(verifyOPT).toBeClickable();
    verifyOPT.click();
    await browser.pause(3000);
    expect(await $('//android.widget.TextView[@text="Invalid OTP"]')).toBeDisplayed();
   });

});

describe('Test Suite', () => {
  beforeEach(async () => {
    const element = await $('//android.widget.LinearLayout[@enabled="true"]');
    await element.click();
    await browser.pause(3000);
    const next = await $('//android.view.ViewGroup[@content-desc="Next"]');
    await next.click();
    await next.click();
    await next.click();
    const GetStarted = await $('//android.view.ViewGroup[@content-desc="Get started"]');
    await GetStarted.click();
    await browser.pause(3000);
    const NextButton = await $('//android.view.ViewGroup[@content-desc="Log in"]');
    expect(NextButton).not.toBeClickable();
    const Username = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    await Username.setValue(UsernameENV);
    const Password = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    await Password.setValue(PasswordENV);
    await browser.pause(3000);
    expect(NextButton).toBeClickable();
    await NextButton.click();
    await browser.pause(15000);
  });
    it('Top Up', async () => {
        const TopUpButton = await $('//android.view.ViewGroup[@content-desc="Top up"]/android.view.ViewGroup');
        TopUpButton.click();
        const amount = await $('//android.widget.EditText[@resource-id="amountInput"]')
        await amount.setValue('1');
        const select = await $('//android.view.ViewGroup[@content-desc="Select"]');
        await select.click();
        const FbankAcc = await $('//android.view.ViewGroup[@content-desc="Fidelity Bank Account"]');
        await FbankAcc.click();
        const Account = await $('//android.view.ViewGroup[@content-desc="Select"]');
        await Account.click();
        const Account2511 = await $('//android.view.ViewGroup[@content-desc="Ending in 2511"]');
        await Account2511.click();
        const Continue = await $('//android.view.ViewGroup[@content-desc="Continue"]');
        expect(Continue).toBeClickable();
    });

    it('Send', async () => {
        const Send  = await $('//android.view.ViewGroup[@content-desc="Send"]/android.view.ViewGroup');
        await Send.click();
        const amount = await $('//android.widget.EditText[@resource-id="amountInput"]');
        await amount.setValue('1');
        const to = await $('//android.widget.EditText[@resource-id="sendMoneyToInput"]');
        await to.setValue('1234567891234567');
        const send = await $('//android.view.ViewGroup[@content-desc="Send"]');
        expect(send).toBeClickable();
    });
});