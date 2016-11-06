import { Routes } from "@angular/router";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { LogoutComponent } from "./auth/logout.component";

export const AUTH_ROUTES: Routes = [
	{
		path: '', 
		redirectTo: 'signup'
	},
	{
		path: 'signup',
		component: SignupComponent
	},
	{
		path: 'signin',
		component: SigninComponent
	},
	{
		path: 'logout',
		component: LogoutComponent
	}
];
	
	