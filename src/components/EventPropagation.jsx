export const EventPropagation = () => {
    
    const handleGrandParent = () => {
        console.log("GrandParent Clicked");
        
    };
    
    const handleParentCick = () => {
        console.log("GrandParent Clicked");
        
    };
    
    const handleChildClick = (event) => {
        console.log(event);
        console.log("GrandParent Clicked");
    };
    
    
    
    
    return (
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentCick}>
                <button className="c-div" onClick={handleChildClick}> Child Div </button>
                </div>
            </div>
        </section>
    )
}

