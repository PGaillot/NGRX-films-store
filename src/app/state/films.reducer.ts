import { createReducer, on } from "@ngrx/store";
import { Film } from "../model/film.model";
import { FilmsApiActions } from "./films.actions";


const initialState:ReadonlyArray<Film> = [];

export const filmsReducer = createReducer(
    initialState, 
    on(FilmsApiActions.retrivedFilmsList, (_state, {films}) => films)
)