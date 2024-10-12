import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ContainerComponent } from './container/container.component';
import { PhotoComponent } from './photo/photo.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InstitutionComponent } from './institution/institution.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ImageSliderComponent,
    ContainerComponent,
    PhotoComponent,
    ArchitectureComponent,
    InstitutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
