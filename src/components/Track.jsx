import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({title, artist, bpm, image={defaultVinyl}}) {
  
  return (
    <tr className="table-row">
        <td className="row-image">
            <img src={image} alt="title" />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{bpm}</td>
    </tr>
  )
}

export default Track