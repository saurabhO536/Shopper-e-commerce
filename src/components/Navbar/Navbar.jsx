import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { toast } from 'react-toastify'

const Navbar = () => {

  let[menu,setMenu] = useState("Shop")

  let {getTotalItem} = useContext(ShopContext);
  
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("username");

    if (loggedIn) {
      setIsLoggedIn(true);
      setUsername(storedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    setIsLoggedIn(false);
    setUsername("");
    toast.info("Logged out successfully");

    navigate("/login");
  };

  // const isLoggedIn = localStorage.getItem("isLoggedIn");

  // const logout = () => {
  //   localStorage.removeItem("isLoggedIn"); // 👈 remove login
  //   navigate("/login");
  // };

  return (
  <>
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <Link to={'/'} className='name' style={{textDecoration:"none"} }>SHOPPER </Link>
      </div>
      <ul className='nav-list' onClick={()=>window.scrollTo(0,0)}>
        <li onClick={()=>setMenu("shop")}><Link to={'/'} style={{textDecoration:"none", color: "black"} }>Shop </Link>{menu==="shop" ? <hr/> : <> </>} </li>
        <li onClick={()=>setMenu("mens")}> <Link to={'/mens'} style={{textDecoration:"none", color: "black"}}>Men</Link> {menu==="mens" ? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("womens")}> <Link to={'/womens'} style={{textDecoration:"none", color: "black"}}>Women</Link> {menu==="womens" ? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("kids")}> <Link to={'/kids'} style={{textDecoration:"none", color: "black"}}>Kids</Link> {menu==="kids" ? <hr/> : <></>}</li>
      </ul>

      <div className='nav-cart'>
        {isLoggedIn && <p >Welcome, {username}</p>}
        {!isLoggedIn && (
        <Link to={'/login'}><button>Login</button></Link>
        )}
        {isLoggedIn && (
        <button onClick={logout}>Logout</button>
        )}
        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalItem()}</div>
      </div>

    </div>
    </>
  )
}

export default Navbar