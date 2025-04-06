import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '@app/account/layout.component';
import { LoginComponent } from '@app/account/login.component';
import { RegisterComponent } from '@app/account/register.component';
import { VerifyEmailComponent } from '@app/account/verify-email.component';
import { ForgotPasswordComponent } from '@app/account/forgot-password.component';
import { ResetPasswordComponent } from '@app/account/reset-password.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'verify-email', component: VerifyEmailComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
