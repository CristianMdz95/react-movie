import { MovieCard } from './MovieCard';
import movies from '../movies.json';
import styles from '../Styles/MoviesGrid.module.css'
import { useEffect } from 'react';

export function MoviesGrid() {

    let moviesLe = [];

    useEffect(() => {
        fetch("https://api.themoviedb.org/4/discover/movie", {
            headers: {
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWI4OWI1MDAwNTA4NjQxZmE2Y2VkNmNiOTcxZmEyMSIsInN1YiI6IjYxYzc3ZjU0YTkzZDI1MDA2MWFlZWY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gcy1C8eJIsftBecyvEueqi_f6J5SMIvZag9OvGAPV18',
                "Content-Type": 'application/json;charset=utf-8'
            },
        })
            .then((result) => result.json())
            .then((data) => {
                moviesLe = data.results;
        });
    });

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.key} movie={movie} />
            ))}
        </ul>
    );

}