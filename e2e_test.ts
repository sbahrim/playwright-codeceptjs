Feature('Webappsecurity website login');

Before(({ I }) => {
    console.log('BEFORE HOOK')
    I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
    console.log('AFTER HOOK')
})

Scenario('Login Test - Negative',  ({ I, LoginPage }) => {
    
    I.click('#signin_button')
    I.seeElement('#login_form')

    LoginPage.submitLogin('invlid username','invalid password')
    LoginPage.assertLoginFailed()
    
});
