import { useState } from 'react'
import './App.css'
import Header from "headerApp/Header";
import {useSelector, useDispatch} from 'store/store';
import {increment, decrement  } from 'store/slice';

function App() {
  const [count, setCount] = useState(0);
  const stateCount = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <h1>Host</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        State counter value: {stateCount}
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
