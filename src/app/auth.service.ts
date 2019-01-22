import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        alert('You have successfully sign up');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        alert('The email address is badly formatted');
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        alert('You have successfully logged in');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        alert('Wrong username or password');
        // wrongUserOrPass = 'Wrong username or password';
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
