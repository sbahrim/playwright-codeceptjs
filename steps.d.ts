/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPagePage = typeof import('./pages/LoginPage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, LoginPage: LoginPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
