import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const Products = () => {

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 2499,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
            category: "Electronics",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 3999,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
            category: "Electronics",
        },
        {
            id: 3,
            name: "Running Shoes",
            price: 1999,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
            category: "Fashion",
        },
        {
            id: 4,
            name: "Cotton T-Shirt",
            price: 799,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
            category: "Clothing",
        },
        {
            id: 5,
            name: "Backpack",
            price: 1299,
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
            category: "Accessories",
        },
    ];

    const dispatch = useDispatch()

    const handleAddToCart = (prod) => {
        dispatch(addToCart(prod))
    }

    return (
        <div className=' px-20 py-10'>

            <h1 className=' text-2xl font-bold'>
                Products
            </h1>
            <div className=' grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    products.map((prod) => {
                        return (
                            <div key={prod.id} className='h-fit p-3 flex flex-col gap-3.5 bg-yellow-50 overflow-hidden'>
                                <img className=' aspect-square h-1/2 w-full object-cover' src={prod.image} alt={prod.name} />
                                <h1>{prod.name}</h1>
                                <p>{prod.category}</p>
                                <p className=' text-xl font-bold'> ₹ {prod.price}</p>
                                <button onClick={() => handleAddToCart(prod)} className=' bg-orange-400 px-5 py-2 rounded-2xl'>Add To Cart</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Products