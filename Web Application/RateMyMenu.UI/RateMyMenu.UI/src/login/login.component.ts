import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
    selector: 'oauth-login',
    templateUrl: './login.component.html'
    //styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private _httpService: Http) { }
    ngOnInit() {
        console.log("Login");
    }
}
