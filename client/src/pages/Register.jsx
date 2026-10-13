import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        mob: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch("http://localhost:5000/register",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: { "Content-Type": "application/json" }
                })

            const data = await res.json()

            console.log(data);


        } catch (error) {
            console.log(error.message);
        }


        console.log("Form Data:", formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Register
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Welcome back! Please Register to your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Mob */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mob
                        </label>

                        <input
                            type="tel"
                            name="mob"
                            value={formData.mob}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
              outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Register */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg
            font-semibold hover:bg-blue-700 transition"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center text-gray-600 text-sm mt-6">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-600 font-semibold">
                        Register
                    </a>
                </p>

            </div>
        </div>
    );
};

export default Register;
