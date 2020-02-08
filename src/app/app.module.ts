import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {LoginService} from './login/login.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginBusComponent } from './login-bus/login-bus.component';
//import {BusService} from './login-bus/login-bus.service';
//import { BusloginComponent } from './buslogin/buslogin.component';
import { BusService } from './login-bus/login-bus.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BusHomeComponent } from './bus-home/bus-home.component';
import { BusNavComponent } from './bus-nav/bus-nav.component';
import { TicketComponent } from './ticket/ticket.component';
import { ShowticketsComponent } from './showtickets/showtickets.component';
import { QRcodeComponent } from './qrcode/qrcode.component';
import { BusprofileComponent } from './busprofile/busprofile.component';
import {SearchService} from './search/search.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {TicketService} from './ticket/ticket.service'
import {SubscriptionService} from './subscription/subscription.service';
import {NgQrScannerModule} from 'angular2-qrscanner';
import {QRcodeService}  from './qrcode/qrcode.service';
import { AgmCoreModule } from '@agm/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { MapViewComponent } from './map-view/map-view.component';
import {Bookings} from './bookings/bookings.service';
import {Showtickets} from './showtickets/showtickets.service';
import {MapService} from './map-view/map-view.service';
import { DemoComponent } from './demo/demo.component';
import {loginService1} from './login/login.serviced';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavComponent,
    SearchComponent,
    SubscriptionComponent,
    AboutComponent,
    ProfileComponent,
    BookingsComponent,
    LoginBusComponent,
    AdminloginComponent,
    BusHomeComponent,
    BusNavComponent,
    TicketComponent,
    ShowticketsComponent,
    QRcodeComponent,
    BusprofileComponent,
    MapViewComponent,
    DemoComponent,
    //BusloginComponent,
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,AppRoutingModule,NgxQRCodeModule,NgQrScannerModule,AgmCoreModule.forRoot({apiKey: 'AIzaSyBe5SgoO6r0N9_bMgsIF1YIxzVeVeQILdE'}),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireDatabaseModule

  ],
  providers: [RegistrationService,LoginService,BusService,SearchService,TicketService,SubscriptionService,QRcodeService,Bookings,Showtickets,MapService,loginService1],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
