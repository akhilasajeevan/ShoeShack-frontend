import { adminInstance } from "../Axios/Axiosinstance";




export const getUserList = () => {
  return adminInstance.get('/users')
    .then(response => {
     
      return response;
    })
    .catch(error => {
      
      throw error;
    });
};





export const adminLogin = (values) => {
  return adminInstance.post("/adminlogin", values);
};
export const productadd = (values) => {
  return adminInstance.post("/productadd", values);
};
export const getproductlist = () => {
  return adminInstance.get("/productlist");
};
