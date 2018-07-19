// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA8zUViOVS6L2-YA65p6CTY9CdfvG1nUVQ',
    authDomain: 'deepcuts-477ba.firebaseapp.com',
    databaseURL: 'https://deepcuts-477ba.firebaseio.com',
    projectId: 'deepcuts-477ba',
    storageBucket: 'deepcuts-477ba.appspot.com',
    messagingSenderId: '254648362199'
  },
  lastfm: {
    apiKey: 'cb4fe7dd2d9e803f022eae657736864c',
    shared: '4f9ac50253414dee2d5dd7fd8bff379b',
    acct: 'Moya34',
    appName: 'DeepCuts'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
