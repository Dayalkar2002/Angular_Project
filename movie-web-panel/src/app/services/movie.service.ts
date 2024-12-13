import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'c45a857c193f6302f2b5061c3b85e743';
  private baseUrl = 'https://api.themoviedb.org/3';
  private imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private http: HttpClient) {}

  getMovies(type: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}&language=en-US&page=${page}`);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1`);
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`);
  }

  getMovieCast(movieId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`);
  }

  getImageUrl(path: string): string {
    return `${this.imageUrl}${path}`;
  }
}
