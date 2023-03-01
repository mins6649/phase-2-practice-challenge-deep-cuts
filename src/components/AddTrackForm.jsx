import React from 'react'

function AddTrackForm({newImage, newTitle, newArtist, newBpm, handleSubmit, handleImage, handleTitle, handleArtist, handleBPM}) {
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input value={newImage} type="text" name="image" placeholder="Image URL" onChange={handleImage}/>
          <input value={newTitle} type="text" name="title" placeholder="title" onChange={handleTitle}/>
          <input value={newArtist} type="text" name="artist" placeholder="Artist" onChange={handleArtist}/>
          <input value={newBpm} type="number" name="BPM" placeholder="BPM" step="1.00" onChange={handleBPM}/>
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm