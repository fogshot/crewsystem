import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {RouterModule, Routes} from '@angular/router';
import {ShipListComponent} from './ships/ship-list/ship-list.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {ShipDetailsComponent} from './ships/ship-details/ship-details.component';
import {UserListComponent} from './users/user-list/user-list.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:userId', component: UserDetailsComponent},
  {path: 'ships', component: ShipListComponent},
  {path: 'ships/:shipId', component: ShipDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ShipListComponent,
    ShipDetailsComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
