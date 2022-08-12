import { BMIComponent } from './components/bmi/bmi.component';
import { NerveComponent } from './components/nerve/nerve.component';
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
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { MedicationsComponent } from './components/medications/medications.component';

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
    title: 'Appointment Detail',
  },
  {
    path: 'specialist-detail',
    component: NerveComponent,
    title: 'Specialist Detail',
  },
  {
    path: 'prescription',
    component: PrescriptionComponent,
    title: 'Prescription',
  },
  {
    path: 'personal-health',
    component: BMIComponent,
    title: 'Personal health',
  },
  {
    path: 'medications',
    component: MedicationsComponent,
    title: 'Medications',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
