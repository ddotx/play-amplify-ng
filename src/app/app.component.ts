import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {AmplifyService} from "./amplify.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'play-amplify-ng';

  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(
    private ref: ChangeDetectorRef,
    private api: AmplifyService
  ) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }


  getApiAuth() {
    this.api.getWithAuth().subscribe(console.log)
  }
}

