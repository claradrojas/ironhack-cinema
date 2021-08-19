import React from 'react'

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfLikes: 0
    }
  }

  increaseLikes = () => {
    this.setState(prevState => {
      return { numberOfLikes: prevState.numberOfLikes + 1 }
    })
  }

  render() {

    let styleObj = {
      color: "#333",
      backgroundColor: (this.state.numberOfLikes > 4) ? "greenyellow" : "#fff"
    }


    let popularBanner;
    if (this.props.rating > 7) {
      popularBanner = <p className="banner">POPULAR</p>
    } else {
      popularBanner = ""
    }



    return (
      <section className="movie" style={styleObj}>
        <h5> {this.props.title} </h5>

        <img src={this.props.imgURL} alt={this.props.title} />


        { popularBanner}

        { this.props.rating > 7 
        ? <p className="banner">POPULAR</p> 
        : '' 
        }

       

        <h5> {this.props.year} </h5>
        <h5> {this.props.rating} </h5>


        <p>
          Number of Likes: {this.state.numberOfLikes}
          &nbsp;
          <button onClick={this.increaseLikes}> +1 </button>
        </p>

        <button onClick={this.props.methodToDeleteMovie}> Delete </button>

      </section>

    )
  }
}

export default Movie