import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@ViewChild('nav') elnav: any;
  constructor() { }

  ngOnInit(): void {
  }
  showlogin(){
    this.elnav.select('logintab')
  }
  showRegistration(){
    this.elnav.select('Registrationid')
  }

}
