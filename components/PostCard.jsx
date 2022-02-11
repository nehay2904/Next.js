import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ( {post}) => {
  console.log(post)
  return(
    <div className='container bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
              <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                 <img
                      className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg round-t-lg lg:rounded-lg'
                      src={post.featuredImage.url}
                  />
              </div> 
              <h1 className=' title text-centre mb-8 font-10'>
                 <Link href={`/post/${post.slug}`}>
                   {post.title}
                 </Link>
              </h1>
              <div className=''>
                    <div className='imagediv '>
                      <img className='postAuthoriamge' src={post.author.photo.url} alt="" srcset="" />
                         <p className='authorname'>{post.author.name}</p>
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
                                <div className='continue-reading'>
                                <span className='continue-button'>
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
