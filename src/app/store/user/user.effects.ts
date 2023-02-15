import { Injectable } from '@angular/core';
import * as fromActions from './user.actions';
import { HttpClient } from '@angular/common/http';
import { Actions } from '@ngrx/effects';
import { NotificationService } from '@app/services';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { createEffect, ofType } from '@ngrx/effects';
import { UserResponse } from './user.models';
import { environment } from 'environments/environment.dev';


type Action = fromActions.All;

@Injectable()
export class UserEffects {

  constructor(
    private httpClient: HttpClient,
    private actions: Actions,
    private notifacations: NotificationService,
    private router: Router
  ) { }

  //registro
  signUpEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_UP_EMAIL),
      map((action: fromActions.SignUpEmail) => action.user),
      switchMap(userData =>
        this.httpClient.post<UserResponse>(`${environment.url}api/usuario/registrar`, userData)
          .pipe(
            tap((response: UserResponse) => {
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map((response: UserResponse) => new fromActions.SignUpEmailSuccess(response.email, response || null)),
            catchError(err => {
              this.notifacations.error("Error al registrar un nuevo usuario");
              return of(new fromActions.SignUpEmailError(err));
            })
          )
      )
    )
  );

  //login
  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGIN_IN_EMAIL),
      map((action: fromActions.SignInEmail) => action.credentials),
      switchMap(userCredentials =>
        this.httpClient.post<UserResponse>(`${environment.url}api/usuario/login`, userCredentials)
          .pipe(
            tap((response: UserResponse) => {
              console.log(response.token);
              localStorage.setItem('token', response.token);
              this.router.navigate(['/']);
            }),
            map((response: UserResponse) => new fromActions.SignInEmailSuccess(response.email, response || null)),
            catchError(err => {
              this.notifacations.error("Error al ingresar a la apicación");
              return of(new fromActions.SignInEmailError(err));
            })
          )
      )
    )
  );

  // verificar sesión
  init: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.INIT),
      switchMap(async () => localStorage.getItem('token')),
      switchMap(token => {
        if (token) {
          return this.httpClient.get<UserResponse>(`${environment.url}api/usuario`)
            .pipe(
              tap((response: UserResponse) => {
                console.log("data del usuario que viene del servidor", response);
              }),
              map((response: UserResponse) => new fromActions.InitAuthorized(response.email, response || null)),
              catchError(err => {
                return of(new fromActions.InitError(err.message));
              })
            )
        } else {
          return of(new fromActions.InitUnAuthorized());
        }

      }
      )
    )
  );




}
