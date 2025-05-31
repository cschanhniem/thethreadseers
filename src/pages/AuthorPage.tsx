export default function AuthorPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-sans text-h1 font-light tracking-wider text-text-primary mb-6 luminous-text">
          About Le Viet Hong
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Author Photo */}
        <div className="lg:col-span-1">
          <div className="aspect-square bg-gradient-to-br from-text-secondary/20 to-text-secondary/5 rounded-sm border border-text-secondary/20 flex items-center justify-center mb-8">
            <span className="text-text-secondary text-sm font-sans tracking-wide">
              Author Photo
            </span>
          </div>
        </div>

        {/* Author Bio */}
        <div className="lg:col-span-2">
          <div className="prose-dark">
            <p>
              Le Viet Hong is a storyteller fascinated by the invisible connections that bind us all together.
              Drawing inspiration from Buddhist philosophy, multicultural wisdom traditions, and the lived
              experience of seeing the world differently, they craft narratives that explore themes of
              belonging, identity, and the threads that weave through every human experience.
            </p>

            <p>
              The Thread Seers series emerged from years of research into how different cultures understand
              connection and interdependence. From Korean geometric patterns to Indian meditation techniques,
              from Egyptian hieroglyphic systems to Indigenous dreamline traditions, the series weaves together
              diverse approaches to perceiving the invisible bonds that unite us all.
            </p>

            <p>
              At its heart, The Thread Seers is built on the Buddhist concept of dependent origination—the
              understanding that all phenomena arise in dependence upon multiple causes and conditions. This
              philosophical foundation creates a magic system where relationships themselves become the source
              of power, and where true strength comes from understanding our interconnectedness.
            </p>

            <p>
              Le Viet Hong believes that middle-grade readers are ready for complex themes presented with
              respect and nuance. The Thread Seers doesn't shy away from difficult questions about ethics,
              responsibility, and what it means to use power wisely. Instead, it trusts young readers to
              engage with these concepts through the lens of adventure, friendship, and discovery.
            </p>

            <p>
              When not writing, Le Viet Hong can be found researching cultural traditions, practicing
              mindfulness meditation, and searching for the silver threads that connect every story to
              every other story ever told.
            </p>

           
          </div>

          {/* Contact/Social */}
          <div className="mt-12 pt-8 border-t border-text-secondary/20">
            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Connect
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="minimal-button text-text-body hover:text-accent-silver transition-all duration-300"
              >
                vh3969 at gmail.com
              </a>
              {/* <a
                href="#"
                className="minimal-button text-text-body hover:text-accent-silver transition-all duration-300"
              >
                Instagram
              </a> */}
              <a
                href="https://www.goodreads.com/author/show/56881390.Hong_Le_Viet"
                className="minimal-button text-text-body hover:text-accent-silver transition-all duration-300"
              >
                Goodreads
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
