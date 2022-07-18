import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from 'src/Auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  handleLoadServer=(id:number)=>{
    this.router.navigate(['servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'})
  }

  handleLogin=()=>{
    this.authService.login()
  }

  handleLogOut=()=>{
    this.authService.logout()
  }

}
