import { useState, useEffect } from 'react'
import arabicEng from '../Data/araibicEng'
import ReactTooltip from 'react-tooltip'
export default function Home() {
  const [toggle, setToggle] = useState(true)
  const [hide, setHide] = useState([{ index: '' }])

  useEffect(() => {}, [])
  const getAllValues = Object.values(hide[0])
  console.log(getAllValues)
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Remove English Words' : 'Show English Words'}
      </button>
      <div className="container">
        {arabicEng.map((word, index) => {
          return (
            <div
              onClick={() => setHide((passHide) => [{ index: index }])}
              className={`box  ${getAllValues.includes(index) ? 'hide' : ''}`}
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
