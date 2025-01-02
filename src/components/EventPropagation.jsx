// V25 Event Propagation in React
// import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log('GrandParent Clicked')
  }

  const handleParentCick = () => {
    console.log('Parent Clicked')
  }

  const handleChildClick = event => {
    console.log(event)
    event.stopPropagation()
    console.log('Child Clicked')
  }

  //   example of default nature Event bubbling
  return (
    <section className='main-div'>
      <div className='g-div' onClickCapture={handleGrandParent}>
        {' '}
        {/*Capturing Phase*/}
        <div className='p-div' onClickCapture={handleParentCick}>
          {' '}
          {/*Capturing Phase*/}
          <button className='c-div' onClickCapture={handleChildClick}>
            {' '}
            Child Div{' '}
          </button>{' '}
          {/*Capturing Phase*/}
        </div>
      </div>
    </section>
  )
}
