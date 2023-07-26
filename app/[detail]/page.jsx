"use client"
import React,{useState,useEffect} from 'react'
import styles from "/styles/Home.module.css"
import Image from 'next/image'
import Loader from '../componenets/Loader'
const Page = ({params}) => {

    const [postDetail, setPostDetail] = useState()
    const [loader, setLoader] = useState(true)
    
    const request = params.detail;

    const fetchPosts = async () => {
        try{
            const response = await fetch(`https://dummyjson.com/posts/${request}`)
            const data= await response.json()
            setPostDetail(data)
            console.log(data)
        }catch(e)  {
            console.log(e, "error")
        }
    }

        useEffect(() => {
            fetchPosts();
            setLoader(false)
        }, [])



  return (
    <div >
        {
        loader ? <Loader/> : 
        <div className={styles.container}>
            <Image 
            src={`https://picsum.photos/800/400/?${request}`} 
            alt=''    
            width={800} 
            height={400}
              />
            <div className={styles.itemDetail}>
                <h1>{postDetail?.title}</h1>
                <span>{postDetail?.body}</span>
            </div>
        </div>
        } 
    </div>
  )
}

export default Page