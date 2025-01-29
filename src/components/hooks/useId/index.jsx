import { useId } from "react"

export const UseId = () => {
    useId

    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="name" />
            </div>
            <div>
                <label htmlFor="e-mail">E-mail</label>
                <input type="email" id="e-mail" name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

// 04:03