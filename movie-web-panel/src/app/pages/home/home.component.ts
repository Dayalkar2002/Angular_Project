import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  page = 1;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies('popular', this.page).subscribe((data) => {
      this.movies = data.results;
    });
  }

  nextPage(): void {
    this.page++;
    this.loadMovies();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadMovies();
    }
  }
}
