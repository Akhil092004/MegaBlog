import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        })
    }, [])
    
    const stat = useSelector(state => state.auth.status);
    const userData = useSelector(state => state.auth.userData);
    
    // Filter posts for current user
    const userPosts = posts.filter(post => userData && post.userId === userData.$id);
    
    if (loading) {
        return (
            <div className='w-full min-h-[100vh] py-8 bg-gradient-to-br from-blue-50 to-indigo-100'>
                <Container>
                    <div className='flex justify-center items-center min-h-[400px]'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                    </div>
                </Container>
            </div>
        )
    }
    
    if (stat === false || userPosts.length === 0) {
        return (
            <div className="w-full min-h-[100vh] py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
                <Container>
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto">
                            {!stat ? (
                                <>
                                    <div className="text-blue-500 text-6xl mb-6">🔒</div>
                                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                        Welcome to Your Dashboard
                                    </h1>
                                    <p className="text-gray-600 mb-6">
                                        Please log in to view and manage your posts
                                    </p>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                                </>
                            ) : (
                                <>
                                    <div className="text-gray-400 text-6xl mb-6">📝</div>
                                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                        No Posts Yet
                                    </h1>
                                    <p className="text-gray-600 mb-6">
                                        Start creating amazing content to see it here
                                    </p>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                                </>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
    return (
        <div className='w-full min-h-[100vh] py-8 bg-gradient-to-br from-blue-50 to-indigo-100'>
            <Container>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                        My Posts
                    </h1>
                    <p className='text-gray-600'>
                        Welcome back, {userData?.name || 'User'}! Here are your posts
                    </p>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4'></div>
                </div>

                {/* Posts Grid - Masonry Layout */}
                <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'>
                    {userPosts.map((post) => (
                        <div key={post.$id} className='break-inside-avoid mb-6'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home