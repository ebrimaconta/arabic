import { useState, useEffect } from 'react'
import arabicEng from '../Data/araibicEng'
import ReactTooltip from 'react-tooltip'
export default function Home() {
  const [toggle, setToggle] = useState(true)
  const [hide, setHide] = useState([])

  useEffect(() => {}, [])

  console.log(hide)
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Remove English Words' : 'Show English Words'}
      </button>
      <div className="container">
        {arabicEng.map((word, index) => {
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
    </>
  )
}
