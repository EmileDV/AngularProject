import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchResults: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.searchMovieDB("Avengers").subscribe(result => {
      this.searchResults = result.results.map((resultMovie: any) => ({
        id : 0,
        title : resultMovie.title,
      }))
    })
  }

}
