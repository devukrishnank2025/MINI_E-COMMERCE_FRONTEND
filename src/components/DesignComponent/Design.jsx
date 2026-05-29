import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "../FormComponent/ProductForm.css"
import { addProduct } from '../../../Redux/features/productSlice';
import { useFormik } from "formik"
import { productValidationSchema } from "../../../Validation/ProjuctFormValidation"
import { ToastContainer, toast } from 'react-toastify';
import { UserValidation } from '../../../Validation/UserValidation';

function Design() {

  const [User, setUser] = useState({
    name: "", email: "", password: ""
  });

  const dispatch = useDispatch();

  const initialValues = {
    name: "", email: "", password: ""
  }

  const handleFormSubmit = async (e) => {
    const formData = new FormData();
    formData.append("name", User.name);
    formData.append("password", User.email);
    formData.append("password", User.password);
    toast(` 🥳 🥳${result.payload.message} 🎉`, { position: "top-center", autoClose: 5000 })
  };

  const { values, handleSubmit, setFieldValue, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: UserValidation,
    onSubmit: handleFormSubmit
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [e.target.name]: e.target.value })
    setFieldValue(name, value);
  };

  const Err = ({ field }) =>
    touched[field] && errors[field]
      ? <span className="text-[10px] text-rose-500 !mt-0.5 !ml-0.5 block">{errors[field]}</span>
      : null;

  return (
    <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center bg-gray-100 !px-4 overflow-y-auto !py-4">
      <div className="bg-white w-full max-w-4xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl md:h-[90%] my-auto">

        {/* Left Side — desktop only */}
        <ToastContainer />
        <div className="hidden md:flex w-[36%] h-full bg-gradient-to-b from-rose-600 via-rose-500 to-violet-600 flex-col !p-7">
          <div className="flex items-center !gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <span className="text-white font-bold text-sm tracking-widest">SMART BUY</span>
          </div>
          <div className="flex-1 float-animation flex justify-center items-center min-h-0">
            <img src="/images/imageRobo.webp" alt="AI Robot" className="w-44 max-h-full object-contain drop-shadow-2xl" />
          </div>
          <div className="flex flex-col !gap-2 shrink-0">
            <h1 className="text-white font-extrabold text-2xl leading-tight tracking-tight !m-0">
              Shop <span className="text-rose-200">smarter</span><br />with AI.
            </h1>
            <p className="text-white/60 text-xs leading-relaxed !m-0">
              Discover, compare, and find the perfect products — faster than ever.
            </p>
            <div className="flex items-center !gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#fda4af" className="!mr-0.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-white/50 text-[10px]">4.9 · 10k+ shoppers</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[64%] md:h-full flex flex-col justify-center !px-5 md:!px-8 !py-5 md:overflow-y-auto">

          {/* Mobile header */}
          <div className="flex md:hidden items-center justify-between !mb-4">
            <div className="flex items-center !gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-500 to-violet-600 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <span className="font-bold text-sm tracking-widest text-gray-800">SMART BUY</span>
            </div>
            <div className="flex items-center !gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#f43f5e">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="text-gray-400 text-[10px] !ml-1">4.9</span>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 !mb-0.5 !mt-0">User Log In.</h2>
          <p className="text-gray-400 text-xs !mb-3 !mt-0">Fill in the details below.</p>

          <form noValidate onSubmit={handleSubmit} className="flex flex-col !gap-1.5">
            <div className="flex w-full flex-col">
              <input
                type="text" name="name" value={User.name} onChange={handleChange} placeholder="Enter Your Name"
                className={`border rounded-lg !px-3 !mt-4 h-10 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                  ${touched.name && errors.name ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
              <Err field="name" />

              <input
                type="email" name="email" value={User.email} onChange={handleChange} placeholder="Enter Your Email"
                className={`border rounded-lg !px-3 !mt-4 h-10 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                  ${touched.email && errors.email ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
              <Err field="email" />

              <input
                type="password" name="password" value={User.password} onChange={handleChange} placeholder="Password"
                className={`border rounded-lg !px-3 !mt-4 h-10 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                  ${touched.password && errors.password ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
              <Err field="password" />

              {/* Forgot Password */}
              <div className="flex justify-end !mt-1.5">
                <a  className="text-[11px] text-rose-500 hover:underline">
                  Forgot password?
                </a>
              </div>

            </div>

            <button
              type="submit"
              className="!py-2.5 w-full !mt-3 bg-gradient-to-r from-rose-500 to-violet-600 hover:opacity-90 text-white rounded-lg text-xs font-semibold transition cursor-pointer tracking-wide">
              Log In
            </button>

            <button
              className="!py-2.5 !mt-5 w-full bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg text-xs font-semibold transition cursor-pointer tracking-wide">
              Create Account
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Design;