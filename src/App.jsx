import './App.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
function App() {
  
  const[Amount,setAmount]=useState(0);
  const[Year,setYear]=useState(0);
  const[Rate,setRate]=useState(0);


const[Interest,setInterest]=useState(0);

console.log(Amount,Year,Rate);
const calculate=(e)=>{
  const output =Amount*Year*Rate/100
  setInterest(output)
}
const reset=(e)=>{
  setAmount(0)
  setYear(0)
  setRate(0)
  setInterest(0)
}
  return (
    <div className="App">
<div className="container">
  <h1>Welcome to our Simple Interest website!</h1>
  <p>Calculate the world of Simple Interest with us</p>

<div className="total">
  <h2>&#8377;{Interest}</h2>
  <p>Your Total Interest</p>
</div>
<div className="form">
  <form>
    <div className="input">
    <TextField id="outlined-basic" label="Amount" variant="outlined" value={Amount||""} onChange={(e)=>setAmount(e.target.value)} />
    <TextField id="outlined-basic" label="Year" variant="outlined"value={Year||""}  onChange={(e)=>setYear(e.target.value)}  />
    <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" value={Rate||""}  onChange={(e)=>setRate(e.target.value)}  />
    </div>
  </form>
</div>
<div className="button">
<Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button> 
<Button variant="contained" onClick={e=>reset(e)}>Reset  </Button>
</div>
</div>
    </div>
  );
}

export default App;
