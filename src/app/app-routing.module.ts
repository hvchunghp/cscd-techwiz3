import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { BookAnApointmentComponent } from './components/book-an-apointment/book-an-apointment.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { SelfHealthTipsComponent } from './components/self-health-tips/self-health-tips.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { QuestionComponent } from './components/question/question.component';
import {NerveComponent} from "./components/nerve/nerve.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    title: 'Appointments',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'question',
    component: QuestionComponent,
    title: 'Question',
  },
  {
    path: 'confirm-book',
    component: BookAnApointmentComponent,
    title: 'Confirm Book',
  },
  {
    path: 'appointment-detail',
    component: AppointmentDetailsComponent,
  },
  {
    path: 'nerve',
    component: NerveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
