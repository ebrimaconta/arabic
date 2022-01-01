import { useState, useEffect } from 'react'
import arabicEng from '../Data/araibicEng'
import ReactTooltip from 'react-tooltip'
import { Pagination } from 'semantic-ui-react'
export default function Home() {
  const [toggle, setToggle] = useState(true)
  const [hide, setHide] = useState([])
  const [count, setCount] = useState({
    currentPage: 1,
    todosPerPage: 10,
  })
  useEffect(() => {}, [])

  console.log(count)
  return (
    <>
      <div className="upper-box">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? 'Remove English Words' : 'Show English Words'}
        </button>
        <div className="">
          Number Removed {hide.length}/{arabicEng.length}
        </div>
      </div>
      <div className="container">
        {arabicEng
          .slice(count.currentPage, count.currentPage + 10)
          .map((word, index) => {
            return (
              <div
                onClick={() => setHide((passHide) => [...passHide, index])}
                className={`box  ${hide.includes(index) ? 'hide' : ''}`}
                key={word.english + index}
              >
                <div
                  data-background-color="black"
                  data-tip={toggle ? word.english : ''}
                  className="arabic"
                >
                  {word.arabic}
                </div>
                <ReactTooltip place={'bottom'} />
              </div>
            )
          })}
      </div>
      <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={Math.floor(arabicEng.length / 10)}
        onPageChange={(event, data) => {
          if (data.activePage) {
            setCount((old) => {
              return {
                currentPage: +data.activePage,
                todosPerPage: 10,
              }
            })
          }
        }}
      />
    </>
  )
}
