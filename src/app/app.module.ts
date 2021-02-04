import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//* FormsModule e' richiesto per il binding a due vie
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
//* importare i pacchetti aggiuntivi di ng
// TEST import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    // * ricordarsi di importare il pacchetto aggiuntivo
    // TEST FormsModule
  ],
  providers: [],
  // * viene richiamato l'intero pacchetto files app.component per bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
