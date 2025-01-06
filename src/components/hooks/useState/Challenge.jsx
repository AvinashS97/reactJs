//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limition: Set a maxium and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter shouldincrement or decrement.

import '../Hooks.css'

const CounterChallenge = () => {
  return (
    <div className='container state-container'>
      <h1>useState Challenge</h1>
      <p>
        Count : <span> 0 </span>
      </p>

      <div>
        <label>
          Step:
          <input type='number' />
        </label>
      </div>

      <div className='grid-three-cols'>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default CounterChallenge
