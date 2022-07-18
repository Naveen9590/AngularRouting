import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import{RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'
import { AppRoutingModule } from './app.routing-module';
import { AuthGuard } from 'src/auth-guard.service';
import { AuthService } from 'src/Auth.service';
import { CanDeactivateGaurdService } from './servers/edit-server/canDeactivate-gaurd.service';
import { ErrorComponent } from './error/error.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'home',component:HomeComponent},
  {path:'servers',component:ServersComponent,children:[
    {path:':id/edit',component:EditServerComponent},
    {path:':id',component:ServerComponent}
  ]},
  {path:'users/:id',component:UserComponent},
  {path:'**',component:NotFoundComponent}
  
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService,AuthGuard,AuthService,CanDeactivateGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
