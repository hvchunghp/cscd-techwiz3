import { BookAnApointmentComponent } from './components/book-an-apointment/book-an-apointment.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { SelfHealthTipsComponent } from './components/self-health-tips/self-health-tips.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { QuestionComponent } from './components/question/question.component';

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
  // {
  //   path: 'test',
  //   component: TestComponent,
  //   title: 'Appointments',
  // },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
<<<<<<< HEAD
  path: 'question',
  component: QuestionComponent,
  title: 'Question',
  }
=======
    path: 'confirm-book',
    component: BookAnApointmentComponent,
    title: 'Confirm Book',
  },
>>>>>>> f0080630de5db747df032090ffeb1736a8c5eb97
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
