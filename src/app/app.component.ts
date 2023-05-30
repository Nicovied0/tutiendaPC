import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuTiendaPC';

  
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDo-JU7iEw2rhIcuJWn5wx2x7ahGF7-Ylo",
      authDomain: "app-angular-login.firebaseapp.com",
    });
  }
}
