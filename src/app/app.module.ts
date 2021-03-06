import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCarComponent } from './components/shopping-car/shopping-car.component';
import { UserComponent } from './components/user/user.component';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './components/views/home/home.component';
import {AppRoutingModule, routedComponents} from './app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { ShoppingComponent } from './components/views/shopping/shopping.component';
import {CartService} from './services/cart.service';
import { ProfileComponent } from './components/views/profile/profile.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';


@NgModule({
  declarations: [
    routedComponents,
    AppComponent,
    HeaderComponent,
    ShoppingCarComponent,
    UserComponent,
    HomeComponent,
    FilterComponent,
    ShoppingComponent,
    ProfileComponent,
    AdvertiseComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
