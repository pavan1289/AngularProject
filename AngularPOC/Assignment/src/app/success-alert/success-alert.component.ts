import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-success-alert]',
  templateUrl:'./success-alert.component.html',
  styles: [`
  .Online{
    background-color: blue;
  }
  .white-color{
    color:yellow;
  }

  
  `]
})
export class SuccessAlertComponent implements OnInit {
  serverID: number=10;
  serverStatus:string='offline';
  serverButton=false;
  serverName='testServer';
  serverCreationStatus= 'No server was created !';
  serverCreated=false;
  isToggle=false;
  isToggleMethod=false;
  log=[];

  servers=['Test Server 1','TestServer 2'];

  constructor() {
    setTimeout(()=>{
      this.serverButton=true;
    },1000)

    this.serverStatus=Math.random() > 0.5 ? 'Online' : 'offline';

   }

  ngOnInit() {
  }
 onCreateServer(){
   this.serverCreationStatus='Server was created : ' +this.serverName;
   this.serverCreated=true;
   this.servers.push(this.serverName);
 }
 onCreateServerUpdate(event:Event){
   this.serverName=(<HTMLInputElement>event.target).value;

}

getColor(){
 return this.serverStatus ==='Online' ? 'green' :'red';
}

OnToggle(){
  this.isToggleMethod= !this.isToggleMethod;
  this.log.push(new Date());
}

}