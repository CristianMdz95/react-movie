import movie from "../movies.json"
import style from "../Styles/MoviesDetails.module.css"

export default function MovieDetails() {

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie[0].poster_path;

    return (
        <div className={style.detailsContainer}>
            <img className={style.col + ' ' + style.movieImage} src={imageUrl} alt={movie[0].title} />

            <div className={style.col + ' ' + style.movieDetails} >
                <p className={style.firstItem}>
                    <strong>Title: {movie[0].title}</strong>
                </p>

                <p>
                    <strong>{movie[0].genre_ids.join(', ')}</strong>
                </p>

                <p>
                    <strong>Description: {movie[0].overview}</strong>
                </p>
            </div>
        </div>
    )
} 
