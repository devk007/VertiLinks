import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center max-w-2xl">
          <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Go to Homepage
            </Link>
            <Link to="/products" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
              View Products
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
