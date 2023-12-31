import React , {useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';
import {getRecentPosts , getSimilarPosts} from '../services'


const PostWidget = ({slug, categories}) => {

  const [relatedPosts, setRelatedPosts] = useState([]);


  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result))
    }else{
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  }, [slug])

console.log(relatedPosts);
  return(
    <div className='recentsection bg-white shadow-lg rounded-lg p-8 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {slug ? 'Related Posts' : 'Recent Posts'}
          </h3>
         {relatedPosts.map((post) => (
           <div key={post.title} className="recent flex items-centre w-full mb-4">
            
             <div className='flex-grow ml-4'>
                         <p className='text-gray-500'>
                           {moment(post.createdAt).format(`MMM DD, YYYY`)}
                         </p>
                         <Link href={`/post/${post.slug}`} key={post.title}>
                           {post.title}
                         </Link>
             </div>
           </div>
           
         ))}
    </div>
  )


}

export default PostWidget;
