import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movie: Movie = { id: 0, title: "", description: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "" };

  constructor(private movieService: MovieService) { }


  ngOnInit(): void {
  }

  RemovefromWatchList(): void {
    this.movieService.deleteMovie(this.movie.id).subscribe();
  }




}
