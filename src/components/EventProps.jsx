export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert (`Hey,${user}`);
    };

    const handleHover = () => {
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
    const {onClick, onMouseEnter }= props;
    const handleGreeting = () => {
        console.log(`Hey User, Welcome`);
        onClick();
        
    }

    return (
        <>
        <button onClick={onClick}>Click</button> <br/>
        <button onMouseEnter={onMouseEnter}>Hover Me</button> <br/> 
        <button onClick={handleGreeting}>Greeting</button> <br/>
        </>
    )
}

// 06:50