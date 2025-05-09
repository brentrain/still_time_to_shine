'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Post {
  id: number
  title: string
  content: string
  imageUrl: string | null
  published: boolean
  createdAt: string
  updatedAt: string
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const deletePost = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })
      fetchPosts()
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          href="/posts/new"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
        >
          New Post
        </Link>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            {post.imageUrl && (
              <div className="mb-4 relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">
              {post.content.substring(0, 200)}...
            </p>
            <div className="flex space-x-4">
              <Link
                href={`/posts/${post.id}`}
                className="text-primary hover:underline"
              >
                Read more
              </Link>
              <Link
                href={`/posts/${post.id}/edit`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => deletePost(post.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 