import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  inscription = new FormGroup({
    prenom: new FormControl(''),
    login: new FormControl(''),
    pass: new FormControl(''),
  })

  connexion = new FormGroup({
    login: new FormControl(''),
    pass: new FormControl(''),
  })

  ngOnInit(): void {
  }

  onFormSubmitAuth() {
    this.authService.login(this.connexion.value as { login: string, pass: string }, () => {
      console.log('connected')
    })
  }

  onFormSubmitIns() {

  }
}
