import { MovieCard } from './MovieCard';
import movies from '../movies.json';
import styles from '../Styles/MoviesGrid.module.css'

export function MoviesGrid() {

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.key} movie={movie}/>
            ))}
        </ul>
    );

}