import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ContainerComponent } from './components/container/container.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { PhotoViewerComponent } from './components/photo-viewer/photo-viewer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ImageSliderComponent,
    ContainerComponent,
    PhotoComponent,
    ArchitectureComponent,
    InstitutionComponent,
    PhotoViewerComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    MatIconModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
