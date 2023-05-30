import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



@Injectable()
export class LoginService {
  token: any;

  constructor(private router: Router) { }
  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response: any) => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token
            this.router.navigate(['/'])
          }
        )
        // handle response
      })
      .catch((error: any) => {
        // handle error
        console.log("error al logearse")
      });
  }


  getIdToken() {
    // console.log(this.token)
    return this.token
  }
  isAuthenticated() {
    // console.log(this.token)
    return this.token != null
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.token = null
    })
  }
}
