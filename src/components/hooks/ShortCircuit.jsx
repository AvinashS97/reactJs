// # V43- Short Circuit Evaluation

import "./Hooks.css";
import { useState } from "react";

const ShortCircuitExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
      {isLoggedIn && <p>You are logged in!</p>}

      {/* Another example of short circuit evaluation */}
      {user ? `Hello ${user}` : "Plz log in!"}

      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={() => setUser("Avinash")}>Set User</button>
        <button onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuitExample;
