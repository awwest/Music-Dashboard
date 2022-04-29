import Album from '../album/album';

const Genre = ({genre, music}) => {
    console.log(music); 
    return (<div className='container grid'>
        <h2 className='genre-title'>{genre}</h2>
        <ul className='genre-container row'>
            {music.map((album) => {
                return <Album album={album} key={album.id}></Album>
            }) }
        </ul>
    </div>);
}

export default Genre;