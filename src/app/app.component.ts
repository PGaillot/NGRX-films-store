import { Component, OnInit } from '@angular/core';
import { FilmsService } from './service/films.service';
import { Store } from '@ngrx/store';
import { FilmsActions, FilmsApiActions } from './state/films.actions';
import { selectFilms, selectFilmsCollection } from './state/films.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  films$ = this.store.select(selectFilms);
  filmsCollections$ = this.store.select(selectFilmsCollection); 

  constructor(
    private filmsService: FilmsService,
    private store: Store,
  ) { }

  onAdd(filmId: string) {
    this.store.dispatch(FilmsActions.addFilm({ filmId }));
  }

  onRemove(filmId: string) {
    this.store.dispatch(FilmsActions.removeFilm({ filmId }));
  }

  ngOnInit(): void {
    this.filmsService
      .getFilms()
      .subscribe((films) => {
        this.store.dispatch(FilmsApiActions.retrivedFilmsList({ films }))
      })
  }
}
