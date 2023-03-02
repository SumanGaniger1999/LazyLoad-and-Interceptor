import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger-interceptor';
import { HeaderInterceptor } from './header.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoggerInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
