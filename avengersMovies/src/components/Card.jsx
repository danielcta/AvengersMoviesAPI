import { useEffect, useState } from 'react'
import styles from './card.module.css'
import '../App.jsx'

function Card({ moviePoster, movieName, releaseYear, movieSinopse, mainActors }) {
  return (
    <div className="movie-card">
      <img src={moviePoster} alt={movieName} />
      <h3>{movieName}</h3>
      <p>Year: {releaseYear}</p>
      <p>Sinopse: {movieSinopse}</p>
      <p>Main Actors: {mainActors.join(', ')}</p>
    </div>
  );
}

export default Card
