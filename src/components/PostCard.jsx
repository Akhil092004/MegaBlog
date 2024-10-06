import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage,userName}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-[#778da9] rounded-xl p-4 hover:bg-[#6780a1]  transition-all transition-duration-200 '>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            <h2
            className='text-sm font-sans'
            >By - {userName}</h2>
        </div>
    </Link>
  )
}


export default PostCard