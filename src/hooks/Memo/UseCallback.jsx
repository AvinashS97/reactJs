const Button = ({ onClick, children}) => {
    console.log(`Rendering button: ${children}`);

    return (
        <button className={`mb-4 px-5 py-2 text-black ${children === "Increment" ? "bg-green-400"}`} onClick = {onClick}>
            {children}
        </button>
    )
    
}