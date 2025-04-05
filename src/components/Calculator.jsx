import React, { useState } from 'react';
const Calculator = () => {
  const [input, setInput] = useState('');
  const display = (e) => {
    setInput(input + e.target.innerText);
  };
  const displayClear = () => {
    setInput('');
  };
  const result = () => {
    setInput(eval(input));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
        Calculator
      </h1>   
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-sm">
        <div className="mb-6">
          <div className="bg-gray-900 h-20 rounded-xl p-4 flex items-center justify-end overflow-x-auto">
            <span className="text-2xl font-mono text-white">{input || '0'}</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">1</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">2</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">3</button>
          <button onClick={display} className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold p-4 rounded-lg transition-colors">+</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">4</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">5</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">6</button>
          <button onClick={display} className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold p-4 rounded-lg transition-colors">-</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">7</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">8</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">9</button>
          <button onClick={display} className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold p-4 rounded-lg transition-colors">*</button>
          <button onClick={display} className="bg-gray-700 hover:bg-gray-600 text-white text-xl font-semibold p-4 rounded-lg transition-colors">0</button>
          <button onClick={result} className="bg-pink-600 hover:bg-pink-700 text-white text-xl font-semibold p-4 rounded-lg transition-colors">=</button>
          <button onClick={display} className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold p-4 rounded-lg transition-colors">/</button>
          <button onClick={displayClear} className="bg-red-600 hover:bg-red-700 text-white text-xl font-semibold p-4 rounded-lg transition-colors">C</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;