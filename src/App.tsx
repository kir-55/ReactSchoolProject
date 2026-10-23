import 'bootstrap/dist/css/bootstrap.min.css';

import borat from './assets/borat.jpg'; 
import requem from './assets/requem_for_a_dream.jpg';
import clockwork_orange from './assets/clockwork_orange.png';

import atomic_habits from './assets/atomic_habits.jpg'; 
import crime_and_punishment from './assets/crime_and_punishment.png';
import solaris from './assets/solaris.jpg';

import chocolate_starfish from './assets/chocolate_starfish.jpg';


import Movie from './movie/Movie.tsx';
import type { MovieProps } from './movie/Movie.tsx';
import List from './List.tsx';
import Book, { type BookProps } from './book/Book.tsx';
import Album, { type AlbumProps } from './album/Album.tsx';



const movies: MovieProps[] = [
  {
    image: borat,
    title: "Borat",
    year: "2006",
    rating: 7.3
  },
  {
    image: requem,
    title: "Requem for a Dream",
    year: "2000",
    rating: 8.3
  },
  {
    image: clockwork_orange,
    title: "Clockwork Orange",
    year: "1979",
    rating: 8.3
  }
];

const books: BookProps[] = [
  {
    image: atomic_habits,
    title: "Atomic Habits",
    year: "2018",
    rating: 7.3
  },
  {
    image: crime_and_punishment,
    title: "Crime and Punishment",
    year: "1866",
    rating: 8.3
  },
  {
    image: solaris,
    title: "Solaris",
    year: "1972",
    rating: 8.3
  }
];

const albums: AlbumProps[] = [
  {
    image: chocolate_starfish,
    title: "Chocolate Starfish And The Hotdog Flavored Water",
    year: "2006",
    rating: 7.3,
    songs: [
      {
        title: "Intro",
        duration: "1:30"
      },
      {
        title: "My Generation",
        duration: "3:30"
      },
      {
        title: "Rollin'",
        duration: "3:30"
      }
    ]
  }
];


function App(){
  return(
    <div className="container">
      <List title="Movies" list={
        movies.map((movie, index) => (
          <Movie key={index} image={movie.image} title={movie.title} year={movie.year} rating={movie.rating} />
        ))
      }/>

      <List title="Books" list={
        books.map((book, index) => (
          <Book key={index} image={book.image} title={book.title} year={book.year} rating={book.rating} />
        ))
      }/>

      <List title="Albums" list={
        albums.map((album, index) => (
          <Album key={index} image={album.image} title={album.title} year={album.year} rating={album.rating} songs={album.songs} />
        ))
      }/>
    </div>
  );
}

export default App
