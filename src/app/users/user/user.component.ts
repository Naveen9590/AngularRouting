import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  id:number

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
    // const id=this.route.snapshot.params.id
    this.route.params.subscribe((param:Params)=>{
      this.id=param.id
      this.user=this.users[this.id-1]
    })
    console.log(this.user)
    
  }

}
