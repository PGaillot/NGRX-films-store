import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FilmListComponent } from './film-list/film-list.component';
import { CollectionComponent } from './collection/collection.component';
import { filmsReducer } from './state/films.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({films:filmsReducer, collection:collectionReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
