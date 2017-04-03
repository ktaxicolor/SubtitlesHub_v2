
// CORE DEPS
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    MaterialModule
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
