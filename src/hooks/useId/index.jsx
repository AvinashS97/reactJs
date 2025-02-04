import { useId } from "react";

export const UseId = () => {
    
    // const usernameId = useId();
    // const emailId = useId();
    // const passwordId = useId();

// By this you can avoid calling useId for every single element that needs a unique ID.
    const id = useId();

    return (
        <form>
            <div>
                <label htmlFor={id +"usernameId"}>Username</label>
                <input type="text" id={id +"usernameId"} name="name" />
            </div>
            <div>
                <label htmlFor={id +"passwordId"}>Password</label>
                <input type="Password" id={id +"passwordId"} name="Password" />
            </div>
            <div>
                <label htmlFor={id +"emailId"}>E-mail</label>
                <input type="email" id={id +"emailId"} name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
