// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCBDUKTZskR2a2srcZe71GMDE4ehaiWyIs",
    authDomain: "brauhaus-beer.firebaseapp.com",
    databaseURL: "https://brauhaus-beer.firebaseio.com",
    projectId: "brauhaus-beer",
    storageBucket: "brauhaus-beer.appspot.com",
    messagingSenderId: "595560400076"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
