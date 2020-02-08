import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent} from './search/search.component';
import{ SubscriptionComponent}from './subscription/subscription.component';
import {BookingsComponent} from './bookings/bookings.component';
import {AboutComponent} from './about/about.component';
import {ProfileComponent} from './profile/profile.component';
import { LoginBusComponent } from './login-bus/login-bus.component';
import{AdminloginComponent} from './adminlogin/adminlogin.component';
import{BusHomeComponent} from './bus-home/bus-home.component';
import {TicketComponent} from './ticket/ticket.component'
import { QRcodeComponent } from './qrcode/qrcode.component';
import { BusprofileComponent } from './busprofile/busprofile.component';
import { ShowticketsComponent } from './showtickets/showtickets.component';
import {MapViewComponent} from './map-view/map-view.component';
import {DemoComponent} from './demo/demo.component';

const routes: Routes = [
  {path:'demo1',component:DemoComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'buslogin',component:LoginBusComponent},
  {path:'' , component:LoginComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:'',redirectTo:'search',pathMatch:'full'},
    {path:'search',component:SearchComponent},
    {path:'subscription',component:SubscriptionComponent},
    {path:'bookings',component:BookingsComponent},
    {path:'about',component:AboutComponent},
    {path:'profile',component:ProfileComponent},
    {path:'mapview',component:MapViewComponent},
  ]},
  {path:'bushome',component:BusHomeComponent,children:[
    {path:'ticket',component:TicketComponent},
    {path:'Qrcode',component:QRcodeComponent},
    {path:'busprofile',component:BusprofileComponent},
    {path:'showtickets',component:ShowticketsComponent},
  ]},
  //{path:'/buslogin',component:BusloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }