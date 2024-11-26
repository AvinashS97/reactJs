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



        {/* Function Component with named fns */}
        {/* <button onClick={handleClick}> Click Me</button> */}
        <br/>
        {/* Function component with named fns using fat arrow */}
        <button onClick={()=> handleClick(event) }>Click Me</button>
        </>
    )
}
// 14:42