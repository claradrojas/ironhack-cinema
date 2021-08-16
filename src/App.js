import logo from './logo.svg';
import './App.css';

function Header(){
  return <h1>Welcome to Ironhack</h1>
}

function Main(){
  return <main>
    <Movie title="The Godfather" />
    <Movie title="Interstellar" />
    <Movie title="Inception" />
    <Movie title="Coco" />
  </main>
}

function Movie(props){
  return ( 
    <section className="movie">
      <h5>{props.title}</h5>
    </section>
  )
}

function Footer(){
  return <footer>Ironhack Copyright</footer>
}


function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
