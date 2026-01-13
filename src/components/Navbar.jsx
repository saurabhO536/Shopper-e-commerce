
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "./Context/ShopContext";
import { toast } from "react-toastify";
import { Button } from "./ui/button";


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalItem } = useContext(ShopContext);
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

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-[0px_1px_3px_-2px_black]">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-5 p-3">

        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <Link
            to="/"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold
                       bg-linear-to-r from-red-500 to-black
                       bg-clip-text text-transparent"
          >
            SHOPPER
          </Link>
        </div>

        {/* Menu */}
        <ul
          className="flex flex-col sm:flex-row flex-wrap
                     items-center justify-center gap-4 sm:gap-6 lg:gap-8"
          onClick={() => window.scrollTo(0, 0)}
        >
          {["shop", "mens", "womens", "kids"].map((item) => (
            <li
              key={item}
              onClick={() => setMenu(item)}
              className="text-lg sm:text-xl lg:text-2xl font-normal cursor-pointer flex flex-col items-center"
            >
              <Link
                to={item === "shop" ? "/" : `/${item}`}
                className="text-black no-underline"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              {menu === item && (
                <hr className="mt-1 h-0.75 w-[85%] rounded-full bg-blue-900" />
              )}
            </li>
          ))}
        </ul>

        {/* Cart + Auth */}
        <div className="flex flex-col sm:flex-row items-center gap-4 relative">

          {isLoggedIn && (
            <p className="text-sm sm:text-base">Welcome, {username}</p>
          )}

          {!isLoggedIn && (
            <Link to="/login">
              <Button className="w-35.5 h-11.5  border border-black bg-white text-black hover:bg-teal-300">
                Login
              </Button>
            </Link>
          )}

          {isLoggedIn && (
            <Button
              onClick={logout}
              className="w-37.5 h-12.5 rounded-full"
            >
              Logout
            </Button>
          )}

          <div className="relative">
            <Link to="/cart">
              <img src={cart_icon} alt="cart" className="w-8 h-8" />
            </Link>

            <div
              className="absolute -top-3 -right-3
                         h-5.5 w-5.5
                         bg-red-600 text-white
                         rounded-full flex items-center justify-center
                         text-sm font-extrabold"
            >
              {getTotalItem()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
