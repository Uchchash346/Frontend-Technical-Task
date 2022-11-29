import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [useColor, setUseColor] = useState();
  return (
    <div className="App">
      <div className="container">
        <h3 className="pt-5">Please, write the color code or color name 😀</h3>
        <div class="input-group inputGroup-sizing-sm w-25 mx-auto">
          <input type="text" class="form-control color-input"
          placeholder="color code or color name"
          onChange={(e) => setUseColor(e.target.value)}
          aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        {/* <input
          className="color-input"
          placeholder="color code or color name"
          onChange={(e) => setUseColor(e.target.value)}
        /> */}
        <div className="user-color mx-auto mt-3" style={{ backgroundColor: useColor }} />
      </div>
    </div>
  );
}

export default App;
