import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {Route} from './route';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusinessCardDirectoryComponent } from './business-card-directory/business-card-directory.component';
import { AboutComponent } from './about/about.component';
import {GetHomeService} from './get-home.service';
import {HelperService} from "./models/helper.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessCardDirectoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Route)
  ],
  providers: [
    HelperService,
    GetHomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
