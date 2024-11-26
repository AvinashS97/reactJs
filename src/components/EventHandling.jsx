import "./EV.css"

export const EventHandling = () => {

    // function handleClick () {
    //     alert("Hey ! I am Event Handling ")
    // }

    //OR
    const handleClick = () =>{
        alert("Hey ! I am onClick Event Handling ")
    }

    return (
        <>
        <button onClick={handleClick}> Click Me</button>
        </>
    )
}