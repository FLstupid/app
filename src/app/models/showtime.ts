export class showTime {
  id: string;
  showDate: string;
  timeStart: string;
  timeEnd: string;
  price: string;
  movie: string;
  theatre: string;
  constructor(
    id: string,
    showDate: string,
    timeStart: string,
    timeEnd: string,
    price: string,
    movie: string,
    theatre: string
  ) {
    this.id = id;
    this.showDate = showDate;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.price = price;
    this.movie = movie;
    this.theatre = theatre;
  }
}
