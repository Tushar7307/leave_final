import { SuccessComponent } from './success/success.component';
import { LeaveComponent } from './leave/leave.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AuthComponent},
  {path:'api/leave',component:LeaveComponent},
  {path:'api/success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
