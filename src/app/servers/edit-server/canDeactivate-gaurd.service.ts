import { Observable } from "rxjs";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router'


export interface canComponentDeactivate {
    canDeactivate:()=>Observable<boolean>|Promise<boolean>|boolean
}

export class CanDeactivateGaurdService implements CanDeactivate<canComponentDeactivate>{
    canDeactivate=(component:canComponentDeactivate,
        currentRoute:ActivatedRouteSnapshot,
        currentState:RouterStateSnapshot,
        nextState?:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean=>{
            return component.canDeactivate()
    }
}