import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { AuthGuard } from 'src/auth-guard.service'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { CanDeactivateGaurdService } from './servers/edit-server/canDeactivate-gaurd.service'
import { EditServerComponent } from './servers/edit-server/edit-server.component'
import { ServerComponent } from './servers/server/server.component'
import { ServersComponent } from './servers/servers.component'
import { UserComponent } from './users/user/user.component'
import { UsersComponent } from './users/users.component'

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent},
    {path:'home',component:HomeComponent},
    {path:'servers', canActivateChild:[AuthGuard],component:ServersComponent,children:[
      {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGaurdService]},
      {path:':id',component:ServerComponent}
    ]},
    {path:'users/:id',component:UserComponent},
    {path:'**',component:NotFoundComponent}
    
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}