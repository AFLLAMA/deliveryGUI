import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './service/customer-service.service';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { CompanyListComponent } from './company-list/company-list.component';

  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      CustomerListComponent,
      CatalogueListComponent,
      CompanyListComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatToolbarModule,//new
      MatIconModule,//new
      MatButtonModule,//new
      MatCardModule,//new
      MatProgressSpinnerModule//new
    ],
    providers: [CustomerService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
