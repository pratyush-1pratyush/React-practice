import React, { useCallback, useEffect, useState } from 'react'
import Post from './Post';

const InfiniteScroll = () => {
    const [data,setData] = useState([]);
    const [pageNo,setPageNo] = useState(1);

    const fetchPostData = useCallback(async () => {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
        const json = await response.json();
        setData((prevData) => [...prevData,...json]);
        console.log(json);
        console.log("useEffect called")

    } ,[pageNo])

   useEffect(() =>{
   
    fetchPostData();
   },[fetchPostData])

  return (
    <div >
        {console.log("render1")}
        <Post data={data} setPageNo={setPageNo}/>
    </div>
  )
}

export default InfiniteScroll