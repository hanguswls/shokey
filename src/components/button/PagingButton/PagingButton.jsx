import PagingButtonItem from "./PagingButtonItem";

function PagingButton(props) {
  const {
    page,
    pagingBtn,
    setPage,
    totalPages
  } = props

  return (
    <ul className="page-btn-container">
      {
        page >= 5 ? <li className="page-btn" onClick={() => {
          setPage(((Math.floor(page / 5) - 1) * 5) + 4);
        }}>
          &lt;
        </li> : null
      }
      {
        pagingBtn.map((item, i) => {
          return (
            <PagingButtonItem 
              key={i}
              page={page}
              setPage={setPage}
              num={item} />
          )
        })
      }
      {
        totalPages > (Math.floor(page / 5) * 5) + 4 ? <li className="page-btn" onClick={() => {
          setPage((Math.floor(page / 5) + 1) * 5);
        }}>
          &gt;
        </li> : null
      }
    </ul>
  )
}

export default PagingButton;