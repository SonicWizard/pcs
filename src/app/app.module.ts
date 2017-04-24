/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { AccountsModule } from './accounts/accounts.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	AccountsModule,
	AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
