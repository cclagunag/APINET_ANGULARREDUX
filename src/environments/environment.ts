// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config: {
      apiKey: "AIzaSyDgXFmoz6MqLnv66JUFc92l0Ihb4kBxkIM",
      authDomain: "edificacion-app-7d0ea.firebaseapp.com",
      projectId: "edificacion-app-7d0ea",
      storageBucket: "edificacion-app-7d0ea.appspot.com",
      messagingSenderId: "1088494899828",
      appId: "1:1088494899828:web:20d72b1bdbd17dd2dcf721"
    },
  },
  url: 'http://localhost:5000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
