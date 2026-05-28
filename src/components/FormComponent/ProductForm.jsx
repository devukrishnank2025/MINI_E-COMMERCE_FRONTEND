import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./ProductForm.css"
import { addProduct } from '../../../Redux/features/productSlice';
import { useFormik } from "formik"
import { productValidationSchema } from "../../../Validation/ProjuctFormValidation"
import { ToastContainer, toast } from 'react-toastify';

function ProductForm() {

  const [product, setProduct] = useState({
    name: "", price: "", category: "", purchased: "",
    rating: "", discount: "", brand: "", image: null,
  });
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();


  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);



  const dispatch = useDispatch();


  const initialValues = {
    name: "", price: "", brand: "", description: "",
    discount: "", purchased: "", rating: "", category: ""
  }

  const handleFormSubmit = async (e) => {

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("discount", product.discount);
    formData.append("rating", product.rating);
    formData.append("purchased", product.purchased);
    formData.append("brand", product.brand);
    formData.append("description", product.description);
    formData.append("image", product.image);
    const result = await dispatch(addProduct(formData));

    toast(` 🥳 🥳${result.payload.message} 🎉`, { position: "top-center", autoClose: 5000 })
  };


  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };




  const { values, handleSubmit, setFieldValue, touched, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: productValidationSchema,
    onSubmit: handleFormSubmit
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [e.target.name]: e.target.value })
    setFieldValue(name, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue("image", file)
    setProduct({ ...product, image: e.target.files[0] })
    onSelectFile(e)
  };



  // helper — only show after field is touched
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
            <img src="/images/imageRobo.png" alt="AI Robot" className="w-44 max-h-full object-contain drop-shadow-2xl" />
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

          <h2 className="text-lg font-semibold text-gray-800 !mb-0.5 !mt-0">Add New Product.</h2>
          <p className="text-gray-400 text-xs !mb-3 !mt-0">Fill in the details below.</p>

          <form onSubmit={handleSubmit} className="flex flex-col !gap-1.5">

            <div className="grid grid-cols-2 !gap-x-2 !gap-y-1">

              {/* Name */}
              <div className="flex flex-col">
                <input
                  type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name"
                  className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                    ${touched.name && errors.name ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
                <Err field="name" />
              </div>

              {/* Brand */}
              <div className="flex flex-col">
                <input
                  type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Product Brand"
                  className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                    ${touched.brand && errors.brand ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
                <Err field="brand" />
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <select
                  name="category" value={product.category} onChange={handleChange}
                  className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 bg-white cursor-pointer transition
                    ${touched.category && errors.category ? 'border-rose-400 bg-rose-50 text-rose-400' : 'border-gray-200 focus:border-rose-400 text-gray-500'}`}>
                  <option value="" disabled>Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Audio">Audio</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home">Home</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Accessories">Accessories</option>
                </select>
                <Err field="category" />
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <input
                  type="text" name="price" value={product.price} onChange={handleChange} placeholder="Product Price"
                  className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                    ${touched.price && errors.price ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
                <Err field="price" />
              </div>

              {/* Discount */}
              <div className="flex flex-col">
                <input
                  type="text" name="discount" value={product.discount} onChange={handleChange} placeholder="Discount (%)"
                  className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                    ${touched.discount && errors.discount ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
                <Err field="discount" />
              </div>

              {/* Rating */}
              <div className="flex flex-col">
                <input
                  type="text" name="rating" value={product.rating} onChange={handleChange} placeholder="Rating (e.g. 4.5)"
                  className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                    ${touched.rating && errors.rating ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
                <Err field="rating" />
              </div>

              {/* Purchased — full width */}
              <div className="flex flex-col col-span-2">
                <input
                  type="text" name="purchased" value={product.purchased} onChange={handleChange} placeholder="No. Purchased"
                  className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 transition
                    ${touched.purchased && errors.purchased ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
                <Err field="purchased" />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <textarea
                name="description" value={product.description} onChange={handleChange}
                placeholder="Product Description" rows={2}
                className={`border rounded-lg !px-3 !py-2 text-xs outline-none focus:ring-1 focus:ring-rose-100 resize-none w-full transition
                  ${touched.description && errors.description ? 'border-rose-400 bg-rose-50' : 'border-gray-200 focus:border-rose-400'}`} />
              <Err field="description" />
            </div>

            {/* Image Upload + Preview */}
            <div className="flex items-center !gap-3">

              {/* File Input */}
              <div className="flex-1 flex flex-col">
                <label
                  className={`flex items-center !gap-2 border-2 border-dashed rounded-lg !px-3 !py-2 cursor-pointer transition
                    hover:border-rose-400 hover:bg-rose-50
                    ${touched.image && errors.image ? 'border-rose-400 bg-rose-50' : 'border-gray-200 bg-gray-50'}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={touched.image && errors.image ? 'text-rose-400' : 'text-gray-400'}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className={`text-xs truncate ${touched.image && errors.image ? 'text-rose-400' : 'text-gray-400'}`}>
                    {selectedFile ? selectedFile.name : 'Upload product image'}
                  </span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
                <Err field="image" />
              </div>


              {selectedFile && (
                <div className="relative shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-rose-200 shadow-md">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="!py-2.5 w-full bg-gradient-to-r from-rose-500 to-violet-600 hover:opacity-90 text-white rounded-lg text-xs font-semibold transition cursor-pointer tracking-wide">
              + Add Product
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductForm;