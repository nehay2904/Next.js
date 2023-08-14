import React from 'react';
import moment from 'moment';
import Link from 'next/link';



const PostDetail = ({post}) => {


  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  
  return(
    <div className=' bg-white shadow-lg text-centre rounded-lg lg:p-8 pb-12 mb-8'>
       <div className='relative overflow-hidden  mb-6 shadow-md '>
                   {/* <img className=' featued-image h-full w-full rounded-t-lg'
                     src={post.featuredImage.url} alt={post.title} srcset="" /> */}
        </div>
        <div className='container-post description px-4 lg:px-0  '>
                <div className='flex items-centre mb-8 w-full'>
                   <div className='flex items-centre  mb-4 lg:mb-0 w-full '>
                        {/* <img 
                        className='AuthorImage' 
                        src={post.author.photo.url} 
                        alt="" srcset="" 
                        /> */}
                         
                         <p className='authorname mx-3'>{post.author.name}</p>
                   </div>
                    <div className='datesection'>
                          <span className='dateforamt'>
                           {moment(post.createdAt).format('MMM DD, YYYY')}
                         </span>
                    </div>
          </div>
          
             {post.content.raw.children.map((typeObj , index) => {
                const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                return getContentFragment(index, children, typeObj,typeObj.type)
             })}
  
       </div>
    </div>
  );
};

export default PostDetail;
