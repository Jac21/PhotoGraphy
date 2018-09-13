import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";

import "hammerjs";
import "macy";

import { AppComponent } from "./components/app/app.component";
import { PhotoComponent } from "./components/photo/photo.component";
import { PhotoGridComponent } from "./components/photo-grid/photo-grid.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LandingComponent } from "./components/landing/landing.component";
import { LightboxComponent } from "./components/lightbox/lightbox.component";
import { HeaderComponent } from "./components/header/header.component";
import { LightboxFooterComponent } from './components/lightbox-footer/lightbox-footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "lightbox/:id", component: LightboxComponent },
  { path: "**", component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotoGridComponent,
    FooterComponent,
    ContactComponent,
    LandingComponent,
    LightboxComponent,
    HeaderComponent,
    LightboxFooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
