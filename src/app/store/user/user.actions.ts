import { Action } from "@ngrx/store";
import { EmailPasswordCredentials, UserCreateRequest, UserResponse } from "./user.models";


export enum Types {

  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',


  SIGIN_IN_EMAIL = '[User] Login: Start',
  SIGIN_IN_EMAIL_SUCCESS = '[User] Login: Sucess',
  SIGIN_IN_EMAIL_ERROR = '[User] Login: Error',


  SIGN_UP_EMAIL = '[User] Registrar usuario con Email: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Registrar usuario con Email: Sucess',
  SIGN_UP_EMAIL_ERROR = '[User] Registrar usuario con Email: Error',

  SIGIN_OUT_EMAIL = '[User] Logout: Start',
  SIGIN_OUT_EMAIL_SUCCESS = '[User] Logout: Sucess',
  SIGIN_OUT_EMAIL_ERROR = '[User] Logout: Error'
}


// INIT -> USUARIO ESTÁ EN SESIÓN

export class Init implements Action {
  readonly type = Types.INIT;
  constructor() { }
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;
  constructor(public email: string, public user: UserResponse | null) { }
}

export class InitUnAuthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor() { }
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;
  constructor(public error: string) { }
}



// Login

export class SignInEmail implements Action {
  readonly type = Types.SIGIN_IN_EMAIL;
  constructor(public credentials: EmailPasswordCredentials) { }
}

export class SignInEmailSuccess implements Action {
  readonly type = Types.SIGIN_IN_EMAIL_SUCCESS;
  constructor(public email: string, public user: UserResponse) { }
}

export class SignInEmailError implements Action {
  readonly type = Types.SIGIN_IN_EMAIL_ERROR;
  constructor(public error: string) { }
}


// SignUp Registro de Usuarios


export class SignUpEmail implements Action {
  readonly type = Types.SIGN_UP_EMAIL;
  constructor(public user: UserCreateRequest) { }
}

export class SignUpEmailSuccess implements Action {
  readonly type = Types.SIGN_UP_EMAIL_SUCCESS;
  constructor(public email: string, public user: UserResponse | null) { }
}

export class SignUpEmailError implements Action {
  readonly type = Types.SIGN_UP_EMAIL_ERROR;
  constructor(public error: string) { }
}


// Logout Salir de Sesión

export class SignOutEmail implements Action {
  readonly type = Types.SIGIN_OUT_EMAIL;
  constructor() { }
}

export class SignOutEmailSuccess implements Action {
  readonly type = Types.SIGIN_OUT_EMAIL_SUCCESS;
  constructor() { }
}

export class SignOutEmailError implements Action {
  readonly type = Types.SIGIN_OUT_EMAIL_ERROR;
  constructor(public error: string) { }
}



export type All =
              Init
            | InitAuthorized
            | InitUnAuthorized
            | InitError
            | SignInEmail
            | SignInEmailSuccess
            | SignInEmailError
            | SignOutEmail
            | SignOutEmailSuccess
            | SignOutEmailError
            | SignUpEmail
            | SignUpEmailSuccess
            | SignUpEmailError
