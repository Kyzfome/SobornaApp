import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { PhotoComponent } from './photo/photo.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InstitutionComponent } from './institution/institution.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'architecture', component: ArchitectureComponent},
  {path: 'institution', component: InstitutionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
