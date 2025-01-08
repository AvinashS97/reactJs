import "../Hooks.css";

const ControlledForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="container state-container">
            <h1>Un-Controlled Component</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input id="inputName" name="name" type="text" />
                </label> <br />

                <button type="submit" className="state-button">Submit</button>
            </form>
        </section>
    );

};

export default ControlledForm;