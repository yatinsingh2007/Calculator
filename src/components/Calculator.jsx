import React,{useState} from 'react'
const Calculator = () => {
    const [input, setInput] = useState('')
    const display = (e) => {
        setInput(input + e.target.innerText)
    }
    const displayClear = () => {
        setInput('')
    }
    const result = () => {
        setInput(eval(input));
    }
  return (
    <>  
        <h1 className='text-center text-3xl text-white py-6'>Calculator</h1>
        <div className='flex justify-center align-center'>
            <div className='border-2 p-6 h-96 w-96 flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='border-2 h-20 w-72 text-white text-center overflow-scroll'>{input}</div>
                    <div>
                        <div className='text-white flex gap-12 py-3'>
                            <button className='border-2 p-3' onClick={display}>1</button>
                            <button className='border-2 p-3' onClick={display}>2</button>
                            <button className='border-2 p-3' onClick={display}>3</button>
                            <button className='border-2 p-3' onClick={display}>+</button>
                        </div>
                        <div className='text-white flex gap-12 py-3'>
                            <button className='border-2 p-3' onClick={display}>4</button>
                            <button className='border-2 p-3' onClick={display}>5</button>
                            <button className='border-2 p-3' onClick={display}>6</button>
                            <button className='border-2 p-3' onClick={display}>-</button>
                        </div>
                        <div className='text-white flex gap-12 py-3'>
                            <button className='border-2 p-3' onClick={display}>7</button>
                            <button className='border-2 p-3' onClick={display}>8</button>
                            <button className='border-2 p-3' onClick={display}>9</button>
                            <button className='border-2 p-3' onClick={display}>*</button>
                        </div>
                        <div className='text-white flex gap-12 py-3'>
                            <button className='border-2 p-3' onClick={display}>0</button>
                            <button className='border-2 p-3' onClick={result}>=</button>
                            <button className='border-2 p-3' onClick={display}>/</button>
                            <button className='border-2 p-3' onClick={displayClear}>C</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Calculator
