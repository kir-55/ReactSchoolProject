import borat from './assets/borat.jpg'; 
import requem from './assets/requem_for_a_dream.jpg';
import clockwork_orange from './assets/clockwork_orange.png';


import Movie from './Movie.tsx';
import type { MovieProps } from './Movie.tsx';
import List from './List.tsx';

const movies: MovieProps[] = [
  {
    image: borat,
    title: "Borat",
    year: "2006"
  },
  {
    image: requem,
    title: "Requem for a Dream",
    year: "2000"
  },
  {
    image: clockwork_orange,
    title: "Clockwork Orange",
    year: "1979"
  }
];



function App(){
  return(
    <>
      <List title="Movies" list={
        movies.map((movie, index) => (
          <Movie key={index} image={movie.image} title={movie.title} year={movie.year} />
        ))
      }/>

      {/* <List title="Movies Sorted" list={
        movies.sort(
          (a, b) => a.title.localeCompare(b.title)
        ).map((movie, index) => (
          <Movie key={index} image={movie.image} title={movie.title} year={movie.year} />
        ))}
      /> */}
    </>
  );
}

export default App
