import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { RecentComponent } from './recent/recent.component';
import { OrganizationComponent } from './organization/organization.component';
import { AdresserComponent } from './adresser/adresser.component'; 
import { UnderorganisationerComponent } from './underorganisationer/underorganisationer.component';
import { ProgressbarComponent } from './progressbar/progressbar.component'; 
@NgModule({
  declarations: [
    AppComponent, 
    RecentComponent,
    OrganizationComponent,
    AdresserComponent,
      UnderorganisationerComponent,
      ProgressbarComponent
  ],
  imports: [
      BrowserModule, HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
