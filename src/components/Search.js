import React, {useState} from 'react'

export const Search = ({listState, setListState}) => {

  const[search, setSearch] = useState('');
  const[noResults, setNoResults] = useState(false);

  const searchMovies = (e) => {
    setSearch(e.target.value);
    filterMovies(e.target.value);
  }

  const filterMovies = (searchText) => {
    let moviesFilter = listState.filter(movie => {
      return movie.title.toLowerCase().includes(searchText.toLowerCase());
    });
  
    if (moviesFilter.length === 0) {
      setListState(JSON.parse(localStorage.getItem('movies')));
      setNoResults(true);
    } else {
      setListState(moviesFilter);
      setNoResults(false);
    }
  
    console.log(moviesFilter);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    filterMovies(search);
    console.log("Búsqueda realizada:", search);
  }

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      {noResults && <span className="no-results">No se encontró ninguna película</span>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-field"
          name="search-field"
          autoComplete='off'
          value={search}
          onChange={searchMovies}
          placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}