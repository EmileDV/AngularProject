import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = {id: 0, title: "", description: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: ""};

  constructor(private movieService: MovieService) { }


  ngOnInit(): void {
  }

  addToWatchList(): void {
      this.movieService.postMovie(this.movie).subscribe();
  }

}