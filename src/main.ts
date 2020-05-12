import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {TypinggameModule} from './app/typinggame/typinggame.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TypinggameModule)
  .catch(err => console.error(err));
