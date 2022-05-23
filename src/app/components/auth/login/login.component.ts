import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommanService } from 'src/app/shared/services/comman.service';
import { Global } from 'src/app/shared/services/global';
import { MustMatchvalidator } from 'src/app/validations/validations.validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted: boolean = false;
  @ViewChild('nav') elnav: any;

  constructor(private _fb: FormBuilder, private _tostar: ToastrService, private _commanservice: CommanService, private _authService: AuthService) { }

  ngOnInit(): void {
    this.setLoginForm(),
      this.setregisterForm()
  }
  // showlogin(){
  //   this.elnav.select('logintab')
  // }
  // showRegistration(){
  //   this.elnav.select('Registrationid')
  // }
  setLoginForm() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  setregisterForm() {
    this.registerForm = this._fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.email])],
      userTypeId: [1],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(50)])],
      confirmpassword: ['', Validators.required],


    }, {
      validators: MustMatchvalidator('password', 'confirmpassword')
    }
    );
  }
  get f() {
    return this.registerForm.controls
  }
  login() {
    if (this.loginForm.get('userName').value == "") {
      this._tostar.error("username is reQuired !!")
    } else if (this.loginForm.get('password').value == "") {
      this._tostar.error("password is reQuired !!")
    } else {
      if (this.loginForm.valid) {
        this._commanservice.post(Global.BASE_API_PATH + 'UserMaster/Login/', this.loginForm.value).subscribe(res => {
          if (res.isSuccess) {
            this._authService.authLogin(res.data)
            let msg : string= "";
            msg = this._authService.getMessage();
            if(msg !== ""){
              this._tostar.error(msg);
              this.loginForm.reset()
            }
          } else {
            this._tostar.error(res[0], "login")
          }
        })
      }
    }

  }
  register(formData: FormGroup) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this._commanservice.post(Global.BASE_API_PATH + 'UserMaster/Save/', formData.value).subscribe(res => {
      if (res.isSuccess) {
        this._tostar.success("Registration has been successfully done !!");
        this.registerForm.reset({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          userTypeId: 1,
          confirmpassword: '',
        });
        this.submitted = false;
        this.elnav.select('logintab')
      } else {
        this._tostar.error(res.error[0], "Registration");

      }
    })
  }

}
