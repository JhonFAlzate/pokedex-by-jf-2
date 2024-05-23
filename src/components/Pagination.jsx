

const Pagination = ({currentPage, setCurrentPage, totalPages}) => {

  const handleBefore =  () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage-1)
    }

  }
  const handleAfter =  () => {
    if (currentPage !== totalPages){
      setCurrentPage(currentPage +1 )
    }
    
  }

  return (
    <div className="pagination_padre">
      <button className="pagination_btn" onClick={handleBefore}>⬅ Before</button>
      <h3 className="pagination_title">{currentPage} --- {totalPages}</h3>
      <button className="pagination_btn" onClick={handleAfter}>After ➡ </button>
    </div>
  )
}

export default Pagination