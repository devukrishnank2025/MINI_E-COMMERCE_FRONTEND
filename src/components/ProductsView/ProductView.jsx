import React, { useEffect, useState } from 'react'
import "./ProductView.css"
import { useDispatch, useSelector } from "react-redux";
import { readProduct, setCategory, setPageNo, setSort } from "../../../Redux/features/productSlice";
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../LoadingComponent/Loading';
const baseUrl = import.meta.env.VITE_API_URL
function ProductView() {

    const dispatch = useDispatch()
    let { products, totalPageNo, search, category, sort, pageNo, loading } = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(readProduct({ pageNo, search, sort, category }))
        console.log(pageNo, search, sort, category);
        
    }, [pageNo, search, sort, category])

    const onReset = () => {
        dispatch(setSort(""))
        dispatch(setCategory(""))
    }
    if(loading) {
    return <Loading/>
}

    return (
        <>
            <div className='w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row !gap-4 lg:!gap-6 !px-12 sm:!px-20 md:!px-8 lg:!px-6 !py-4 sm:!py-5 lg:!py-6'>

                {/* Sidebar */}
                <div className='w-full lg:w-[20%] lg:shrink-0'>
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 !p-4 sm:!p-5 lg:!p-6 lg:sticky lg:top-6'>

                        <h2 className='text-base font-bold text-gray-800 !mb-4 lg:!mb-6'>
                            Filters
                        </h2>

                        {/* Sort + Category row on mobile, stacked on desktop */}
                        <div className='flex flex-col sm:flex-row lg:flex-col !gap-4 lg:!gap-0'>

                            {/* Sort */}
                            <div className='flex-1 !mb-0 lg:!mb-5'>
                                <label htmlFor='sortselect' className='block text-xs font-semibold text-gray-500 uppercase tracking-wider !mb-2'>
                                    Sort By
                                </label>
                                <select
                                    onChange={(e) => dispatch(setSort(e.target.value))}
                                    value={sort}
                                    id='sortselect'
                                    name='sortselect'
                                    className='w-full !px-3 !py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition cursor-pointer'
                                >
                                    <option value='name'>Name</option>
                                    <option value='price_asc'>Price: Low to High</option>
                                    <option value='price_desc'>Price: High to Low</option>
                                </select>
                            </div>

                            {/* Category */}
                            <div className='flex-1 !mb-0 lg:!mb-6'>
                                <label htmlFor='categoryselect' className='block text-xs font-semibold text-gray-500 uppercase tracking-wider !mb-2'>
                                    Category
                                </label>
                                <select
                                    onChange={(e) => dispatch(setCategory(e.target.value))}
                                    value={category}
                                    id='categoryselect'
                                    name='categoryselect'
                                    className='w-full !px-3 !py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition cursor-pointer'
                                >
                                    <option value=''>All Categories</option>
                                    <option value='Electronics'>Electronics</option>
                                    <option value='Fashion'>Fashion</option>
                                    <option value='Accessories'>Accessories</option>
                                    <option value='Footwear'>Footwear</option>
                                    <option value='Books'>Books</option>
                                    <option value='Kitchen'>Kitchen</option>
                                </select>
                            </div>

                        </div>

                        <button
                            onClick={onReset}
                            className='w-full sm:w-auto lg:w-full !mt-4 lg:!mt-0 !py-2 !px-6 lg:!px-0 rounded-xl bg-gradient-to-r from-rose-500 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition cursor-pointer'
                        >
                            Remove Filter
                        </button>

                    </div>
                </div>

                {/* Product Grid */}
                <div className='flex-1'>

                    {/* Tagline */}
                    <div className='flex items-center !gap-2 !mb-4 lg:!mb-5'>
                        <div className='w-1 h-5 rounded-full bg-gradient-to-b from-rose-500 to-violet-600'></div>
                        <p className='text-xs sm:text-sm font-medium text-gray-400 !m-0'>
                            Discover, compare, and find the perfect products —{' '}
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600 font-semibold'>
                                faster than ever
                            </span>
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 !gap-4 lg:!gap-5'>

                        {products.map((product) => {

                            console.log(`https://mini-e-commerce-backend-jmh4.onrender.com/ProductImages/${product.image}`);
                            
                            const discountedPrice = Math.ceil(
                                (product.price * (100 - product.discount)) / 100



                            );
                            return (
                                <div
                                    key={product._id}
                                    className='bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group'
                                >
                                    {/* Image */}
                                    <div className='relative h-[160px] sm:h-[175px] lg:h-[185px] overflow-hidden'>
                                        <img
                                            src={`https://mini-e-commerce-backend-jmh4.onrender.com/ProductImages/${product.image}`}
                                            alt={product.name}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                        />

                                        {/* Discount badge */}
                                        <div className='absolute top-2 left-2 bg-white/90 text-rose-500 text-[11px] font-bold !px-2 !py-0.5 rounded-full shadow-sm'>
                                            {product.discount}% <span className='text-[9px]'>OFF</span>
                                        </div>

                                        {/* Action buttons */}
                                        <div className='absolute top-2 right-2 flex flex-col !gap-1.5'>
                                            <button onClick={()=> toast(`Thanks For Love ❤️❤️. Love You too 😍`, {position: "top-center",autoClose: 1000})} className='w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:bg-rose-500 hover:text-white transition'>
                                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-4 h-4'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 8.25c0-2.485-2.239-4.5-5-4.5-1.74 0-3.273.8-4 2.019C12.023 4.55 10.49 3.75 8.75 3.75c-2.761 0-5 2.015-5 4.5 0 7.22 9 12 9 12s9-4.78 9-12Z'/>
                                                </svg>
                                            </button>
                                            <button className='w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition'>
                                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-4 h-4'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12 18 19.5 12 19.5 2.25 12 2.25 12Z'/>
                                                    <circle cx='12' cy='12' r='3'/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className='!p-3 sm:!p-4'>
                                        <p className='text-[11px] font-bold uppercase tracking-widest text-rose-500 !mb-1'>
                                            {product.brand}
                                        </p>
                                        <h3 className='text-sm font-bold text-gray-800 truncate !mb-2'>
                                            {product.name}
                                        </h3>
                                        <div className='flex items-center !gap-1 !mb-3'>
                                            <span className='text-yellow-400 text-xs tracking-tight'>★★★★☆</span>
                                            <span className='text-gray-400 text-xs !ml-1'>{product.rating}</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-baseline !gap-1.5'>
                                                <span className='text-base font-extrabold text-gray-900'>₹{discountedPrice}</span>
                                                <span className='text-xs text-gray-400 line-through'>{product.price}</span>
                                            </div>
                                            <button className='w-9 h-9 rounded-xl bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-sm transition' onClick={()=> toast(`🛒: Product Added To Cart`, {position: "top-center",autoClose: 5000})}>
                                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='w-4 h-4'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386a1.5 1.5 0 011.455 1.136L5.74 7.5m0 0h12.795a1.5 1.5 0 001.455-1.136L20.25 3.75H5.74Zm0 0L7.5 15h9m-9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3Zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3Z'/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
             <ToastContainer />

            {/* Pagination */}
            <div className='flex flex-wrap items-center justify-center !gap-2 !py-6 sm:!py-8'>

                <button
                    disabled={pageNo === 0}
                    onClick={() => { if (pageNo > 0) dispatch(setPageNo(pageNo - 1)) }}
                    className={`!px-4 sm:!px-5 !py-2 rounded-xl text-sm font-medium border transition
                        ${pageNo === 0
                            ? 'border-gray-200 text-gray-300 bg-white cursor-not-allowed'
                            : 'border-gray-200 text-gray-600 bg-white hover:border-rose-400 hover:text-rose-500 cursor-pointer'
                        }`}
                >
                    ← Prev
                </button>

                <span
                    onClick={() => setPageNo(pageNo = pageNo - 1)}
                    className='w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-sm text-gray-500 hover:border-rose-400 hover:text-rose-500 cursor-pointer transition'
                >
                    {pageNo}
                </span>

                <span
                    onClick={() => setPageNo(pageNo = pageNo)}
                    className='w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-violet-600 text-white text-sm font-bold shadow-md cursor-pointer'
                >
                    {pageNo + 1}
                </span>

                <span
                    onClick={() => setPageNo(pageNo = pageNo + 1)}
                    className='w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-sm text-gray-500 hover:border-rose-400 hover:text-rose-500 cursor-pointer transition'
                >
                    {pageNo + 2}
                </span>

                <button
                    disabled={pageNo === totalPageNo - 1}
                    onClick={() => { if (totalPageNo > pageNo + 1) dispatch(setPageNo(pageNo + 1)) }}
                    className={`!px-4 sm:!px-5 !py-2 rounded-xl text-sm font-medium border transition
                        ${pageNo === totalPageNo - 1
                            ? 'border-gray-200 text-gray-300 bg-white cursor-not-allowed'
                            : 'border-gray-200 text-gray-600 bg-white hover:border-rose-400 hover:text-rose-500 cursor-pointer'
                        }`}
                >
                    Next →
                </button>

            </div>
        </>
    )
}

export default ProductView