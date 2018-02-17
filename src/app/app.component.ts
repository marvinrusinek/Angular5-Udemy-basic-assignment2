import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usernameStatus: boolean = true;
  usernameCreated = 'No username created';
  username = '';

  onCreateUsername() {
    this.usernameCreated = 'User was created with ' + this.username;
  }

  checkIfUsernameIsEmpty() {
    if (this.username == null) {
      this.usernameStatus = true;
      return true;
    }
    else {
      this.usernameStatus = false;
      return false;
    }
  }
  
  resetUsername() {
    this.username = '';
  }
}
