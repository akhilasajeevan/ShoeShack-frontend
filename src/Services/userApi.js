import {userInstance} from "../Axios/Axiosinstance"
import axios from "axios"
export const userRegister=(values) => {
    // console.log(values)
    return userInstance.post("/signup",{...values})

}

export const userLogin = (values) => {
    return userInstance.post("/login", { ...values });
};


export const authenticatedRequest =async(method,url,data)=>{
const token=localStorage.getItem('token');
const config={
    headers:{Authorization:token}};

return await axios({method,url,data,...config});

};
export const getproducts = () => {
    return userInstance.get('/products');
  };
  
  export const getProductById=(id)=>{

    return userInstance.get(`/products/${id}`)
  }


  export const addtocart=(productId,userId)=>{

    return userInstance.post(`/addtocart/${productId}/${userId}`)
  }
 
  export const addtowishlist=(productId,userId)=>{

    return userInstance.post(`/addtowishlist/${productId}/${userId}`)
  }


export const getcart = (userId) => {
  return userInstance.get(`/cart/${userId}`);
};
export const getwishlist = (userId) => {
  return userInstance.get(`/wishlist/${userId}`)
};

export const removecartitem = (userId, productId) => {
  return userInstance.delete(`/cart/remove/${userId}/${productId}`);
};


export const updatecartitem = (userId, productId, quantity) => {
  return userInstance.put(`cart/update/${userId}/${productId}`, { quantity });
};
