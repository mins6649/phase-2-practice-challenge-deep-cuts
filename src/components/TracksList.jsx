import React from 'react'
import Track from './Track'

function TracksList({musicList}) {

const renderMusicList = musicList.map((music) => {
  return <Track key={music.id} title={music.title} artist={music.artist} bpm={music.BPM} image={music.image}/>
})

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {renderMusicList}
      </tbody>
    </table>
  )
}

export default TracksList