import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './components/Popup';


function App() {
 const [pop,setPop] = useState(false);
  //console.log(pop);
  return (
    <div className="App">
      <button className="outline-light" onClick={() => setPop(true)}>Save segment</button>
      {
        pop && <Popup pop={setPop}/>
      }  
    </div>
  );
}

export default App;
