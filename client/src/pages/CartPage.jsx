import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQty } from "../features/cart/cartSlice";

const initialCartItems = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        quantity: 2,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 3999,
        quantity: 1,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1999,
        quantity: 1,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    },
    {
        id: 4,
        name: "Cotton T-Shirt",
        price: 799,
        quantity: 3,
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    },
    {
        id: 5,
        name: "Backpack",
        price: 1299,
        quantity: 1,
        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    },
];

const CartPage = ({ }) => {

    const cartItems = useSelector((state) => state.cart.items)

    const dispatch = useDispatch()

    const updateQuantity = (id, change) => {
        dispatch(updateQty({ id, change }))
    };

    const handleDeleteItem = (id) => {
        dispatch(removeFromCart(id))
    }

    const totalPrice = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    },[cartItems])
    

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-4xl">
                <div className=" flex justify-between">
                    <h1 className="mb-6 text-3xl font-bold text-gray-800">
                        My Cart
                    </h1>
                    <h1 className=" font-bold text-2xl">
                        Total Price :₹ {totalPrice.toLocaleString()}
                    </h1>
                </div>

                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm sm:gap-6"
                        >
                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-24 w-24 rounded-lg object-cover sm:h-28 sm:w-28"
                            />

                            {/* Product Details */}
                            <div className="min-w-0 flex-1">
                                <h2 className="text-base font-semibold text-gray-800 sm:text-lg">
                                    {item.name}
                                </h2>

                                <p className="mt-2 text-lg font-bold text-indigo-600">
                                    ₹{item.price.toLocaleString("en-IN")}
                                </p>

                                {/* Quantity Buttons */}
                                <div className="mt-3 flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">
                                    <button
                                        onClick={() => updateQuantity(item.id, "dec")}
                                        disabled={item.quantity === 1}
                                        className="px-3 py-1.5 text-lg hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        −
                                    </button>

                                    <span className="min-w-10 text-center font-semibold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => updateQuantity(item.id, "inc")}
                                        className="px-3 py-1.5 text-lg hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleDeleteItem(item.id)} className=" bg-red-600 rounded-xl px-7 py-3 text-white">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
