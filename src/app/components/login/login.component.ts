import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
    });
  }

  onSubmit() {
      this._authService.login(this.loginForm.value);
  }
}
