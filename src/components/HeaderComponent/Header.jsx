import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../../Redux/features/productSlice'

function Header() {
    const { search } = useSelector((state) => state.app)
    const dispatch = useDispatch()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="w-full h-20 bg-white shadow-md flex items-center justify-between !px-4 md:!px-8 relative">

           
            <Link to="/">
                <div className="text-3xl font-bold">
                    <span className="inline-block text-gray-900 !mr-1">SMART</span>
                    <span className="inline-block bg-gradient-to-r from-rose-500 to-purple-700 bg-clip-text text-transparent">Buy</span>
                </div>
            </Link>

            
            <div className="hidden md:flex flex-1 max-w-xl !mx-10">
                <input
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    type="text"
                    placeholder="Search products..."
                    className="w-full !px-4 !py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>

            
            <div className="hidden md:flex items-center gap-6">
                <button className="relative text-gray-700 hover:text-red-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.74 0-3.273.8-4 2.019-.727-1.219-2.26-2.019-4-2.019-2.761 0-5 2.015-5 4.5 0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>

                <button className="relative text-gray-700 hover:text-pink-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.455 1.136L5.74 7.5m0 0h12.795a1.5 1.5 0 001.455-1.136l1.01-4.039H5.74Zm0 0L7.5 15h10.5m-10.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3Zm10.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3Z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-purple-800 to-rose-500 text-white text-xs">2</span>
                </button>
            </div>

            <div className="hidden md:flex items-center gap-3 !ml-6">
                <Link to="/design">
                    <button className="inline-block !px-5 !py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Log In</button>
                </Link>
                <Link to="/addProduct">
                    <button className="inline-block !px-5 !py-2 bg-gradient-to-r from-purple-800 to-rose-500 text-white rounded-lg transition">+ Add Product</button>
                </Link>
            </div>

            
            <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>

        
            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-50 flex flex-col gap-4 !px-6 !py-5">
                    
                 
                    <input
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        type="text"
                        placeholder="Search products..."
                        className="w-full !px-4 !py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    
                    <div className="flex items-center gap-6">
                        <button className="relative text-gray-700 hover:text-red-500 transition flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.74 0-3.273.8-4 2.019-.727-1.219-2.26-2.019-4-2.019-2.761 0-5 2.015-5 4.5 0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <span className="text-sm text-gray-600">Wishlist</span>
                        </button>

                        <button className="relative text-gray-700 hover:text-pink-600 transition flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a1.5 1.5 0 011.455 1.136L5.74 7.5m0 0h12.795a1.5 1.5 0 001.455-1.136l1.01-4.039H5.74Zm0 0L7.5 15h10.5m-10.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3Zm10.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3Z" />
                            </svg>
                            <span className="text-sm text-gray-600">Cart</span>
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-purple-800 to-rose-500 text-white text-xs">2</span>
                        </button>
                    </div>

                  
                    <div className="flex flex-col gap-3">
                        <Link to="/design" onClick={() => setMenuOpen(false)}>
                            <button className="w-full !px-5 !py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Log In</button>
                        </Link>
                        <Link to="/addProduct" onClick={() => setMenuOpen(false)}>
                            <button className="w-full !px-5 !py-2 bg-gradient-to-r from-purple-800 to-rose-500 text-white rounded-lg transition">+ Add Product</button>
                        </Link>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Header