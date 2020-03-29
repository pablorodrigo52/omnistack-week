import React, {useState} from 'react';
import Header from './Header';

function App() {
  let [counter, updateCounter] = useState(0); // immutable so i need "setState" to overlay the var..

  function incrementCounter()
  {
    updateCounter(counter++);
  }

  return (
    <div>
      <Header title="Contador">
        {counter}
      </Header>
      <button onClick={incrementCounter}> Incrementar </button>
    </div>
  );
}

export default App;
