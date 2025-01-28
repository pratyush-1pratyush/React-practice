import React, { useEffect } from 'react'

const Post = ({data,setPageNo}) => {
   
   useEffect(() => {
    const observer = new IntersectionObserver((params) => {
    console.log(params,"param");
     if(params[0].isIntersecting){
        observer.unobserve(target);
        setPageNo((prevPage) => prevPage+1)
     }
    },{
      threshold : 0.5
    })

    const target = document.querySelector(".image-post:last-child")
    if(target)observer.observe(target);
    else return;
    return () => observer.disconnect()
   },[data,setPageNo])

  return (
    <div className='container'>
      {
        data?.map((item,index) => {
            return (
               <img className="image-post" src={item?.download_url} key={index} alt=''/>
            )
        })
      }
    </div>
  )
}

export default Post