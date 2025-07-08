import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className='w-full min-h-[100vh] py-8 bg-gradient-to-br from-gray-50 to-gray-100'>
                <Container>
                    <div className='flex justify-center items-center min-h-[400px]'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full min-h-[100vh] py-8 bg-gradient-to-br from-gray-50 to-gray-100'>
            <Container>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>All Posts</h1>
                    <p className='text-gray-600'>Discover amazing content from our community</p>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4'></div>
                </div>

                {/* Posts Grid */}
                {posts.length === 0 ? (
                    <div className='text-center py-16'>
                        <div className='text-gray-400 text-6xl mb-4'>📝</div>
                        <h2 className='text-2xl font-semibold text-gray-600 mb-2'>No posts yet</h2>
                        <p className='text-gray-500'>Be the first to share something amazing!</p>
                    </div>
                ) : (
                    <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'>
                        {posts.map((post) => (
                            <div key={post.$id} className='break-inside-avoid mb-6'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts