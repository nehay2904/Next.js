import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ( {post}) => {
  console.log(post)
  return(
    <div className='container bg-white shadow-lg rounded-lg p-10 lg:p-8 pb-12 mb-8'>
             
              <h1 className=' title text-centre mb-8 font-10'>
                 <Link href={`/post/${post.slug}`}>
                   {post.title}
                 </Link>
              </h1>
              <div className=''>
                    <div style={{display:"flex", justifyContent:'center'}} className=' display-flex'>
                        <p className='authorname'>Author : </p>
                        <p className='authorname'> {post.author.name}</p>
                   </div>
                <div className='datesection'>
                       <i className="sicons bi bi-calendar2-check"></i>
                       <span>
                         {moment(post.createdAt).format('MMM DD YYYY')}
                       </span>
                </div>
                         <div className="content">
                         <p className='excerpt'>{post.excerpt}</p>
                         </div>
                         <div className='reading text-centre'>
                              <Link href={`/post/${post.slug}`}>
                                <div className='continue-reading' style={{cursor:'pointer'}}>
                                <span className='continue-button' >
                                     Continue Reading
                                </span>
                                </div>
                              </Link>
                         </div>
              </div>
    </div>
  );
};

export default PostCard;
