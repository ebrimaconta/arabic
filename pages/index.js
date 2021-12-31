import { useState } from 'react'
import arabicEng from '../Data/araibicEng'
import ReactTooltip from 'react-tooltip'
export default function Home() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Showing English Words' : 'Remove English Words'}
      </button>
      <div className="container">
        {arabicEng.map((word) => {
          return (
            <div className="box" key={word.english}>
              <div data-tip={toggle ? word.english : ''} className="arabic">
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
