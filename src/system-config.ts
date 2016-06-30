// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'clipboard': 'https://npmcdn.com/clipboard@1.5.10/dist/clipboard.js',
  'angular2-clipboard': 'vendor/angular2-clipboard'
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
  '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' },
  '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
  '@angular2-material/icon': { format: 'cjs', defaultExtension: 'js', main: 'icon.js' },
  '@angular2-material/input': { format: 'cjs', defaultExtension: 'js', main: 'input.js' },
  '@angular2-material/list': { format: 'cjs', defaultExtension: 'js', main: 'list.js' },
  '@angular2-material/progress-circle': { format: 'cjs', defaultExtension: 'js', main: 'progress-circle.js' },
  '@angular2-material/radio': { format: 'cjs', defaultExtension: 'js', main: 'radio.js' },
  '@angular2-material/sidenav': { format: 'cjs', defaultExtension: 'js', main: 'sidenav.js' },
  '@angular2-material/toolbar': { format: 'cjs', defaultExtension: 'js', main: 'toolbar.js' },
  '@angular2-material/progress-bar': { format: 'cjs', defaultExtension: 'js', main: 'progress-bar.js' },
  '@angular2-material/checkbox': { format: 'cjs', defaultExtension: 'js', main: 'checkbox.js' },
  'angular2-clipboard' : { format: 'cjs', defaultExtension: 'js', main: 'index.js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/test'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  let main: string = barrelName === 'rxjs' ? 'Rx' : 'index';
  cliSystemConfigPackages[barrelName] = { main: main };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
