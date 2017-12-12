import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
    LightboxComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
