

// import React from "react";
// import "./Addproduct.css";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import axios from "axios";

// function AddProduct() {
//   const initialValues = {
//     productName: "",
//     description: "",
//     price: "",
//     category: "",
//     imageFile: null,
//   };

//   const validationSchema = yup.object().shape({
//     productName: yup.string().required("Product name required"),
//     description: yup.string().required("Description required"),
//     price: yup
//       .number()
//       .required("Price required")
//       .positive("Price must be positive"),
//     category: yup.string().required("Category required"),
//     imageFile: yup.mixed().required("Image required"),
//   });

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: (values) => {
      
//       axios
//         .post("http://localhost:4000/admin/productadd", values)
//         .then((res) => console.log(res));
//       // console.log(values);
//     },
//   });

//   return (
//     <div className="add-product">
//       <div className="form-heading">
//         <h2>Add New Product</h2>
//       </div>
//       <div className="form-container-add">
//         <form onSubmit={formik.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="productName" className="form-label">
//               Product Name
//             </label>
//             <input
//               type="text"
//               id="productName"
//               name="productName"
//               className="form-control"
//               value={formik.values.productName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.productName && formik.errors.productName ? (
//               <div className="form-error">{formik.errors.productName}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="description" className="form-label">
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               className="form-control"
//               value={formik.values.description}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.description && formik.errors.description ? (
//               <div className="form-error">{formik.errors.description}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="price" className="form-label">
//               Price
//             </label>
//             <input
//               type="text"
//               id="price"
//               name="price"
//               className="form-control"
//               value={formik.values.price}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.price && formik.errors.price ? (
//               <div className="form-error">{formik.errors.price}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="category" className="form-label">
//               Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               className="form-control"
//               value={formik.values.category}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             >
//               <option value="" label="Select category" />
//               <option value="Boot" label="Mens" />
//               <option value="Sneakers" label="Womens" />
//               <option value="Ballerina flats" label="kids" />
//             </select>
//             {formik.touched.category && formik.errors.category ? (
//               <div className="form-error">{formik.errors.category}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="imageFile" className="form-label">
//               Image
//             </label>
//             <input
//               type="file"
//               id="imageFile"
//               name="imageFile"
//               className="form-control"
//               onChange={(event) => {
//                 formik.setFieldValue("imageFile", event.currentTarget.files[0]);
//               }}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.imageFile && formik.errors.imageFile ? (
//               <div className="form-error">{formik.errors.imageFile}</div>
//             ) : null}
//           </div>

//           <button type="submit" className="form-btn">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;







import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function AddProduct() {
  const initialValues = {
    productName: '',
    description: '',
    price: '',
    category: '',
    imageFile: null,
  };

  const validationSchema = yup.object().shape({
    productName: yup.string().required('Product name required'),
    description: yup.string().required('Description required'),
    price: yup.number().required('Price required').positive('Price must be positive'),
    category: yup.string().required('Category required'),
    imageFile: yup.mixed().required('Image required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('productName', values.productName);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('category', values.category);
      formData.append('imageFile', values.imageFile);

      axios.post('http://localhost:4000/admin/productadd', formData)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    },
  });

  return (
    <div className="add-product">
      <div className="form-heading">
        <h2 style={{color:"brown"}}>Add New Product</h2>
      </div>
      <div className="form-container-add">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="form-control"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productName && formik.errors.productName ? (
              <div className="form-error">{formik.errors.productName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="form-error">{formik.errors.description}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              className="form-control"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="form-error">{formik.errors.price}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              id="category"
              name="category"
              className="form-control"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select category" />
              <option value="mens" label="Mens" />
              <option value="Womens" label="Womens" />
              <option value="Kids" label="Kids" />
            </select>
            {formik.touched.category && formik.errors.category ? (
              <div className="form-error">{formik.errors.category}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="imageFile" className="form-label">Image</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              className="form-control"
              onChange={(event) => {
                formik.setFieldValue('imageFile', event.currentTarget.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.imageFile && formik.errors.imageFile ? (
              <div className="form-error">{formik.errors.imageFile}</div>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

