import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PasswordgeneratorModule } from './app/passwordgenerator/passwordgenerator.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PasswordgeneratorModule)
  .catch(err => console.error(err));
