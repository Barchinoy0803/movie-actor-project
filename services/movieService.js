import { delay } from "../utils/delay.js";

export default class MovieService {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  getAllMovies() {
    return this.movies;
  }

  async addActorToMovie(movieId, actorId) {
    const movie = this.movies.find(m => m.id === movieId);
    if (!movie) {
      return Promise.reject(`Movie with id ${movieId} not found`);
    }

    if (!movie.actors.includes(actorId)) {
      movie.actors.push(actorId);
    }
    return movie;
  }

  async getMovieWithActors(movieId, actorService) {
    await delay(1000);
    const movie = this.movies.find(m => m.id === movieId);
    if (!movie) {
      return Promise.reject(`Movie with id ${movieId} not found`);
    }

    const actors = [];
    for (const actorId of movie.actors) {
      try {
        const actor = await actorService.findActorById(actorId);
        actors.push(actor);
      } catch (error) {
        console.error(error);
      }
    }

    return {
      id: movie.id,
      title: movie.title,
      year: movie.year,
      actors
    };
  }
}
