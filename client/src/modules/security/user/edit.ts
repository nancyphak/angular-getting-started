import { Component } from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: "/src/modules/security/user/edit.html"
})
export class EditUserComponent  { 

    constructor(route: ActivatedRoute){
        console.log(route.params['value'].id);
    }
}