  import * as Yup from "yup";
  
  export const productValidationSchema = Yup.object({
    name: Yup.string().trim().required("Product name is required").min(3, "Product name must be at least 3 characters"),
    brand: Yup.string().trim().required("Brand is required"),
    category: Yup.string().required("Please select a category"),
    price: Yup.number().typeError("Price must be a number").required("Price is required").positive("Price must be greater than 0"),
    discount: Yup.number().typeError("Discount must be a number").required("Discount is required").min(0, "Discount cannot be negative").max(100, "Discount cannot exceed 100"),
    rating: Yup.number().typeError("Rating must be a number").required("Rating is required").min(0, "Rating cannot be less than 0").max(5, "Rating cannot exceed 5"),
    purchased: Yup.number().typeError("Purchased count must be a number").required("Purchased count is required").min(0, "Purchased count cannot be negative"),
    description: Yup.string().trim().required("Description is required").min(10, "Description must be at least 10 characters"),
    image: Yup.mixed().required("Product image is required"),
  });
  