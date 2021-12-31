import arabicEng from '../Data/araibicEng'
import ReactTooltip from 'react-tooltip'
export default function Home() {
  return (
    <div className="container">
      {arabicEng.map((word) => {
        return (
          <div className="box" key={word.english}>
            <div data-tip={word.english} className="arabic">
              {word.arabic}
            </div>
            <ReactTooltip place={'bottom'} />
          </div>
        )
      })}
    </div>
  )
}
