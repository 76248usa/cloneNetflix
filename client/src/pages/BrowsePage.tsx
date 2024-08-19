import NavBar from "../components/NavBar";
import Billboard from "../components/BillBoard";
import MovieList from "../components/MovieList";
import useMoviesList from "../hooks/useMoviesList";
import { useState } from "react";

function BrowsePage() {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useMoviesList(offset);

  //console.log({ data, loading, error });
  return (
    <div>
      <NavBar />
      <Billboard />
      <div className="pb-5">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <MovieList movies={data} />}
      </div>
    </div>
  );
}

export default BrowsePage;
