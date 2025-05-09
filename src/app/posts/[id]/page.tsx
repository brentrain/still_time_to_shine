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

export default function Post({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${params.id}`)
      const data = await response.json()
      setPost(data)
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!post) return <div>Post not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/posts" className="text-primary hover:underline">
            ← Back to Posts
          </Link>
        </div>

        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-8">
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
            {post.updatedAt !== post.createdAt && (
              <span className="ml-4">
                (Updated:{' '}
                {new Date(post.updatedAt).toLocaleDateString()})
              </span>
            )}
          </div>
          {post.imageUrl && (
            <div className="relative w-full h-96 mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div className="whitespace-pre-wrap">{post.content}</div>
        </article>

        <div className="mt-8 flex space-x-4">
          <Link
            href={`/posts/${post.id}/edit`}
            className="text-blue-600 hover:underline"
          >
            Edit Post
          </Link>
        </div>
      </div>
    </div>
  )
} 