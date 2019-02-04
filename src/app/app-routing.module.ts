import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersComponent } from './beers/beers.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerAddComponent } from './beer-add/beer-add.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { BeerPictureUploadComponent } from './beer-picture-upload/beer-picture-upload.component';

const routes: Routes = [
  /*FIRST INITIAL ROUTING PLAN FOR BESPOKE APP
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: 'Complete Beer Selection'} },
  { path: 'add', component: AddBeerComponent, data: { title: 'Add New Beer'} },
  { path: 'edit', component: EditBeerComponent, data: { title: 'Edit Beer description'}  },
  { path: 'search', component: SearchBeerComponent, data: { title: 'Search for that Beer'}  },
*/
  //FOLLOWING A TUTORIAL: https://www.djamware.com/post/5bca67d780aca7466989441f/angular-7-tutorial-building-crud-web-application
  { path: 'beers', component: BeersComponent, data: { title: 'List of Beers'} },
  { path: 'beer-detail/:id', component: BeerDetailComponent, data: { title: 'Beer Details'} },
  { path: 'beer-add', component: BeerAddComponent, data: { title: 'Add a Beer'} },
  { path: 'beer-edit/:id', component: BeerEditComponent, data: { title: 'Edit a Beer'} },
  { path: 'beers', component: BeersComponent, data: { title: 'List of Beers'} },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
  { path: 'beer-search', component: BeerSearchComponent, data: { title: 'Search' }},
  { path: 'beer-picture-upload', component: BeerPictureUploadComponent, data: { title: 'Upload Image' }},
  { path: '', redirectTo: '/beers', pathMatch:'full'}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
