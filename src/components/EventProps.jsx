export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert (`Hey,${user}`);
    };

    const handleHover = (user) => {
        alert ("Hey, Hovered!!!");
    };


    return(
        <>
            <WelcomeUser 
                onClick={() => HandleWelcomeUser("Avinash")} onMouseEnter={handleHover} 
            />
        </>
    )
}

const WelcomeUser = (props) =>{
    
    return (
        <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}