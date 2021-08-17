import React from 'react'

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

// function Header(){
//   return <h1>Welcome to Ironhack</h1>
// }

class Header extends React.Component {
  render(){
    return  <p> {this.props.title} </p>
  }
}

// function Main(){
//   return <main>
//     <Movie title="The Godfather" />
//     <Movie title="Interstellar" />
//     <Movie title="Inception" />
//     <Movie title="Coco" />
//   </main>
// }

class Main extends React.Component {
  render() {
    return (
      <>
      <Movie title="The Godfather" />
      <Movie title="Interstellar" />
      <Movie title="Inception" />
      <Movie title="Coco" />
      </>
    )
  }
}

// function Movie(props){
//   return ( 
//     <section className="movie">
//       <h5>{props.title}</h5>
//     </section>
//   )
// }

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfLikes: 0
    }
  }

  increaseLikes = () => {
    this.setState(prevState => {
      return {numberOfLikes: prevState.numberOfLikes +1}
    })
  }
  render() {
    return (
      <div className="movie"> 
      <h5> {this.props.title} </h5>
      <p>Number of Likes: {this.state.numberOfLikes}</p>
      <button onClick= {this.increaseLikes}> Likes </button>
      </div>

    )
  }
}


// function Footer(){
//   return <footer>Ironhack Copyright</footer>
// }

class Footer extends React.Component {
  render() {
    return <footer> This is the footer </footer>

  }
}


function App() {
  return (
    <div className="App">
     <Header title="Welcome to Ironhack Cinema"/>
     <Main />
     <Footer />
    </div>
  );
}

export default App;
