import "./EV.css"

export const EventHandling = () => {

    // function handleClick () {
    //     alert("Hey ! I am Event Handling ")
    // }

    //OR
    const handleClick = (event) =>{
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey ! I am onClick Event Handling ")
    }

    return (
        <>

        {/* //? Function Component with named fns */}
        {/* <button onClick={handleClick}> Click Me</button> */}
        {/* //* Here in the above line we haven't call hanldleClick function we have just pass the reference of it. */}
        <br/>
        {/* //? Function component with named fns using fat arrow */}
        {/* //* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, 
        //* React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
        <button onClick={()=> handleClick(event)}>Click Me</button>
        <br />
        {/* //* Inline Event Handlers */}
        <button onClick={(event) => console.log(event)}>Inline fns</button>
        {/* //* Function Component with Inline Arrow fns */}
        <button onClick={() => alert("Hey I am Inline Arrow Fns")}>Inline Arrow function</button>


        </>
    )
}
// 18:21