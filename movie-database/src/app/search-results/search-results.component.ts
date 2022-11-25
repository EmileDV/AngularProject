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

  searchTerm: string = ""

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchTerm)
    this.movieService.searchMovieDB(this.searchTerm).subscribe(result => {
      this.searchResults = result.results.map((resultMovie: any) => ({
        id : 0,
        title : resultMovie.title,
        description: resultMovie.overview,
        imageUrl: "https://image.tmdb.org/t/p/w500" + resultMovie.poster_path,

      }))
    })
  }
}
