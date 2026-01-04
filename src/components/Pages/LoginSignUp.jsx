// import React from 'react'
// import '../Pages/Css/LoginSignUp.css'

// const LoginSignUp = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Enter Your Name'/>
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder='Password' />
//         </div>
//         <button>continue</button>
//         <p className="loginsignup-login">Already have an account</p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" required/>
//           <p>by continuing, i agree to term of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignUp


// import React, { useState } from 'react'
// import '../Pages/Css/LoginSignUp.css'

// const LoginSignUp = () => {

//   const [state, setState] = useState('Login')
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   })

//   // ✅ Handle input change
//   const changeHandler = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   // ✅ LOGIN API CALL
//   const login = async () => {
//     console.log("Login function executed", formData)
//     try {
//       const response = await fetch("http://localhost:4000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         })
//       })

//       const data = await response.json()
//       console.log("Login API response:", data)

//       if (data.success) {
//         alert("Login successful!")
//         localStorage.setItem("auth-token", data.token);
//          window.location.replace('/')
//       } else {
//         alert(data.message || "Invalid login details")
//       }
//     } catch (error) {
//       console.error("Login error:", error)
//       alert("Something went wrong! Please try again.")
//     }
//   }

//   // ✅ SIGNUP API CALL
//   const signup = async () => {
//     console.log("SignUp function executed", formData)
//     try {
//       const response = await fetch("http://localhost:4000/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name: formData.username,
//           email: formData.email,
//           password: formData.password
//         })
//       })

//       const data = await response.json()
//       console.log("Signup API response:", data)

//       if (data.success) {
//         alert("Signup successful!")
//         localStorage.setItem("auth-token", data.token)


//       } else {
//         alert(data.errors || "Signup failed!")
//       }

//     } catch (error) {
//       console.error("Signup error:", error)
//       alert("Something went wrong! Please try again.")
//     }
//   }

//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>{state}</h1>

//         <div className="loginsignup-fields">
//           {state === "Sign Up" && (
//             <input
//               name='username'
//               value={formData.username}
//               onChange={changeHandler}
//               type="text"
//               placeholder='Your name'
//               required
//             />
//           )}
//           <input
//             name='email'
//             value={formData.email}
//             onChange={changeHandler}
//             type="email"
//             placeholder='Email Address'
//             required
//           />
//           <input
//             type="password"
//             name='password'
//             value={formData.password}
//             onChange={changeHandler}
//             placeholder='Password'
//             required

//           />
//         </div>

//         <button onClick={() => state === "Login" ? login() : signup()}>
//           Continue
//         </button>

//         <p className='loginsignup-login'>
//           {state === "Login" ? "Don't have an account?" : "Already have an account?"}
//         </p>
//         <span
//           onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
//         >
//           {state === "Login" ? "Sign Up here" : "Login here"}
//         </span>

//         <div className="loginsignup-agree">
//           <input type="checkbox" />
//           <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignUp


import React, { useState } from "react";
import "../Pages/Css/LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoginSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!agree) {
      toast.error("Please accept the Terms of Use & Privacy Policy");
      return; // 🚫 stop login
    }

    setLoading(true); // 🔄 start spinner

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", email.split("@")[0]);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      alert("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">


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
          <p className="loginsignup-login">
            Don’t have an account?
            <span onClick={() => navigate("/signup")}> Sign up here</span>
          </p>

          <div className="loginsignup-agree">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
