// import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',

  //* possiamo cambiare il metodoto che punta all'attributo
  // selector: '[app-servers]',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer','TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}
  
  //* metodi per i nostri componenti
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    // abbiamo un obiettivo e sul bersaglio abbiamo un valore. Bisogna specificare a TS che il nostro elemento sara' un HTML
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
