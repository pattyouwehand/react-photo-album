import * as React from 'react'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>
    <ul>
        {props.albums.map(album => 
          <li key={album.title}></li>)}
    </ul>

    There are { props.albums.length } albums available.
  </div>)
}