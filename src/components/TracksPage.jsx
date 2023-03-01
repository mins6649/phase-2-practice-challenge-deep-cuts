import React, { useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [musicList, setMusicList] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:8001/tracks")
    .then(res => res.json())
    .then(data => setMusicList(data))
  }, [])

  //ADD TRACK FORM:
  const [newImage, setNewImage] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newArtist, setNewArtist] = useState("");
  const [newBpm, setNewBpm] = useState("");

  function handleImage(e){
    setNewImage(e.target.value)
  }
  function handleTitle(e){
    setNewTitle(e.target.value)
  }
  function handleArtist(e){
    setNewArtist(e.target.value)
  }
  function handleBPM(e){
    setNewBpm(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    const newEntry = {image: newImage, title: newTitle, artist: newArtist, BPM: newBpm}
    const newTrack = [...musicList, newEntry]
    
    fetch("http://localhost:8001/tracks",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
    .then(res => res.json())
    .then(()=> setMusicList(newTrack))
  }

  //SEARCH FILTER:
  const [search, setSearch] = useState("")
  function handleSearchFilter(e){
    setSearch(e.target.value)
  }
  const filterMusic = musicList.filter(music =>{
    if(search === ""){
      return true;
    } 

    return music.title.toLowerCase().includes(search.toLowerCase()) || music.artist.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>
      <Search handleSearchFilter={handleSearchFilter}/>
      <AddTrackForm
      newImage={newImage}
      newTitle={newTitle}
      newArtist={newArtist}
      newBpm={newBpm}
      handleSubmit={handleSubmit} 
      handleImage={handleImage}
      handleTitle={handleTitle}
      handleArtist={handleArtist}
      handleBPM={handleBPM}
      />
      <TracksList musicList={filterMusic}/>
    </div>
  )
}

export default TracksPage