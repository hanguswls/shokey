import './Search.css';
import searchIcon from '../assets/search_icon.png';

function Search() {
  return (
    <main className="search">
      <section className="search-wrapper">
        <div className="search-bar-wrapper">
          <img src={searchIcon} alt="search-icon" />
          <input type="text" name="search" id="search" placeholder='Find the perfect SHOKEYs for your campaign...' />
        </div>
      </section>
      <aside className="filter">
        내용
      </aside>
      <section className="influencers-container">
        내용
      </section>
    </main>
  )
}

export default Search;