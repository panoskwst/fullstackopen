import { useState } from 'react'
const Header =() =>{
  return(
  <h1>
    give feedback
  </h1>
  )
}
const Button =({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad, total, avg, perc}) => {
  if (total === 0){
    return(
      <>
      <p>
        No feedback given
      </p>
      </>
    )
  }
  return(
  <div>
    <h1>
      Statistics
    </h1>
    <table>
      <tbody>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='average' value={avg} />
        <StatisticsLine text='positive' value={perc} />
      </tbody>
    </table>
  </div>
  )
}

const StatisticsLine = ({text, value}) =>{
  return(
    <>
    <tr>
    <td>
      {text}
    </td>
    <td>
    {value}
    </td>
    </tr>
    </>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)
  const[perc, setPerc] = useState(0)

  const handleGood = () =>{
    const updateGood = good + 1
    setGood(updateGood)
    const updateTotal = updateGood+neutral+bad
    setTotal(updateTotal)
    setAvg((updateGood + 0 - bad) / updateTotal)
    setPerc((updateGood * 100) /updateTotal) 
    console.log(updateTotal)
  }
  const handleNeutral = () =>{
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    const updateTotal = good + updateNeutral + bad
    setTotal(updateTotal)
    setAvg((good + 0 + bad)/ updateTotal)
    setPerc((good * 100 ) / updateTotal)
    console.log(updateNeutral)
  }
  const handleBad = () =>{
    const updateBad = bad + 1
    setBad(updateBad)
    const updateTotal = good + neutral + updateBad
    setTotal(updateTotal)
    setAvg((good + 0 - updateBad )/ updateTotal)
    setPerc((good *100) / updateTotal)
    console.log(updateBad)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} avg={avg} perc={perc} />

    </div>
  )
}

export default App