import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Film } from "../model/film.model";
import { HttpClient } from '@angular/common/http';
import config from "config";

@Injectable({ providedIn: 'root' })
export class FilmsService {


    options = {
        method: 'GET',
        hostname: 'api.themoviedb.org',
        port: null,
        path: '',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + config.bearer
        }
    };

    constructor(
        private http: HttpClient
    ) { }


    getFilms(): Observable<Array<Film>> {
        const path = '/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        this.options.path = path;
        return this.http.get<{ results: Film[] }>(`https://${this.options.hostname}${this.options.path}`, { headers: this.options.headers })
            .pipe(map(data => {
                return data.results;
            }))
    }
}