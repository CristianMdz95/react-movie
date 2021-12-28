import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Spinner } from "../Components/Spinner";
import style from "../Styles/MoviesDetails.module.css"
import { get } from "../utils/httpClient";

export function MovieDetails() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        setIsLoading(true);

        get("/movie/"+movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId])

    if(isLoading){
        return <Spinner></Spinner>
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={style.detailsContainer}>
            <img width={400} height={600} className={style.col + ' ' + style.movieImage} src={imageUrl} alt={movie.title} />

            <div className={style.col + ' ' + style.movieDetails} >
                <p className={style.firstItem}>
                    <strong>Title: {movie.title}</strong>
                </p>

                <p>
                    <strong>Genres: {movie.genres.map((genres) => genres.name).join(", ")}</strong>
                </p>

                <p>
                    <strong>Description: {movie.overview}</strong>
                </p>
            </div>
        </div>
    )
} 
