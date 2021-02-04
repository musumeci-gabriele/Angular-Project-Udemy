import { Component, OnInit } from '@angular/core';

// * @ identifica ad Angular che ci sono dei nuovi componenti
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string='offline';

  getServerStatus() {
    return this.serverStatus;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
