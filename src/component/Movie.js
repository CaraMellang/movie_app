import React from "react";
import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h1 className="movie_title">{title}</h1>
        <h2 className="movie_year">{year}</h2>
        <ul className="movie_genres">
          {genres.map((gg, index) => (
            <li key={index} className="genres_genre">
              {gg}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0,140)}...</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
