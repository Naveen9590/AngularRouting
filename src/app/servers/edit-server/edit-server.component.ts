import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { canComponentDeactivate } from './canDeactivate-gaurd.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=true;
  changesSaved=false;

  constructor(private serversService: ServersService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // console.log(this.activatedRoute)
    this.activatedRoute.queryParams.subscribe(qp=>{
      console.log(qp)
      this.allowEdit=qp.allowEdit=='1'?true:false
    })
    this.activatedRoute.params.subscribe((param)=>{
      console.log(param)
      this.server = this.serversService.getServer(parseInt(param.id));
      console.log(this.server)
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    })
    
  }

  canDeactivate=():Observable<boolean>|Promise<boolean>|boolean=>{
    if((this.serverName!==this.server.name||this.serverStatus!==this.server.status)&&this.changesSaved===false){
      return confirm("Do you want to quit?")
      // return false;
    }
    else{
      return true;
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo:this.activatedRoute})
  }

}
