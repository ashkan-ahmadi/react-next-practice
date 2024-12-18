import useCounter from '@/app/customHooks/useCounter'

export default function CounterCard() {
  const { count: count1, increment: increment1, decrement: decrement1, reset: reset1, initialValue: initialValue1 } = useCounter(10)

  const { count: count2, increment: increment2, decrement: decrement2, reset: reset2, initialValue: initialValue2 } = useCounter(5)

  return (
    <>
      <h2>Counter Cards</h2>
      <Card count={count1} increment={increment1} decrement={decrement1} reset={reset1} initialValue={initialValue1}></Card>
      <Card count={count2} increment={increment2} decrement={decrement2} reset={reset2} initialValue={initialValue2}></Card>
    </>
  )
}

function Card({ count, increment, decrement, reset, initialValue }) {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <p>
            Count: <strong>{count}</strong>
          </p>
          <button className="btn btn-primary m-2" onClick={increment}>
            + Increment
          </button>
          <button className="btn btn-primary m-2" onClick={decrement}>
            - Decrement
          </button>
          <button className="btn btn-primary m-2" onClick={reset}>
            Reset to {initialValue}
          </button>
        </div>
      </div>
    </>
  )
}
