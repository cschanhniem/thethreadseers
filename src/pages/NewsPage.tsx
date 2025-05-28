import { Link } from 'react-router-dom'

const newsData = [
  {
    slug: 'book-one-release',
    title: 'The Awakening Thread Now Available',
    date: '2024-01-15',
    excerpt: 'The first book in The Thread Seers series is now available for purchase, and you can read the first two chapters free right here on the site.',
  },
  {
    slug: 'series-announcement',
    title: 'Introducing The Thread Seers',
    date: '2024-01-01',
    excerpt: 'A new young adult fantasy series about the invisible connections that bind us all together, and the girl who can see them.',
  },
]

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-sans text-h1 font-light tracking-wider text-text-primary mb-6 luminous-text">
          Echoes & Announcements
        </h1>
        <div className="prose-dark">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Stay connected to the latest news from the world of The Thread Seers.
          </p>
        </div>
      </div>

      <div className="elegant-spacing">
        {newsData.map((post) => (
          <article key={post.slug} className="border-b border-text-secondary/20 pb-12 last:border-b-0">
            <div className="mb-4">
              <time className="text-caption text-text-secondary font-sans tracking-wide">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <h2 className="font-sans text-h2 font-normal text-text-primary mb-4 luminous-text">
              <Link 
                to={`/news/${post.slug}`}
                className="hover:text-accent-silver transition-colors duration-300"
              >
                {post.title}
              </Link>
            </h2>
            
            <div className="prose-dark">
              <p>{post.excerpt}</p>
            </div>
            
            <div className="mt-6">
              <Link
                to={`/news/${post.slug}`}
                className="minimal-button text-text-body hover:text-accent-silver transition-all duration-300"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
