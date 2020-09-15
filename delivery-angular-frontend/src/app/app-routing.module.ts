import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';  //new
import { AboutComponent } from './about/about.component';//new
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
// import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},//new
  { path: 'home', component: HomeComponent },//new
  { path: 'about', component: AboutComponent },//new
  { path: 'customers', component: CustomerListComponent },
  { path: 'catalogues',
    component: CatalogueListComponent,
    children: [
      { path: 'companies', component: CompanyListComponent }
    ]}
  // { path: 'adduser', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
