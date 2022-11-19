import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss'],
})
export class SeatSelectionComponent implements OnInit {
  public seats = [];
  model: any = {};
  movieId: string;
  theatreId: string;
  showId: string;
  showtime: string;
  date: String;
  cookievalue: string = 'unknown';

  constructor(public router: Router, public ac: ActivatedRoute) {
    // fetching parameters from url
    this.showId = this.ac.snapshot.params['showId'];
    this.movieId = this.ac.snapshot.params['movieId'];
    this.theatreId = this.ac.snapshot.params['theatreId'];
    this.showtime = this.ac.snapshot.params['showtime'];
    this.date = this.ac.snapshot.params['date'];
  }

  ngOnInit() {}
  //Function for disabling seats

  //check if user has entered data
  addchk(data: any) {
    if (this.model.Numseats == undefined) {
      alert('Enter Username and number of seats');
      return;
    }
    if (this.seats.length.toString() == this.model.Numseats) {
      alert('You can only select ' + this.model.Numseats + ' seats');
      return;
    }
    this.model.seats = this.seats.toString();
  }

  //function for payment after seat selection
  confirmandpay() {
    if (this.cookievalue == '') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate([
        '/payment',
        {
          showId: this.showId,
          movieId: this.movieId,
          theatreId: this.theatreId,
          seats: this.seats,
          totalseat: this.seats.length,
          showtime: this.showtime,
          date: this.date,
        },
      ]);
    }
  }
}
