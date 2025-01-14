import "./index.css";

export const ContactForm = () => {
    return (
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" />

                    <label htmlFor="password">password</label>
                    <input type="password" name="password" required autoComplete="off" />

                    <label htmlFor="message">Message</label>

                    <textarea type="password" name="message" required autoComplete="off" rows="6" />
                </form>
            </div>
        </div>
    )
}