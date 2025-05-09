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

export default function Home() {
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

  if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 font-raleway">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
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
              <h3 className="text-xl font-semibold mb-2 font-raleway">{post.title}</h3>
              <p className="text-gray-600 mb-4">
                {post.content.substring(0, 150)}...
              </p>
              <Link href={`/posts/${post.id}`} className="text-primary hover:underline">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 