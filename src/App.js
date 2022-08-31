import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './components/Popup';

function App() {
 const [pop,setPop] = useState(false);
  console.log(pop);
  return (
    <div className="App">
      <button onClick={() => setPop(true)}>Save segment</button>
      {
        pop && <Popup/>
      }  
    </div>
  );
}

export default App;
