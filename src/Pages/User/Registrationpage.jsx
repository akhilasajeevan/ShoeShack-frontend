import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
function Registrationpage() {
//   return (
//     <div>
      const initialValues={
    username:"",
    Emailaddress:"",
    Password:"",
    Phonenumber:"",
  }

  const validationSchema = yup.object({
    username:yup.string().trim('error').required('user name required').min(3,"minimum 3 charecters ").max(15,"maximum 15 charecters"),
    Emailaddress:yup.string().email("type email").required('email required'),
    Password:yup.string().required("password required").min(5,"minimum 5 charecters").max(8,"maximum 8 charecters"),
  Phonenumber:yup.string().min(10,"10 digits required").max(10,"10 digits needed")
  })
  
 async function onSubmit(values){console.log(values)}

 const formik=useFormik({
      validationSchema,
      onSubmit,
      initialValues,
      });

  return (
    <div className='Login1'>
      <div className='Login2'>
      <center>
      <form className='bor'>
        <br/>
  <div class="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="Text"  class="form-control"id="exampleInputPassword1"style={{width:300}}
     name='username'
     onChange={formik.handleChange} 
     onBlur={formik.handleBlur}
     value={formik.values.username}
      />
    {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  style={{width:300}} name='Emailaddress' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Emailaddress}/>
    {formik.touched.Emailaddress && formik.errors.Emailaddress ? (
          <div className="error">{formik.errors.Emailaddress}</div>
        ) : null}
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" style={{width:300}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phonenumber</label>
    <input type="tel" class="form-control" id="exampleInputPassword1" style={{width:300}} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
  
</form>
</center>
</div>
    </div>
  )

    

}

export default Registrationpage
