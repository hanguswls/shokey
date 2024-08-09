import './Search.css';
import searchIcon from '../assets/search_icon.png';
import filterIcon from '../assets/filter_icon.png';
import clearIcon  from '../assets/clear_icon.png';
import InfluencerCard from '../components/card/InfluencerCard';
import useInfluencerList from '../hooks/useInfluencerList';
import PagingButton from '../components/button/PagingButton/PagingButton';

function Search() {
  const { 
    influencerList,
    page,
    setPage,
    totalPages,
    pagingBtn
  } = useInfluencerList();

  return (
    <main className="search">
      <section className="search-wrapper">
        <div className="search-bar-wrapper">
          <img src={searchIcon} alt="search-icon" />
          <input type="text" name="search" id="search" placeholder='Find the perfect SHOKEYs for your campaign...' />
        </div>
      </section>
      <div className="search-main-content">
        <aside className="filter">
          <div className="filter-title-wrapper">
            <img src={filterIcon} alt="filter-icon" />
            <h3>Filter</h3>
            <span>
              Clear All 
              <img src={clearIcon} alt="clear-icon" />
            </span>
          </div>
          <article className="filter-niche">
            <h4>Niche</h4>
            <ul>
              <li>Food  (100)</li>
              <li>Fashion  (100)</li>
              <li>Travel  (100)</li>
            </ul>
          </article>
        </aside>
        <section className="influencers-container">
          {
            influencerList.map((item, i) => {
              return <InfluencerCard 
                        key={i}
                        userName={item.userInfo.userName}
                        verified={item.verified}
                        // profile_image={item.profile_image}
                        profile_image={"https://picsum.photos/500.jpg?random" + i}
                        subscribers={item.subscribers} />
              })
            }
        </section>
      </div>
      <div className="posts-page-wrapper">
          <PagingButton
            page={page}
            pagingBtn={pagingBtn}
            setPage={setPage}
            totalPages={totalPages} />
        </div>
    </main>
  )
}

export default Search;