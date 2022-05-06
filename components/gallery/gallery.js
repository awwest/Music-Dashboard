import Genre from '../genre/genre';
import swr from 'swr';
import useEffect from 'react';
import { setState, useState } from 'react';

export default function Gallery({ music }) {

    const [genres, setGenres] = useState("");

    function updateSearch(e) {
        const term = e.target.value.toLowerCase();
        if (music.length === 0) {
            return;
        }
        setGenres(music.reduce((genresToAdd, album) => {
            const albumName = album.name.toLowerCase();
            const artistName = album.artistName.toLowerCase();
            if (term && !albumName.includes(term) && !artistName.includes(term)) {
                return genresToAdd;
            }
            const genres = album.genres || [];
            genres.forEach((genre) => {
              genresToAdd[genre.name] = genresToAdd[genre.name] || [];
              genresToAdd[genre.name].push(album);
            })
            return genresToAdd;
          }, {}));

    }

    if (genres.length === 0 && music.length) {
        setGenres(music.reduce((genresToAdd, album) => {
            const albumName = album.name.toLowerCase();
            const artistName = album.artistName.toLowerCase();
            const genres = album.genres || [];
            genres.forEach((genre) => {
              genresToAdd[genre.name] = genresToAdd[genre.name] || [];
              genresToAdd[genre.name].push(album);
            })
            return genresToAdd;
          }, {}));
    }

    return (
    <div>  
        <div className='header'>
            <h1>FilmHub music</h1>
            <input className='search'
                id='search'
                type='text'
                onChange={updateSearch}
                placeholder='search'></input>
        </div> 
            {Object.keys(genres).map((genre) => { 
                return <Genre key={genre} genre={genre} music={genres[genre]}></Genre>          
            })}
    </div>
    )
};