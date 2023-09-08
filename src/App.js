import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateBloodAlcoholLevel = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let bloodAlcoholLevel = 0;

    if (gender === 'male') {
      bloodAlcoholLevel = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      bloodAlcoholLevel = gramsLeft / (weight * 0.6);
    }
    if (bloodAlcoholLevel < 0) {
      bloodAlcoholLevel = 0;
    }

    setResult(bloodAlcoholLevel.toFixed(2));
  };

  return (
    <div id="container">
      <h1>Calculating Alcohol Blood level</h1>
      <form>
        <div>
          <label>Weight (kg)</label>
          <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" id="bottles" value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label>Time (hr)</label>
          <input type="number" id="time" value={time} onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <label>Gender</label>
            <input type="radio" id="male" value="male" onChange={e => setGender(e.target.value)}/><label>Male</label> 
            <input type="radio" id="female" value="female"  onChange={e => setGender(e.target.value)}/><label>Female</label> 
        </div>
        {result && (<p>Blood Alcohol Level is: {result}</p>)}
        <button type="button" onClick={calculateBloodAlcoholLevel}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
