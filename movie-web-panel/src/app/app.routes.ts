import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'top-rated', component: TopRatedComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '**', redirectTo: 'home' },
];
