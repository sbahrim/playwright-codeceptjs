const { I } = inject();

export = {

  // Set locators
  loginForm: '#login_form',
  usernameField: '#user_login',
  passwordField: '#user_password',
  submitButton: '.btn-primary',

  // Create page methods
  submitLogin(username,password) {
    I.fillField(this.usernameField,username)
    I.fillField(this.passwordField,password)
    I.click(this.submitButton)
  },

  assertLoginFailed() {
    I.seeElement('.alert-error')
  },

}
