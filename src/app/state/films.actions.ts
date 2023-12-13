import { createActionGroup, props } from "@ngrx/store";
import { Film } from "../model/film.model";


export const FilmsActions = createActionGroup({
    source:'Films',
    events:{
        'Add Film': props<{filmId:string}>(),
        'Remove Film': props<{filmId:string}>()
    }
})

export const FilmsApiActions  = createActionGroup({
    source:'Films API',
    events:{
        'Retrived Films List': props<{films:ReadonlyArray<Film>}>(),
    }
})