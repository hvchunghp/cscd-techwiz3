import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { PersonalHealthComponent } from './components/personal-health/personal-health.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { SelfHealthTipsComponent } from './components/self-health-tips/self-health-tips.component';
import { HealthMeasuresComponent } from './components/health-measures/health-measures.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionComponent } from './components/question/question.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookAnApointmentComponent } from './components/book-an-apointment/book-an-apointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BMIComponent } from './components/bmi/bmi.component';
import { PopUpChatComponent } from './components/pop-up-chat/pop-up-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AppointmentsComponent,
    PrescriptionComponent,
    PersonalHealthComponent,
    AppointmentDetailsComponent,
    SelfHealthTipsComponent,
    HealthMeasuresComponent,
    FeedbackComponent,
    ContactComponent,
    FooterComponent,
    QuestionComponent,
    BookAnApointmentComponent,
    BMIComponent,
    PopUpChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
