import React from 'react'
import Movie from "./Movie"
import movies from "../data/movies.json"
import AddMovie from "./AddMovie"
import SearchBar from './SearchBar'


class Main extends React.Component {

  state = {
    moviesArr: movies
  }


  deleteMovie = (movieId) => {
    this.setState(prevState => {
      return {
        moviesArr: prevState.moviesArr.filter(movie => movie.id !== movieId)
      }
    })
  }

// here we pass the new movie data(fields), and add it to the prev array stored in State
  createMovie = (movieData) => {
    this.setState(prevState => {
      return {
        moviesArr: [...prevState.moviesArr, movieData]
      }
    })
  }


  renderMovies() {
    return this.state.moviesArr.map(movieObj => {
      return <Movie 
      key={movieObj.id} 
      {...movieObj} 
      methodToDeleteMovie={() => { this.deleteMovie(movieObj.id) }}
      />
    })
  }

searchMovie = (searchData) => {
  //console.log(searchData)
    this.setState(prevState => {
      return {
        moviesArr: prevState.moviesArr.filter(movie => movie.title.toLowerCase().includes(searchData.searchName.toLowerCase()))
      }
    })
}

  render() {
    return (
      <main>
        
        <SearchBar addSearchHandler={this.searchMovie}/>
        {/* here we pass props, a reference to the method createMovie */}
        <AddMovie addMovieHandler={this.createMovie}/> 
        <div className="movie-container">
          {
            this.state.moviesArr.length > 0
              ? this.renderMovies()
              : <p className="msg-info"> "All movies are deleted" </p>
          }

        </div>
      </main>
    );
  }
}



export default Main