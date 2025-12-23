import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FuseNavigationItem, FuseNavigationService} from "../../../@fuse/components/navigation";
import {defaultNavigation} from "../../core/navigation/navigation-data";
import {FuseAlertType} from "../../../@fuse/components/alert";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  alert: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: ''
  };

  signInForm: UntypedFormGroup;
  showAlert: boolean = false;
  navigation: FuseNavigationItem[] = defaultNavigation;

  private users: { [username: string]: string } = {
    'bhuvaneshkumarg': 'Reset123',
    'ashoka1': 'Reset123',
    'murugabalanm': 'Reset123',
    'nishanths': 'Reset123',
    'aravindsamyp': 'Reset123',
    'ramshankarb': 'Reset123'
  };


  constructor(private _formBuilder: UntypedFormBuilder,private router:Router,
              private fuseNavigationService: FuseNavigationService) { }

  ngOnInit(): void
  {
    // Create the form
    this.signInForm = this._formBuilder.group({
      username     : ['', [Validators.required]],
      password  : ['', Validators.required],
      rememberMe: ['']
    });
  }


  signIn(): void {
    this.showAlert = false;
    const { username, password } = this.signInForm.value;
    if (this.users[username] && this.users[username] === password) {
      this.router.navigateByUrl('/pdfexceldashboard');
      this.fuseNavigationService.getItem('home',this.navigation).hidden = () => false;
    }else{
      this.alert = {
        type   : 'error',
        message: 'Wrong UserName & Password. Try Again'
      };
      this.showAlert = true;
      console.log("Invalid User");
    }

  }
  setAllItemsVisible(navigation: FuseNavigationItem[]) {
    navigation.forEach(item => {
      item.hidden = () => false;

      if (item.children && item.children.length) {
        this.setAllItemsVisible(item.children);
      }
    });
  }
}
