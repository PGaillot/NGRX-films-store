import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Film } from "../model/film.model";

export const selectFilms = createFeatureSelector<ReadonlyArray<Film>>('films');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectFilmsCollection = createSelector(
    selectFilms, 
    selectCollectionState,
    (films, collection) => {
        return collection.map((id) => films.find((film) => film.id === id)!)
    }
)