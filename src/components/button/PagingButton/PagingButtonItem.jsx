function PagingButtonItem(props) {
  const {
    page,
    setPage,
    num
  } = props;

  return (
    <li className={"page-btn " + (num === page + 1 ? "active" : null)} onClick={() => {
      setPage(num - 1);
    }}>
      { num }
    </li>
  )
}

export default PagingButtonItem;