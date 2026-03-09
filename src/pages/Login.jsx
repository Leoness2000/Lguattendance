import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>LGU Attendance</h1>
        <p>Temporary login template (no validation).</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />

          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;