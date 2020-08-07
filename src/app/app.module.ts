import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {RouterModule} from '@angular/router';
import {ShipListComponent} from './ships/ship-list/ship-list.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { ShipDetailsComponent } from './ships/ship-details/ship-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ShipListComponent,
    ShipDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'users/:userId', component: UserDetailsComponent}
    ]),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
