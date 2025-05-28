import { Link } from 'react-router-dom'

const books = [
  {
    id: 1,
    slug: 'book-one',
    title: 'The Awakening Thread',
    subtitle: 'Book One of The Thread Seers',
    blurb: 'Twelve-year-old Lyra Chen has always seen the world differently. When she discovers she can perceive the invisible threads connecting all living things, she\'s thrust into the hidden world of Threadweaver Academy—where young Thread Seers learn to master extraordinary abilities. But someone is harvesting threads from the dimension itself, and Lyra must uncover the truth before the very fabric of reality unravels.',
    available: true,
    freeToRead: true,
  },
  {
    id: 2,
    slug: 'book-two',
    title: 'The Weaver\'s Shadow',
    subtitle: 'Book Two of The Thread Seers',
    blurb: 'As Lyra develops her unique tactile communion with the Weave, new threats emerge from the shadows. Ancient thread traditions clash with modern methods, and the Academy faces its greatest challenge yet. The awakening network grows stronger, but so do those who would exploit its power.',
    available: false,
    freeToRead: false,
  },
  {
    id: 3,
    slug: 'book-three',
    title: 'The Convergence Protocol',
    subtitle: 'Book Three of The Thread Seers',
    blurb: 'The thread dimension itself is evolving, developing consciousness beyond human understanding. As global thread phenomena threaten to expose the hidden world, Lyra and her friends must bridge ancient wisdom and modern innovation to prevent catastrophic dimensional collapse.',
    available: false,
    freeToRead: false,
  },
  {
    id: 4,
    slug: 'book-four',
    title: 'The Silver Path',
    subtitle: 'Book Four of The Thread Seers',
    blurb: 'Coming Soon',
    available: false,
    freeToRead: false,
  },
  {
    id: 5,
    slug: 'book-five',
    title: 'The Communion Wars',
    subtitle: 'Book Five of The Thread Seers',
    blurb: 'Coming Soon',
    available: false,
    freeToRead: false,
  },
  {
    id: 6,
    slug: 'book-six',
    title: 'The Dimensional Bridge',
    subtitle: 'Book Six of The Thread Seers',
    blurb: 'Coming Soon',
    available: false,
    freeToRead: false,
  },
  {
    id: 7,
    slug: 'book-seven',
    title: 'The Awakening Network',
    subtitle: 'Book Seven of The Thread Seers',
    blurb: 'Coming Soon',
    available: false,
    freeToRead: false,
  },
]

export default function SeriesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="font-sans text-h1 font-light tracking-wider text-text-primary mb-6 luminous-text">
          The Thread Seers
        </h1>
        <div className="prose-dark">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            A seven-book middle-grade fantasy series following Lyra Chen from age 12 to 18 as she discovers
            her ability to see the invisible threads connecting all living things. Set in our contemporary world
            with a hidden magical dimension, the series explores themes of connection, responsibility, and finding
            one's place in something vastly larger than oneself.
          </p>
        </div>
      </div>

      {/* Books List */}
      <div className="elegant-spacing">
        {books.map((book, index) => (
          <div key={book.id} className="border-b border-text-secondary/20 pb-12 last:border-b-0">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
              {/* Book Info */}
              <div className="flex-1">
                <div className="mb-4">
                  <p className="text-caption text-text-secondary font-sans tracking-wide mb-2">
                    {book.subtitle}
                  </p>
                  <h2 className="font-sans text-h2 font-normal text-text-primary mb-4 luminous-text">
                    <Link
                      to={`/series/${book.slug}`}
                      className="hover:text-accent-silver transition-colors duration-300"
                    >
                      {book.title}
                    </Link>
                  </h2>
                </div>

                <div className="prose-dark mb-6">
                  <p>{book.blurb}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {book.freeToRead && (
                    <Link
                      to={`/series/${book.slug}/read/chapter-1`}
                      className="minimal-button text-accent-silver border border-accent-silver/30 rounded-sm px-6 py-3 hover:border-accent-silver hover:bg-accent-silver/5 transition-all duration-300 text-center"
                    >
                      Read Free
                    </Link>
                  )}

                  {book.available ? (
                    <Link
                      to={`/series/${book.slug}`}
                      className="minimal-button text-text-body hover:text-accent-silver transition-all duration-300 text-center"
                    >
                      Details & Purchase
                    </Link>
                  ) : (
                    <span className="minimal-button text-text-secondary cursor-not-allowed text-center">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Book Cover Placeholder */}
              <div className="mt-8 lg:mt-0 lg:w-48 lg:flex-shrink-0">
                <div className="aspect-[2/3] bg-gradient-to-br from-text-secondary/20 to-text-secondary/5 rounded-sm border border-text-secondary/20 flex items-center justify-center">
                  <span className="text-text-secondary text-sm font-sans tracking-wide">
                    Book {index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
