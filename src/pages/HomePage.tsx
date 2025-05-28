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
            Sixteen-year-old Lyra Chen discovers she can see the invisible threads that connect all living things—and that someone is cutting them.
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
      </div>

      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-silver/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
