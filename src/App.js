import { useState } from 'react';
import './App.css';
import CenterLayout from './Components/CenterLayout';
import Circle from './Components/Circle';
import DecreaseBtn from './Components/DecreaseBtn';
import IncreaseBtn from './Components/IncreaseBtn';
import Reset from './Components/Reset';

function App() {
  const [num2, setNum] = useState(0); 
 
  return (
    <div>
      <DecreaseBtn onClick={() => {
        setNum(num2 - 1)
      }}/>
      <Reset onClick3={() => {
        setNum(num2-num2)
      }}/>
      <IncreaseBtn onClick2={() => {
        setNum(num2 + 1)
      }}/>
     <CenterLayout>
      <div>
      <Circle value={num2}/>
      </div>
     </CenterLayout>
     
    </div>
  );
}

export default App;
