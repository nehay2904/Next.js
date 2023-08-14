import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {getCategories} from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
      getCategories()
          .then((newCategories) =>  setCategories(newCategories))
  }, [])



  return(
    <div className='recentsection bg-white shadow-lg rounded-lg p-8 mb-8'>
    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
         Categories
    </h3>
         {categories.map((category) =>(
            
               <span className='category'>
                   {category.name}
               </span>
             
         ))}
    </div>
  );
};

export default Categories;
