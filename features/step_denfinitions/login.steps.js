const { Given, When, Then } = require('cucumber');
const { Headers } = require('../../pages/Header.main');
const loginPage = require('../../pages/LoginPage');

Given("the user navigate to t:connect", async () => {
    await testController.navigateTo('https://tconnecttestgreen.apos.tandemdiabetes.com');
})

Given("the user navigate to google", async () => {
    await testController.navigateTo('https://www.google.com/');
})


When('user is signed with personal user credential', async function () {
    await testController.typeText(loginPage.LoginPage.emailAddress(), "poc_user_automation@tandem-diabetes.com")
                .typeText(loginPage.LoginPage.password(), "tconnect")
                .click(loginPage.LoginPage.signInButton())
});

Then(/^user is signed in$/, async function() {
    testController.expect(Headers.signOutLink().exists).ok;
})
