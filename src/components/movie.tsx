import React, { ReactElement } from 'react';

export interface IMovie {
  title: string;
  year: string;
  plot: string;
  genre: string;
}

export interface MovieProps {
  movie: IMovie;
}

export const Movie = ({ movie }: MovieProps): ReactElement => {
  const {title, year, plot, genre} = movie;
  const genreList = genre?.split(',') || [];

  return (
    <div>
      Title: <b>{title}</b><br/>
      Year: <b>{year}</b><br/>
      Plot: <b>{plot}</b><br/>
      <div>
      Genre:
        <ul>  
        { 
          genreList.map((value) => {
            return (
              <li>{value}</li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}
