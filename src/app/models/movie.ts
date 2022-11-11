export class movie {
  name: String;
  duration: String;
  description: String;
  image: String;
  trailer: String;
  releases: String;
  genres: String;

  constructor(
    name: String,
    duration: String,
    description: String,
    image: String,
    trailer: String,
    releases: String,
    genres: String
  ) {
    this.name = name;
    this.duration = duration;
    this.description = description;
    this.image = image;
    this.trailer = trailer;
    this.releases = releases;
    this.genres = genres;
  }
}
