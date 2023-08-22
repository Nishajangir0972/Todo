import React, {useState} from 'react'

function Bmi() {
const [height , setHeight] = useState("")
const [weight , setWeight] = useState("")
const [result , setResult] = useState("")

function Calculation(){
setResult(Math.floor((weight*100*100)/(height*height)))
setHeight()
setWeight()
}
  return (
    <>
    <div>
<h1>Calculate BMI</h1>
<label htmlFor="">Height(in cm)</label>
<input type="number" name='' id='' value={height} onChange={(e) => setHeight(e.target.value)}/>

<label htmlFor="Weight">Weight(in kg)</label>
<input type="number" name='' id='' value={weight} onChange={(e) => setWeight(e.target.value)}/>

<button onClick={Calculation}>Calculation</button>
    </div>
    <div className="result">
        <h2>Your BMI :  {result}</h2>
    </div>
</>

  )
}

export default Bmi