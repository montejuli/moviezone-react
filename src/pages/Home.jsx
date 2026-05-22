import Header from "../components/Header";
import MovieList from "../components/MovieList";

const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ciencia ficción",
    year: 2014,
    description: "Un grupo de astronautas viaja por un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    id: 2,
    title: "El Padrino",
    genre: "Drama",
    year: 1972,
    description: "La historia de una poderosa familia mafiosa y sus conflictos internos.",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    id: 3,
    title: "Spider-Man",
    genre: "Acción",
    year: 2002,
    description: "Un joven obtiene poderes arácnidos y aprende la responsabilidad de ser héroe.",
    image: "https://picsum.photos/300/200?random=3"
  }
];

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <section className="hero">
          <h1>Bienvenido a MovieZone</h1>
          <p>Explorá una selección de películas destacadas desde un array local.</p>
          <button>Ver películas</button>
        </section>

        <section className="content">
          <h2>Películas destacadas</h2>
          <MovieList movies={movies} />
        </section>
      </main>

      <footer className="footer">
        <p>MovieZone © 2026 - Proyecto React con Vite</p>
      </footer>
    </>
  );
}

export default Home;