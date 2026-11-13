import { useState } from 'react'
import './App.css'

function App() {
  const [input, setinput] = useState('')
  const [result, setresult] = useState('')

  const handleClick = (value) => {
    setinput((prevInput) => prevInput + value)
  }

  const handleClear = () => {
    setinput('')
    setresult('')
  }

  const handleCalculate = () => {
    if (input.trim() === '') {
      setresult('Error')
      return
    }

    try {
      setresult(eval(input))
    } catch {
      setresult('Error')
    }
  }

  return (
    <div className={"calculator"}>
      <h1>React Calculator</h1>
      <input readOnly type="text" value={input} />
      <div className={'result'}>{result}</div>
      <div className={'buttons-grid'}>
        <button onClick={() => {handleClick('7')}}>7</button>
        <button onClick={() => {handleClick('8')}}>8</button>
        <button onClick={() => {handleClick('9')}}>9</button>
        <button onClick={() => {handleClick('+')}}>+</button>

        <button onClick={() => {handleClick('4')}}>4</button>
        <button onClick={() => {handleClick('5')}}>5</button>
        <button onClick={() => {handleClick('6')}}>6</button>
        <button onClick={() => {handleClick('-')}}>-</button>

        <button onClick={() => {handleClick('1')}}>1</button>
        <button onClick={() => {handleClick('2')}}>2</button>
        <button onClick={() => {handleClick('3')}}>3</button>
        <button onClick={() => {handleClick('*')}}>*</button>

        <button onClick={handleClear}>C</button>
        <button onClick={() => {handleClick('0')}}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => {handleClick('/')}}>/</button>
      </div>
    </div>
  )
}

export default App
