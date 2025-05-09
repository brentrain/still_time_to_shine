import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/posts/[id] - Get a single post
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(params.id),
      },
    })
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching post' }, { status: 500 })
  }
}

// PUT /api/posts/[id] - Update a post
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const json = await request.json()
    const post = await prisma.post.update({
      where: {
        id: parseInt(params.id),
      },
      data: json,
    })
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating post' }, { status: 500 })
  }
}

// DELETE /api/posts/[id] - Delete a post
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.post.delete({
      where: {
        id: parseInt(params.id),
      },
    })
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting post' }, { status: 500 })
  }
} 