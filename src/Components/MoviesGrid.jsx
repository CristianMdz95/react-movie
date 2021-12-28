import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import styles from '../Styles/MoviesGrid.module.css'
import { get } from '../utils/httpClient';
import { Spinner } from './Spinner';
import { useLocation } from 'react-router-dom';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export function MoviesGrid() {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const query = useQuery();
    const search = query.get('search');

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";
        get(searchUrl).then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [search]);

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.key} movie={movie} />
            ))}
        </ul>
    );

}