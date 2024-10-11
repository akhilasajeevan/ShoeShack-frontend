import "./Registration.css";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {Await,  Link } from "react-router-dom";
import { userRegister } from "../../../Services/userApi";

function Registration() {
  const initialValues = {
    username: "",
    Emailaddress: "",
    Password: "",
    confirmpassword: "",
    Phonenumber: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username required")
      .min(5, "Minimum 5 characters")
      .max(15, "Maximum 15 characters")
      .matches(
        /^[A-Za-z][A-Za-z]{4,14}$/,
        "Username should not include spaces or special characters"
      ),
    Emailaddress: yup
      .string()
      .email("Invalid email")
      .required("Email required")
      .matches(/[^\s@]+\.com$/, "Invalid email"),
    Password: yup
      .string()
      .required("Password required")
      .min(6, "Password must be more than 6 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one digit")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special symbol"
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords must match")
      .required("Please confirm your password"),
    Phonenumber: yup
      .string()
      .min(10, "minimum 10 digits required")
      .max(12, "phone number contains numbers only")
      .matches(/^[7-9]\d{9}$/, "That doesn't look like a phone number")
      .required("A phone number is required"),
  });

  // async function onSubmit(values) {
  //  const data= await  userRegister(values)
  //  console.log(data,"///////;;;;")
  // }
  
  async function onSubmit(values) {
    try {
        const data = await userRegister(values);
        if (data.data.status) {
            toast.success(data.data.message);
        } else {
            toast.error(data.data.message);
        }
    } catch (error) {
        toast.error("An error occurred during registration");
        console.log(error);
    }
}

 

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="Login3">
      <h1 style={{ marginRight: "100px" }}>SIGN UP</h1>
      <div className="Login4">
        <center>
          <form className="bor" onSubmit={formik.handleSubmit}>
            <br />
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-container">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Emailaddress" className="form-label">
                Email Address
              </label>
              <div className="input-container">
                <input
                  type="email"
                  className="form-control"
                  id="Emailaddress"
                  aria-describedby="emailHelp"
                  name="Emailaddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Emailaddress}
                />
                {formik.touched.Emailaddress && formik.errors.Emailaddress ? (
                  <div className="error">{formik.errors.Emailaddress}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Phonenumber" className="form-label">
                Phone Number
              </label>
              <div className="input-container">
                <input
                  type="tel"
                  className="form-control"
                  id="Phonenumber"
                  name="Phonenumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Phonenumber}
                />
                {formik.touched.Phonenumber && formik.errors.Phonenumber ? (
                  <div className="error">{formik.errors.Phonenumber}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <div className="input-container">
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  name="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Password}
                />
                {formik.touched.Password && formik.errors.Password ? (
                  <div className="error">{formik.errors.Password}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword" className="form-label">
                Confirm Password
              </label>
              <div className="input-container">
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  name="confirmpassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmpassword}
                />
                {formik.touched.confirmpassword &&
                formik.errors.confirmpassword ? (
                  <div className="error">{formik.errors.confirmpassword}</div>
                ) : null}
              </div>
            </div>

            <div className="button">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Link to="/login" className="link">
                Already have an account?
              </Link>
            </div>
          </form>
        </center>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Registration;





// import { ToastContainer, toast } from "react-toastify";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";
// import { userRegister } from "../../../Services/userApi";

// function Registration() {
//   const initialValues = {
//     username: "",
//     Emailaddress: "",
//     Password: "",
//     confirmpassword: "",
//     Phonenumber: "",
//   };

//   const validationSchema = yup.object().shape({
//     username: yup.string().required("Username required").min(5).max(15).matches(/^[A-Za-z][A-Za-z]{4,14}$/, "Username should not include spaces or special characters"),
//     Emailaddress: yup.string().email("Invalid email").required("Email required").matches(/[^\s@]+\.com$/, "Invalid email"),
//     Password: yup.string().required("Password required").min(6).matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[a-z]/, "Password must contain at least one lowercase letter").matches(/[0-9]/, "Password must contain at least one digit").matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special symbol"),
//     confirmpassword: yup.string().oneOf([yup.ref("Password"), null], "Passwords must match").required("Please confirm your password"),
//     Phonenumber: yup.string().min(10).max(12).matches(/^[7-9]\d{9}$/, "That doesn't look like a phone number").required("A phone number is required"),
//   });

//   async function onSubmit(values) {
//     try {
//       const data = await userRegister(values);
//       if (data.data.status) {
//         toast.success(data.data.message);
//       } else {
//         toast.error(data.data.message);
//       }
//     } catch (error) {
//       toast.error("An error occurred during registration.");
//       console.log(error);
//     }
//   }

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   return (
//     <div className="Login3">
//       <h1 style={{ marginRight: "100px" }}>SIGN UP</h1>
//       <div className="Login4">
//         <center>
//           <form className="bor" onSubmit={formik.handleSubmit}>
//             <br />
//             <div className="form-group">
//               <label htmlFor="username" className="form-label">Username</label>
//               <div className="input-container">
//                 <input type="text" className="form-control" id="username" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
//                 {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="Emailaddress" className="form-label">Email Address</label>
//               <div className="input-container">
//                 <input type="email" className="form-control" id="Emailaddress" aria-describedby="emailHelp" name="Emailaddress" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Emailaddress} />
//                 {formik.touched.Emailaddress && formik.errors.Emailaddress ? <div className="error">{formik.errors.Emailaddress}</div> : null}
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="Phonenumber" className="form-label">Phone Number</label>
//               <div className="input-container">
//                 <input type="tel" className="form-control" id="Phonenumber" name="Phonenumber" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Phonenumber} />
//                 {formik.touched.Phonenumber && formik.errors.Phonenumber ? <div className="error">{formik.errors.Phonenumber}</div> : null}
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="Password" className="form-label">Password</label>
//               <div className="input-container">
//                 <input type="password" className="form-control" id="Password" name="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Password} />
//                 {formik.touched.Password && formik.errors.Password ? <div className="error">{formik.errors.Password}</div> : null}
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
//               <div className="input-container">
//                 <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpassword} />
//                 {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className="error">{formik.errors.confirmpassword}</div> : null}
//               </div>
//             </div>

//             <div className="button">
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//             <div style={{ marginTop: "10px" }}>
//               <Link to="/login" className="link">Already have an account?</Link>
//             </div>
//           </form>
//         </center>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Registration;
