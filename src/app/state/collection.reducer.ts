import { createReducer, on } from "@ngrx/store";
import { FilmsActions } from "./films.actions";

const initialState: ReadonlyArray<string> = [];


export const collectionReducer = createReducer(
    initialState,
    on(FilmsActions.removeFilm, (state, { filmId }) => 
        state.filter((id) => id !== filmId)
    ),

    on(FilmsActions.addFilm, (state, { filmId }) => {
        if (state.indexOf(filmId) > -1) return state;
        return [...state, filmId]
    })
)