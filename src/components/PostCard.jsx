import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage, userName}) {
    return (
        <Link to={`/post/${$id}`} className="block group">
            <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100'>
                {/* Image Container */}
                <div className='relative overflow-hidden rounded-t-2xl'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title}
                        className='w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300'
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className='p-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200'>
                        {title}
                    </h2>
                    <div className='flex items-center text-sm text-gray-500'>
                        <div className='w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs mr-2'>
                            {userName.charAt(0).toUpperCase()}
                        </div>
                        <span>By {userName}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard