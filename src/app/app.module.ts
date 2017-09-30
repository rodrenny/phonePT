import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule }    from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { PhoneContainerComponent } from './components/phone-container/phone-container.component';
import { PhoneCardComponent } from './components/phone-card/phone-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPhoneComponent } from './components/add-phone/add-phone.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { FileSelectDirective } from "ng2-file-upload";

import { SessionService } from './services/session.service';
import { PhoneApiService } from './services/phone-api.service';


export const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'phones', component: PhoneContainerComponent, canActivate: [SessionService] },
      { path: 'phones/:id', component: PhoneDetailComponent, canActivate: [SessionService] },
      { path: 'add', component: AddPhoneComponent },
    ]},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PhoneContainerComponent,
    PhoneCardComponent,
    PhoneDetailComponent,
    FooterComponent,
    LayoutComponent,
    NavbarComponent,
    FileSelectDirective,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService,PhoneApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
