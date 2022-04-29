import Genre from '../genre/genre';
import swr from 'swr';
import useEffect from 'react';

    // export async function getServerSideProps(context) {
    //     // Call an external API endpoint to get albums
    //     console.log('fetching');
    //     // let { music, error } = swr('/api/hello', (...args) => fetch(...args).then((res)=>res.json()));
    //     const res = await fetch('/api/hello');//https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json', {mode: 'no-cors', headers: {
    //         // 'Content-Type': 'application/json',
    //     // }});
    //     const feed = await res.json();
    //     console.log(feed);
    //     music = feed;
    //     return {
    //         props: {
    //             music,
    //         },
    //     }
    // }

export default function Gallery({ genres, music }) {

    console.log(genres);
    console.log(music);
    // const genres = music && music.reduce((genres, album) => {
    //     genres[album.genre] = genres[album.genre] || [];
    //     genres[album.genre].push(album);
    //     return genres;
    // }, {});

    function updateSearch(e) {
        console.log(e.currentTarget.innerText);
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
                console.log(genre)
                return <Genre key={genre} genre={genre} music={genres[genre]}></Genre>          
            })}
    </div>
    )
};