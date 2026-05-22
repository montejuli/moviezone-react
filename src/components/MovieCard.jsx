function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.image} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p><strong>Género:</strong> {movie.genre}</p>
        <p><strong>Año:</strong> {movie.year}</p>
        <p>{movie.description}</p>

        <button>Ver detalle</button>
      </div>
    </article>
  );
}

export default MovieCard;