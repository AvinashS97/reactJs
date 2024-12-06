
export const State = () =>{
    let value = 0;

    const handleButtonClick= () => {
        value++;
        console.log(value);
    }

    return (
        <>
        <section className="main-div">
        <h1>{value}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </section>
        </>
    )
}