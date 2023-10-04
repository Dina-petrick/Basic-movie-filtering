import React from "react";

import './card-list.style.css'

class CardList extends React.Component{
  render(){
  const {filteredMovies} = this.props;
  return(
    filteredMovies.map(movie => {
      return (
        <li key={movie.id} className="card__item">
          <h2 className="card__title">{movie.original_title}</h2>
          <div className="card__banner__wrapper">
            <img className="card__banner" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
          </div>
          {/* <span className="card__rating">{movie.vote_average}</span> */}
        </li>
      )
    })
  )
}
}

export default CardList;