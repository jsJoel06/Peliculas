import { useEffect, useState } from 'react';
import '../styles/index.css';
 
const movies = [
{
  title: "Avengers: Endgame",
  description: "Los Vengadores se reúnen para derrotar a Thanos y restaurar el universo.",
  img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg"
},
  {
    title: "Interstellar",
    description: "Un grupo de exploradores viaja más allá de esta galaxia.",
    img: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    title: "The Dark Knight",
    description: "Batman lucha contra el Joker en Gotham.",
    img: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  }
];


function Index() {

const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <header>
      <div className='navbar'>
        <div className="logo"> <h2>🎬 Js Movies</h2></div>

        {/* Links */}
        <nav >
          <a href="#">Inicio</a>
          <a href="#">Películas</a>
          <a href="#">Series</a>
          <a href="#">Categorías</a>
          <a href="#">Tendencias</a>
          <a href="#">Mi Lista</a>
          <a href="#">Perfil</a>
        </nav>
      </div>
    </header>

     <section className="hero" style={{ backgroundImage: `url(${movies[current].img})`, borderRadius: '4px'}}>
      <div className="overlay">
        <h1>{movies[current].title}</h1>
        <p>{movies[current].description}</p>
        <button>▶ Reproducir</button>
        <button>ℹ Más información</button>
      </div>
    </section>
 <section>
  <h2 style={{marginLeft: '70px'}}>Películas</h2>
  <div className="peliculas">
    <img className='image' src="https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg" alt="Batman" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" alt="Wonder Woman" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" alt="Interstellar" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="Avengers: Infinity War" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" alt="The Dark Knight" />
  </div>
</section>

<section>
  <h2 style={{marginLeft: '70px'}}>Series</h2>
  <div className="series">
    <img className='image' src="https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg" alt="The Boys" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg" alt="The Boys" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg" alt="Electric Dreams" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg" alt="The Mandalorian" />
    <img className='image' src="https://image.tmdb.org/t/p/w500/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg" alt="Electric Dreams" />
  </div>
</section>


      <div className="container">
     <footer >
      <p style={{textAlign: 'center'}}>&copy; Derechos Reservados Js Movies 2025</p>
     </footer>
     </div>
    </>
  )
}

export default Index
