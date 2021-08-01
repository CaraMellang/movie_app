import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./component/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const response = async () => {
    const ss = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(ss.data.data.movies);
    console.log(ss);
    setLoading(false);
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <div>
      {loading
        ? "로딩푸딩"
        : movies.map((movies) => {
            return (
              <Movie
                key={movies.id}
                id={movies.id}
                year={movies.year}
                title={movies.title}
                summary={movies.summary}
                poster={movies.medium_cover_image}
              />
            );
          })}
    </div>
  );
}

export default App;
