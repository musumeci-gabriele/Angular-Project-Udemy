import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//* richiama il file app.module.ts
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//* questo metodo richiama il file app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
