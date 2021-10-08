import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions } from '../store/counter-slice'

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.showCounter)

  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div className={classes.counterButtonDiv}>
        <button onClick={incrementHandler}>Increase counter</button>
        <button onClick={decrementHandler}>Decrease counter</button>
        <button onClick={increaseHandler}>Increase By 5</button>
      </div>
    </main>
  )
}

export default Counter
