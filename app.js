import Actor from "./models/actor.js";
import Movie from "./models/movie.js";
import ActorService from "./services/actorService.js";
import MovieService from "./services/movieService.js";


async function main() {
    const actorService = new ActorService();
    const movieService = new MovieService();                  


    const a1 = new Actor(1, "Leonardo DiCaprio", 48);
    const a2 = new Actor(2, "Kate Winslet", 47);
    const a3 = new Actor(3, "Morgan Freeman", 86);

    actorService.addActor(a1);
    actorService.addActor(a2);
    actorService.addActor(a3);

    const m1 = new Movie(1, "Titanic", 1997);
    const m2 = new Movie(2, "Shawshank Redemption", 1994);

    movieService.addMovie(m1);
    movieService.addMovie(m2);

    try {
        await movieService.addActorToMovie(1, 1);
        await movieService.addActorToMovie(1, 2);
        await movieService.addActorToMovie(2, 3);
    } catch (error) {  
        console.error(error);
    }

    console.log("Actors:", actorService.getAllActors());
    console.log("Movies:", movieService.getAllMovies());

    try {
        const movieWithActors = await movieService.getMovieWithActors(1, actorService);
        console.log("Movie with Actors:", movieWithActors);
    } catch (error) {
        console.error("Error:", error);
    }

    try {
        const movieWithActors = await movieService.getMovieWithActors(99, actorService);
        console.log("Movie with Actors:", movieWithActors);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
