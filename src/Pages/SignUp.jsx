import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Pages/Css/LoginSignUp.css";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!agree) {
      toast.error("Please accept the Terms of Use & Privacy Policy");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginsignup page-animation">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignup}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="loginsignup-agree">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Create Account"}
          </button>
        </form>

        <p className="loginsignup-login">
          Already have an account?
          <span onClick={() => navigate("/login")}> Login here</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
