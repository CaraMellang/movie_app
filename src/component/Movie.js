import React from "react";
import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>{summary}</span>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
