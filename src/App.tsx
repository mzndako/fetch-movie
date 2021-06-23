import React, { useState } from 'react';
import { InputField, Button } from './components/input'; 
import './App.css';
import { fetchMovie } from './services/movie';
import { Movie, IMovie } from './components/movie';

function App() {
  const [inputText, setInputText] = useState("");
  const [movie, setMovie] = useState<IMovie | null | undefined>();

  const handleInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(target.value);
  }

  const handleClick = async () => {
    try {
      const response = await fetchMovie(inputText);
      const data = response.data;

      if (!data.Title) {
        throw Error("Movie not found")
      }

      setMovie({
        title: data.Title,
        year: data.Year,
        genre: data.Genre,
        plot: data.Plot
      });
    } catch (error) {
      console.error(error);
      setMovie(null);
    }
  }

  const DisplayMovie = () => {
    if (movie === undefined) {
      return;
    }

    return (
      movie ? <Movie movie={movie} /> : "Movie Not Found"
    )
  }

  return (
    <div style={{marginTop: '50px', marginLeft: '50px'}}>
      <div>
        <InputField onChange={handleInputChange} value={inputText} />
        <Button onClick={handleClick}>Search</Button>
      </div>
      <br/>
      <div>
        { DisplayMovie() }
      </div>
    </div>
  );
}

export default App;
