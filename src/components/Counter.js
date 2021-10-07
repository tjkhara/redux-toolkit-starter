import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)

  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggleCounter' })
  }

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', value: 5 })
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
