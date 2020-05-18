import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {PagesdirectivesModule} from './app/pagesdirectives/pagesdirectives.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PagesdirectivesModule)
  .catch(err => console.error(err));
