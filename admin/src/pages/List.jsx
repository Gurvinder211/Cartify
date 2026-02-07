import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';  
import { toast } from 'react-toastify';
import { currency } from '../App';

const List = ({token}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
     try {
     
       const response = await axios.get(backendUrl + "/api/product/list", {headers: {token}});
       if (response.data.success) {
       setList(response.data.products);

       } else {
            toast.error(response.data.message);
       }
     } catch (error) {
        console.log(error);
        toast.error(error.message);
     }
  }

  const removeProduct = async (id) => {
      try {

        const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}});
        if (response.data.success) {
           toast.success(response.data.message);
           await fetchList();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
         console.log(error);
         toast.error(error.message);
      }
  }

  useEffect(() => {
      fetchList();
  }, [])
  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        {/* -------- List Table Title -------- */}

        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-xs sm:text-sm">
          <b>Image</b> 
          <b>Name</b>
          <b className=" ">Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* -------- Product List -------- */}
        {
          list.map((item, index) =>(
              <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-xs sm:text-sm border' key={index}>
                 <img src={item.image[0]} alt={item.name} className="w-12 h-10 object-cover" />
                 <p>{item.name}</p>
                 <p>{item.category}</p>
                 <p>{currency}{item.price}</p>
                 <p onClick={() => removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg sm:text-center">X</p>

              </div>
         
          ))

        }
      </div>
    </>
  )
}

export default List
