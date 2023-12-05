import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByUser } from './Redux/counterSlice';
import Todos from './todos';
import Category from './Category';

function App() {
  const count=useSelector(state=>state.counter.value)
const dispatch=useDispatch()

const handleIncrement=()=>{
  dispatch(increment())
}
const handleDecrement=()=>{
  dispatch(decrement())
}
const handleIncrementByUser=()=>{
  dispatch(incrementByUser(3))
}


  return (
    <div className="App">


      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementByUser}>Increment by User</button>



      <Todos/>

      <Category/>
    </div>
  );
}

export default App;
