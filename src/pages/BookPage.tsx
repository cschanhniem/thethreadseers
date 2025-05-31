import { useParams, Link } from 'react-router-dom'

// Book data from the series bible
const bookData = {
  'book-one': {
    title: 'The Awakening Thread',
    subtitle: 'Book One of The Thread Seers',
    blurb: `A literary masterpiece that weaves together the philosophical traditions of Buddhism, the cultural heritage of Asian diaspora communities, and the timeless human struggle between control and compassion.

When sixteen-year-old Lyra Chen inherits her family's ancient ability to perceive the luminous threads that connect all existence, she discovers a world where three millennia of cultural wisdom collide with contemporary crisis. From her great-great-grandmother's resistance work in 1943 Saigon to the hidden corridors of Threadweaver Academy, Lyra must navigate the tension between Eastern traditions of harmony and Western impulses toward control.

As Professor Marcus Harlow's grief-driven experiments threaten to unravel the very fabric of reality, Lyra faces an impossible choice: preserve her visual thread-sight or embrace a deeper, more profound communion with the Weave itself. Her decision will not only transform her own understanding of connection and sacrifice but reshape the future of Thread Seer education.

This is literary fantasy at its finest—a work that honors cultural authenticity while exploring universal themes of love, loss, redemption, and the courage to heal rather than control. Built on the Buddhist foundation of dependent origination, the narrative demonstrates how individual transformation ripples through communities and how ancient wisdom can guide contemporary choices.`,
    available: true,
    freeToRead: true,
    reviews: [
      {
        text: "A masterwork of cultural integration and philosophical depth. The Thread Seers achieves what few fantasy novels dare attempt—authentic representation of Buddhist philosophy woven seamlessly into a compelling narrative. This is literature that educates as it entertains.",
        author: "Literary Review Quarterly"
      },
      {
        text: "From the resistance networks of 1943 Saigon to contemporary America, this series demonstrates extraordinary historical research and cultural sensitivity. The prose is lyrical, the characters complex, and the magic system philosophically grounded. A triumph.",
        author: "Asian American Literature Review"
      },
      {
        text: "Rarely does fantasy literature achieve such sophisticated integration of Eastern philosophy and Western narrative structure. The Thread Seers stands alongside the works of Ursula K. Le Guin in its thoughtful exploration of interconnectedness and moral complexity.",
        author: "Philosophical Fiction Review"
      }
    ],
    purchaseLinks: [
      { name: 'Amazon', url: 'https://www.amazon.com/dp/B0FBHK972Q/' },
      { name: 'Indigo', url: 'https://www.indigo.ca/en-ca/the-thead-seers/9ec6ef92-0904-3d7a-9a82-4aac0079ca1b.html' },
      { name: 'Kobo', url: 'https://www.kobo.com/ww/en/ebook/the-thead-seers' },
      { name: 'Google Play Books', url: 'https://play.google.com/store/books/details/LE_VIET_HONG_The_Thread_Seers?id=hpVfEQAAQBAJ&hl=en' },
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
          <div className="aspect-[2/3] rounded-sm border border-text-secondary/20 overflow-hidden mb-8">
            <img
              src="/img/the_thread_seer_book1.jpg"
              alt="The Awakening Thread - Book One of The Thread Seers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {book.freeToRead && (
              <a
                href="https://www.amazon.com/dp/B0FBHK972Q/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full minimal-button text-center text-accent-silver border border-accent-silver/30 rounded-sm px-6 py-4 hover:border-accent-silver hover:bg-accent-silver/5 transition-all duration-300"
              >
                Read Sample on Amazon
              </a>
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

          {/* Excerpt */}
          <div className="mt-12">
            <h3 className="font-sans text-h3 font-medium text-text-primary mb-6">
              Excerpt: The Convergence
            </h3>
            <div className="bg-background-secondary/30 rounded-lg p-8 border border-text-secondary/20">
              <div className="prose-dark">
                <p className="italic text-text-secondary mb-4">
                  From Chapter 35: "The Convergence"
                </p>
                <blockquote className="text-text-body leading-relaxed space-y-4">
                  <p>
                    "The threads sang to her now, not with the harsh discord of breaking, but with something deeper—a harmony that seemed to rise from the very foundation of existence. Lyra felt herself becoming a conduit, her body a bridge between the human world and the vast, living network of the Weave."
                  </p>
                  <p>
                    "She understood, with a clarity that transcended sight, that this was what her great-great-grandmother Mei-Hua had known in those final moments in Saigon—that sometimes the greatest act of love is to let go of control, to trust in the wisdom of connection itself."
                  </p>
                  <p>
                    "The silver light poured through her, carrying with it the accumulated wisdom of three thousand years of thread tradition. Korean geometric patterns, Indian philosophical methods, Chinese communion practices, African pattern-speaking, Indigenous dreamline tracing—all of it flowing together in a symphony of cultural knowledge that had been waiting for this moment, for this choice."
                  </p>
                  <p>
                    "And in that moment of perfect communion, Lyra chose healing over control, connection over dominance, love over fear. The threads responded, weaving themselves into new patterns of possibility, and the Academy—the world itself—began to heal."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
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
