import { useState } from "react"

function Rating({ratingState}) {
    const [selected, setSelected] = useState(7)

    const handleSelect = (e) =>{
        setSelected(+e.currentTarget.value)
        ratingState(+e.currentTarget.value)
    }
  return (
    <>
      <ul className="rating">
        <li>
            <input type="radio" id="num1" name="rating" onChange={handleSelect} value='1' checked={selected === 1} />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" id="num2" name="rating" onChange={handleSelect} value='2' checked={selected === 1} />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" id="num3" name="rating" onChange={handleSelect} value='3' checked={selected === 1} />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" id="num4" name="rating" onChange={handleSelect} value='4' checked={selected === 1} />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" id="num5" name="rating" onChange={handleSelect} value='5' checked={selected === 1} />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input type="radio" id="num6" name="rating" onChange={handleSelect} value='6' checked={selected === 1} />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input type="radio" id="num7" name="rating" onChange={handleSelect} value='7' checked={selected === 1} />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input type="radio" id="num8" name="rating" onChange={handleSelect} value='8' checked={selected === 1} />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input type="radio" id="num9" name="rating" onChange={handleSelect} value='9' checked={selected === 1} />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input type="radio" id="num10" name="rating" onChange={handleSelect} value='10' checked={selected === 1} />
            <label htmlFor="num10">10</label>
        </li>
      </ul>
    </>
  )
}

export default Rating

