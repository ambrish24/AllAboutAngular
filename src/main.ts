import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {CardsModule} from './app/cards/cards.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CardsModule)
  .catch(err => console.error(err));
