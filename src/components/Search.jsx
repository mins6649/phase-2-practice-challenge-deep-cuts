import React from 'react'

function Search({handleSearchFilter}) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleSearchFilter}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search