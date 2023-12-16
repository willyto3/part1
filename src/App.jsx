import { useState } from 'react'

const Display = ({ counter }) => {
  return <div>{counter}</div>
}

const Button = ({ onSmash, text }) => {
  return <button onClick={onSmash}>{text}</button>
}
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <>
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    </>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons </div>
  }

  return <div>button press history: {props.allClicks.join(' ')}</div>
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    console.log('left after', updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    console.log('right before', right)
    const updatedRight = right + 1
    setRight(updatedRight)
    console.log('right after', updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <>
      <div>
        {left}
        <Button onSmash={handleLeftClick} text='Left'/>
        <Button onSmash={handleRightClick} text='Right'/>
        
        {right}
        <History allClicks={allClicks} />
        <p>total: {total}</p>
      </div>

      <div>
        <Display counter={counter} />
      </div>
      <Button handleClick={decreaseByOne} text='Minus' />
      <Button handleClick={setToZero} text='Zero' />
      <Button handleClick={increaseByOne} text='Plus' />

      <div>
        <h1>Gretings</h1>Gretings
        <Hello name='George' age={100} />
        <Hello name='Maya' age={26 + 10} />
        <Hello name='Willy' age={40} />
      </div>
    </>
  )
}

export default App
