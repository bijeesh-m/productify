import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

    const {count} = useSelector((state)=>state.cart)

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600">
                    Productify
                </h1>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 text-gray-600">
                    <a
                        href="#"
                        className="hover:text-blue-600 transition"
                    >
                        Home
                    </a>

                    <Link
                        to="/products"
                        className="hover:text-blue-600 transition"
                    >
                        Products
                    </Link>

                    <a
                        href="#"
                        className="hover:text-blue-600 transition"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="hover:text-blue-600 transition"
                    >
                        Contact
                    </a>
                    <Link
                        to="/cart"
                        className="hover:text-blue-600 relative transition"
                    >
                        Cart
                        <span className=" absolute flex justify-center items-center w-5 h-5 p-2 text-xs top-0 -right-5 rounded-full bg-amber-300">{count}</span>
                    </Link>

                    
                </div>

                {/* Login Button */}
                <Link to="/register">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;