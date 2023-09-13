import { useEffect, useState } from 'react'
import styles from './card.module.css'
import '../App.jsx'

function Card() {

   

    return (
        <>
            <section>
                <h2>Avengers Movies</h2>
                {
                    movies.length > 0 ? (
                        <section>
                            {
                                movies.map((movie) => (
                                    <Card
                                        moviePoster = {movie.poster}
                                        movieName = {movie.name}
                                        releaseYear = {movie.releaseYear}
                                        movieSinopse = {movie.sinopse}
                                        mainActors = {movie.mainActors}
                                        />
                                ))
                            }
                        </section>
                    ) : (
                        <p>Carregando Filmes</p>
                    )
                }     
                
            </section>

        </>
    )
}

export default Card