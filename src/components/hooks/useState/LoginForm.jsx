import "./index.css";

export const LoginForm = () => {
    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" />

                    <label htmlFor="password">password</label>
                    <input type="password" name="password" required autoComplete="off" />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};