  import * as Yup from "yup";
  
  export const UserValidation = Yup.object({
    name: Yup.string().trim().required("User name is required").min(3, "Product name must be at least 3 characters"),
    email: Yup.string().trim().email("Enter a valid Email").required("Email is required"),
    password: Yup.string().required("Please Enter Your Password").min(8, "Password must be 8 characters"),
   
  });
  