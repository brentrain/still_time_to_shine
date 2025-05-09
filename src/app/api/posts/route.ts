import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/posts - Get all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 })
  }
}

// POST /api/posts - Create a new post
export async function POST(request: Request) {
  try {
    const json = await request.json()
    const post = await prisma.post.create({
      data: json,
    })
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 })
  }
} 