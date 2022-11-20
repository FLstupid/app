import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-middle-div',
  templateUrl: './middle-div.component.html',
  styleUrls: ['./middle-div.component.scss'],
})
export class MiddleDivComponent implements OnInit {
  list?: Array<Movie>;
  searchTerm?: string;
  id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    public movieService: MovieService,
    public router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    let movies$: Observable<Array<Movie>> = movieService.get_Movies();
    movies$.subscribe((movies) => {
      this.list = movies;
    });
  }

  ngOnInit() {}
}
