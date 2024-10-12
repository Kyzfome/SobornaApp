import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';
import { InstitutionComponent } from './components/institution/institution.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: 'institution', component: InstitutionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
