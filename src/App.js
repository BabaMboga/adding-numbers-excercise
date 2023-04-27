import React from 'react'

function App() {

  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [sum, setSum] = useState(0);

  const handleFirstNumChange = (e) => {
    setFirstNum(parseInt(e.target.value));
  };

  const handleSecondNumChange = (e) => {
    setSecondNum(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSum(firstNum + secondNum);
  }

  return (
    <div>
      <h1>ADDING TWO NUMBERS</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number 1:
          <input type="number" value={firstNum} onChange={handleFirstNumChange} />
        </label>
        <br />
        <label>
          Number 2:
          <input type="number" value={secondNum} onChange={handleSecondNumChange} />
        </label>
        <br />
        <button type="submit">Add Your Two Numbers</button>
      </form>
      <p>The sum is: {sum}</p>
    </div>
  )
}

export default App;