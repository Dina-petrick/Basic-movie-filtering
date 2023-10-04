import React from "react";
import SearchBox from "../components/search-box/search-box.component";
import CardList from "../components/card-list/card-list.component";

import './homepage.style.css'

class HomePage extends React.Component{

  constructor(){
    super();

    this.state = {
      movies : [],
      searchData : ''
    }
  }

  componentDidMount(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => this.setState(() => {
        return {movies : data.results}
    }))
  } 

  onSearchChange = (e) => {
      const searchData = e.target.value.toLocaleLowerCase();
      this.setState(()=> {
      return {searchData}
  })};

  render(){
      const filteredMovies = this.state.movies.filter(movie => {
      return (
        movie.original_title.toLocaleLowerCase().includes(this.state.searchData))
    })

    return(
    <div className="container">
      <div className="title__wrapper">
          <h1 className="title">Movies List</h1>
          <SearchBox onChangeHandler = {this.onSearchChange} />
      </div>
      <ul className="card__list">
        <CardList filteredMovies = {filteredMovies} />
      </ul>
    </div>
    )
  }
}

export default HomePage;