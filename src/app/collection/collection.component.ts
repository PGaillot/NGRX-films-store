import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Film } from "../model/film.model";


@Component({
    selector:'app-collection',
    templateUrl:'./collection.component.html',
    styleUrls:['./collection.component.scss']
})

export class CollectionComponent{

    @Input() films:ReadonlyArray<Film> = [];
    @Output() remove = new EventEmitter<string>();

}