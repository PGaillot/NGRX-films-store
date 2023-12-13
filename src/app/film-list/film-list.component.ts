import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Film } from "../model/film.model";


@Component({
    selector:'app-film-list',
    templateUrl:'./film-list.component.html',
    styleUrls:['./film-list.component.scss']
})
 export class FilmListComponent{

    @Input() films:ReadonlyArray<Film> = [];
    @Output() add = new EventEmitter<string>();

 }