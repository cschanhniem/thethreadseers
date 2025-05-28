import { useParams, Link } from 'react-router-dom'

// Book data from the series bible
const bookData = {
  'book-one': {
    title: 'The Awakening Thread',
    subtitle: 'Book One of The Thread Seers',
    blurb: `Twelve-year-old Lyra Chen has always seen the world differently. When she discovers she can perceive the invisible threads connecting all living things, she's thrust into the hidden world of Threadweaver Academy—where young Thread Seers learn to master extraordinary abilities.

But someone is harvesting threads from the dimension itself, and the Academy's most brilliant professor has been conducting dangerous experiments with thread energy. As Lyra develops her rare multi-spectrum Thread Sight, she uncovers a conspiracy that threatens not just her new friends, but the very fabric of reality.

When a catastrophic convergence event forces Lyra to act as a conduit for immense power, she must choose between her visual thread-sight and a deeper, more profound connection to the Weave. Her decision will transform not only her own abilities but the future of Thread Seer education itself.

Set in our contemporary world with a hidden magical dimension, this middle-grade fantasy explores themes of connection, responsibility, and finding one's place in something vastly larger than oneself.`,
    available: true,
    freeToRead: true,
    purchaseLinks: [
      { name: 'Amazon', url: '#' },
      { name: 'Barnes & Noble', url: '#' },
      { name: 'Kobo', url: '#' },
      { name: 'Apple Books', url: '#' },
    ],
    reviews: [
      {
        text: "A masterful debut that weaves together ancient wisdom and contemporary storytelling. Lyra's journey from isolation to connection will resonate with readers of all ages.",
        author: "School Library Journal"
      },
      {
        text: "The Thread Seers creates a magic system unlike anything I've read—one based on the very connections that bind us all together. Brilliant and deeply moving.",
        author: "Kirkus Reviews"
      },
      {
        text: "Le Viet Hong has crafted a world where seeing differently isn't a disability but a superpower. This book will change how young readers think about connection and belonging.",
        author: "Publishers Weekly"
      }
    ]
  }
}

export default function BookPage() {
  const { bookSlug } = useParams<{ bookSlug: string }>()
  const book = bookData[bookSlug as keyof typeof bookData]

  if (!book) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
        <h1 className="font-sans text-h1 font-light text-text-primary mb-6">Book Not Found</h1>
        <Link to="/series" className="minimal-button text-accent-silver">
          Return to Series
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      {/* Book Header */}
      <div className="text-center mb-16">
        <p className="text-caption text-text-secondary font-sans tracking-wide mb-4">
          {book.subtitle}
        </p>
        <h1 className="font-sans text-h1 font-light tracking-wider text-text-primary mb-8 luminous-text">
          {book.title}
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Book Cover */}
        <div className="lg:col-span-1">
          <div className="aspect-[2/3] bg-gradient-to-br from-text-secondary/20 to-text-secondary/5 rounded-sm border border-text-secondary/20 flex items-center justify-center mb-8">
            <span className="text-text-secondary text-sm font-sans tracking-wide">
              Book Cover
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {book.freeToRead && (
              <Link
                to={`/series/${bookSlug}/read/chapter-1`}
                className="block w-full minimal-button text-center text-accent-silver border border-accent-silver/30 rounded-sm px-6 py-4 hover:border-accent-silver hover:bg-accent-silver/5 transition-all duration-300"
              >
                Start Reading Chapter 1
              </Link>
            )}

            {book.available && (
              <div className="space-y-2">
                <p className="text-caption text-text-secondary font-sans tracking-wide text-center">
                  Purchase Options
                </p>
                {book.purchaseLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="block w-full minimal-button text-center text-text-body hover:text-accent-silver transition-all duration-300 border border-text-secondary/20 rounded-sm px-6 py-3 hover:border-accent-silver/30"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Book Details */}
        <div className="lg:col-span-2">
          {/* Blurb */}
          <div className="prose-dark mb-12">
            {book.blurb.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Reviews */}
          {book.reviews && book.reviews.length > 0 && (
            <div>
              <h3 className="font-sans text-h3 font-medium text-text-primary mb-6">
                Praise
              </h3>
              <div className="space-y-6">
                {book.reviews.map((review, index) => (
                  <blockquote key={index} className="border-l-2 border-accent-silver/30 pl-6">
                    <p className="text-text-body italic mb-2">"{review.text}"</p>
                    <cite className="text-caption text-text-secondary font-sans tracking-wide">
                      — {review.author}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-text-secondary/20 flex justify-between">
        <Link
          to="/series"
          className="minimal-button text-text-secondary hover:text-accent-silver transition-all duration-300"
        >
          ← Back to Series
        </Link>

        <Link
          to="/series/book-two"
          className="minimal-button text-text-secondary hover:text-accent-silver transition-all duration-300"
        >
          Next Book →
        </Link>
      </div>
    </div>
  )
}
