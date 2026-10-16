import { useEffect } from "react";
import Navbar from "../components/Navbar";


const Home = () => {


  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const res = await fetch('https://dummyjson.com/products');
  //     const data = await res.json()
  //     console.log(data);
  //   }

  //   fetchData()
  // },[])

  const parentFun = () => {
    const parentVar = "This is parent variable";
    return () => {
      const childVar = "This is child variable"
      console.log(childVar, parentVar);
    }
  }


  const childFun = parentFun()
  childFun()


  return (
    <div className="min-h-screen bg-gray-50">



      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-200 font-medium mb-3">
              Welcome to MyStore
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Discover Products You’ll Love
            </h2>

            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Explore our collection of quality products at affordable
              prices. Find everything you need in one place.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Shop Now
              </button>

              <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Explore
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Shopping"
              className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Us?
          </h2>

          <p className="text-gray-500 mt-3">
            Everything you need for a great shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl mb-4">🚚</div>

            <h3 className="text-xl font-semibold mb-3">
              Fast Delivery
            </h3>

            <p className="text-gray-500">
              Get your products delivered quickly and safely.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl mb-4">🔒</div>

            <h3 className="text-xl font-semibold mb-3">
              Secure Payment
            </h3>

            <p className="text-gray-500">
              Your payments are protected with secure payment methods.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl mb-4">⭐</div>

            <h3 className="text-xl font-semibold mb-3">
              Quality Products
            </h3>

            <p className="text-gray-500">
              We provide high-quality products for our customers.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>

          <p className="text-gray-400 mb-8">
            Explore our latest products and find something perfect for you.
          </p>

          <button className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            View Products
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

          <p className="text-gray-500">
            © 2026 MyStore. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-blue-600">
              Privacy
            </a>

            <a href="#" className="hover:text-blue-600">
              Terms
            </a>

            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Home;