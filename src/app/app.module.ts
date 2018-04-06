import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { OneCarComponent } from './one-car/one-car.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarsService } from './services/cars.service';
import { AppErrorHandler } from './common/app-errors-handler';
import { FooterComponent } from './footer/footer.component';
import { CarCarouselComponent } from './car-carousel/car-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCarsComponent,
    OneCarComponent,
    NotFoundComponent,
    NavbarComponent,
    ContactComponent,
    CarouselComponent,
    FooterComponent,
    CarCarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cars', component: AllCarsComponent },
      { path: 'cars/:id', component: OneCarComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [
    CarsService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// ngbDropdownToggle