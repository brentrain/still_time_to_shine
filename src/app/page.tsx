import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-4">
          {/* Add your logo here */}
          <h1 className="text-4xl font-bold text-primary">Still Time to Shine</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-primary transition-colors">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog posts will be rendered here */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Sample Post Title</h3>
            <p className="text-gray-600 mb-4">This is a sample blog post description...</p>
            <Link href="/posts/1" className="text-primary hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 