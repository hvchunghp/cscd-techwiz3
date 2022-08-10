import { AppointmentsComponent } from './components/appointments/appointments.component';
import { SelfHealthTipsComponent } from './components/self-health-tips/self-health-tips.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent,title: 'Home'
  },
  {
    path: 'login', component: LoginComponent,title: 'Login'
  },
  {
    path: 'appointments', component: AppointmentsComponent,title: 'Appointments'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
