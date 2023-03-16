import { MovieCard } from "./MovieCard";

export function MovieLists({ mv }) {
  console.log(mv);
  return (
    <div className="MovieLists">
      {mv.map((ele, index) => (
        <MovieCard mov={ele} key={index} />
      ))}
    </div>
  );
}
