 import Image from 'next/image';


function Album({ album }) {
    return (
      <li className='album-item col'>
         <Image src={album.artworkUrl100} 
         alt={album.name}
         height='180px'
         width='180px'></Image>
        <div className='album-name'>{album.name}</div>
         <p className='artist-name'>{album.artistName}</p>
      </li>
    )
  }
  
  export default Album
  