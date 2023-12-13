import { Component, OnInit } from '@angular/core';
import { FilmsService } from './service/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(
    private filmsService:FilmsService
  ){}
  
  ngOnInit(): void {
      this.filmsService.getFilms().subscribe(res => console.log(res)
      )


  }


}
