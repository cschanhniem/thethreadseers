import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="text-center elegant-spacing">
          {/* Main Title */}
          <h1 className="font-sans text-hero font-light tracking-wider text-text-primary mb-8 luminous-text animate-luminous-pulse">
            THE THREAD SEERS
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-serif text-text-body leading-relaxed mb-12 max-w-3xl mx-auto">
            In a world where ancient wisdom meets contemporary crisis, sixteen-year-old Lyra Chen inherits the ability to perceive the luminous threads that bind all existence—just as a conspiracy threatens to unravel the very fabric of reality itself.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/series/book-one/read/chapter-1"
              className="minimal-button text-lg font-medium bg-transparent border border-accent-silver/30 rounded-sm px-8 py-4 hover:border-accent-silver hover:bg-accent-silver/5 transition-all duration-300"
            >
              Read Book One Free
            </Link>

            <Link
              to="/series"
              className="minimal-button text-lg text-text-secondary hover:text-accent-silver transition-all duration-300"
            >
              Explore the Series
            </Link>
          </div>
        </div>

        {/* Literary Description */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="prose-dark text-center">
            <p className="text-lg leading-relaxed mb-8">
              From the resistance networks of 1943 Saigon to the hidden academies of contemporary America,
              <em>The Thread Seers</em> weaves together three millennia of cultural wisdom in a narrative
              that transcends genre boundaries. This is literary fantasy at its finest—a work that honors
              the philosophical traditions of Buddhism, the cultural heritage of Asian diaspora communities,
              and the universal human longing for connection and meaning.
            </p>
            <p className="text-lg leading-relaxed">
              Built on the Buddhist foundation of dependent origination, the series explores how individual
              transformation ripples through communities, how ancient wisdom guides contemporary choices,
              and how the courage to heal can overcome the impulse to control. This is storytelling that
              educates as it entertains, that honors cultural authenticity while creating something entirely new.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-silver/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
