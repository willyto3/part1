import { useState } from 'react'

import Note from './components/Note'

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

const App = ({ notes }) => {
  const [counter, setCounter] = useState(0)
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

  const result = notes.map((note) => note.id)
  console.log(result)

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          <li>{notes[0].content}</li>
          <li>{notes[1].content}</li>
          <li>{notes[2].content}</li>
        </ul>
      </div>

      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
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
