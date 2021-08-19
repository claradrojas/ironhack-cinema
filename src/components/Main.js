import React from 'react'
import Movie from "./Movie"
import movies from "../data/movies.json"
import AddMovie from "./AddMovie"


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


  renderMovies() {
    return this.state.moviesArr.map(movieObj => {
      return <Movie key={movieObj.id} {...movieObj} methodToDeleteMovie={() => { this.deleteMovie(movieObj.id) }}
      />
    })
  }

  render() {
    return (
      <main>
        <AddMovie />
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