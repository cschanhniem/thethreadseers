import ThreadSeerQuiz from '../components/ThreadSeerQuiz'

export default function WorldPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="font-sans text-h1 font-light tracking-wider text-text-primary mb-6 luminous-text">
          The World of the Weave
        </h1>
        <div className="prose-dark">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Enter a contemporary world where invisible threads of connection weave through reality itself.
            Hidden beneath the surface of our everyday world lies the Thread Dimension—a living network
            of relationships, emotions, and destinies that only the rare Thread Seers can perceive.
            Built on the Buddhist foundation of dependent origination, this is a world where every connection
            matters, and the threads that bind us all are as real as the air we breathe.
          </p>
        </div>
      </div>

      <div className="elegant-spacing">
        {/* The Thread Dimension */}
        <section>
          <h2 className="font-sans text-h2 font-normal text-text-primary mb-6 luminous-text">
            The Thread Dimension
          </h2>
          <div className="prose-dark">
            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              The Weave
            </h3>
            <p>
              The Thread Dimension exists as a parallel reality overlapping our physical world, where
              connections between all living things manifest as luminous strands of energy. These threads
              carry emotions, memories, and the essence of relationships themselves. The collective network
              of all threads is known as the Weave—a vast, living ecosystem that shows signs of developing
              its own consciousness and attempts at communication.
            </p>
            <p>
              The Weave operates on principles of dependent origination, where every thread arises in
              dependence upon multiple causes and conditions. No connection exists in isolation; each thread
              is part of an intricate web where changes ripple outward, affecting the entire network. This
              philosophical foundation makes the Thread Seers' magic system fundamentally about relationships
              and interconnectedness.
            </p>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Thread Classification System
            </h3>
            <p>
              Threads manifest in distinct colors and textures that reveal their nature and purpose:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Family Bonds (Silver):</strong> Luminous, rope-like connections between family members</li>
              <li><strong>Friendship (Golden):</strong> Bright, vibrant bonds between friends</li>
              <li><strong>Knowledge (Deep Blue):</strong> Pulsing, precise academic and wisdom connections</li>
              <li><strong>Nature/Earth (Emerald):</strong> Organic, vine-like connections to the natural world</li>
              <li><strong>Conflict (Ruby-red):</strong> Jagged, sharp threads indicating tension</li>
              <li><strong>Compassion (Soft Pink/Gentle Gold):</strong> Warm, gentle glow of pure kindness</li>
              <li><strong>Gratitude (Warm Amber/Honey):</strong> Radiant, soft pulse of thankfulness</li>
              <li><strong>Animus Argenti (Pure Silver):</strong> The conscious core of the thread dimension itself</li>
            </ul>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Thread Seer Classifications
            </h3>
            <p>
              Thread Seers are rare individuals born with the ability to perceive the Thread Dimension.
              They fall into distinct categories based on their primary mode of perception:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Visualizers:</strong> See threads with high clarity and excel at pattern recognition</li>
              <li><strong>Resonators:</strong> Hear thread harmonics as musical tones and vibrations</li>
              <li><strong>Empaths:</strong> Feel the emotional content of threads and relationship dynamics</li>
              <li><strong>Navigators:</strong> Trace thread paths across distances to find connections</li>
              <li><strong>Manipulators:</strong> The rarest ability—can strengthen, redirect, or create new threads</li>
              <li><strong>Sensory Weavers:</strong> Evolved perception through non-visual senses, often developing after profound experiences</li>
            </ul>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Philosophical Foundations
            </h3>
            <p>
              The Thread Seers series integrates Buddhist concepts of dependent origination (the twelve nidanas)
              throughout its magic system and character development. This creates a cohesive thematic framework
              where characters understand their abilities and relationships through the lens of interconnectedness
              and the transformation of suffering into wisdom.
            </p>
          </div>
        </section>

        {/* Interactive Thread Seer Quiz */}
        <section>
          <h2 className="font-sans text-h2 font-normal text-text-primary mb-6 luminous-text">
            Discover Your Thread Seer Abilities
          </h2>
          <div className="prose-dark mb-6">
            <p>
              Every Thread Seer has a unique way of perceiving and interacting with the Weave. Take this
              interactive assessment to discover your primary thread abilities and learn which cultural
              traditions align with your natural gifts.
            </p>
          </div>
          <ThreadSeerQuiz />
        </section>

        {/* Cultural Thread Traditions */}
        <section>
          <h2 className="font-sans text-h2 font-normal text-text-primary mb-6 luminous-text">
            Cultural Thread Traditions
          </h2>
          <div className="prose-dark">
            <p>
              Thread perception and manipulation techniques have developed independently across cultures
              throughout history, each offering unique approaches to understanding the Weave. These diverse
              traditions are now integrated at Threadweaver Academy, creating a rich multicultural approach
              to thread education.
            </p>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Eastern Traditions
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Korean Geometric Patterns:</strong> Precise mathematical approaches to thread weaving, emphasizing balance and symmetry</li>
              <li><strong>Indian Philosophical Methods:</strong> Meditation-based techniques that integrate thread work with spiritual practice</li>
              <li><strong>Chinese Communion Practices:</strong> Ancestral techniques focusing on harmony and reciprocal relationship with the Weave</li>
            </ul>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              African & Middle Eastern Traditions
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Egyptian Thread Hieroglyphics:</strong> Ancient symbolic systems for recording and transmitting thread knowledge</li>
              <li><strong>African Pattern-Speaking:</strong> Oral traditions that encode thread techniques in storytelling and song</li>
              <li><strong>Yoruba Thread Sensing:</strong> Artifacts like the Òwú Ìmọ̀lára (Thread Sensing Staff) that amplify connection to the Weave</li>
            </ul>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Indigenous Traditions
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Dreamline Tracing:</strong> Following thread connections across vast distances and through time</li>
              <li><strong>Land-Based Practices:</strong> Understanding threads through connection to specific places and natural features</li>
              <li><strong>Ancestral Communication:</strong> Using threads to maintain connections with those who have passed</li>
            </ul>
          </div>
        </section>

        {/* Threadweaver Academy */}
        <section>
          <h2 className="font-sans text-h2 font-normal text-text-primary mb-6 luminous-text">
            Threadweaver Academy
          </h2>
          <div className="prose-dark">
            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              The Hidden School
            </h3>
            <p>
              Founded in 1798 in the Berkshire Mountains of Massachusetts, Threadweaver Academy serves
              as North America's oldest Thread Seer institution. Hidden within the prestigious Westbrook
              Academy, it appears as an ordinary boarding school to non-seers, but reveals its true nature
              to those with Thread Sight through perception filters and architectural impossibilities.
            </p>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              The Great Loom
            </h3>
            <p>
              The Academy's central chamber houses the Great Loom—a vast domed hall where historical
              threads are preserved in living marble columns. This sacred space serves as both library
              and living record of the collective actions and consequences within the Academy's history,
              embodying the karmic traces of generations of Thread Seers.
            </p>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Cultural Traditions
            </h3>
            <p>
              The Academy integrates thread traditions from around the world: Korean geometric patterns,
              Indian philosophical approaches, Egyptian hieroglyphic systems, African pattern-speaking,
              and Indigenous dreamline tracing. This multicultural approach reflects the universal nature
              of thread connections while honoring diverse ways of understanding the Weave.
            </p>
          </div>
        </section>

        {/* Key Characters */}
        <section>
          <h2 className="font-sans text-h2 font-normal text-text-primary mb-6 luminous-text">
            Key Characters
          </h2>
          <div className="prose-dark">
            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Lyra Mei Chen
            </h3>
            <p>
              A sixteen-year-old Chinese-American protagonist who discovers her rare multi-spectrum Thread Sight.
              Initially able to see all types of threads with unusual clarity, she undergoes a profound
              transformation during the Convergence event. After losing her visual thread-sight, she develops
              <em>Tactile Communion</em> (Shēn Céng Gòng Míng)—a full-bodied, multi-sensory perception of
              the Weave through touch, texture, temperature, and intrinsic knowing. Her deep connection to
              the Animus Argenti, amplified by her mother's jade and silver pendant, marks her as a bridge
              between human consciousness and the awakening thread dimension.
            </p>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              The Quartet
            </h3>
            <p>
              Lyra's closest friends at the Academy represent the multicultural future of Thread Seer education:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Milo Rodriguez:</strong> Empath/Resonator who develops Auditory Resonance after sonic trauma, hearing the "music" of the Weave</li>
              <li><strong>Zara Washington:</strong> Egyptian/African-American heritage with pattern-speaking abilities and deep cultural knowledge</li>
              <li><strong>Eli Park:</strong> Korean/Indian background specializing in geometric thread patterns and mathematical approaches</li>
            </ul>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Lin Chen (Lyra's Mother)
            </h3>
            <p>
              A master Thread Seer who specialized in thread preservation and developed the "Silver Path"
              approach emphasizing communion and reciprocity with the Weave. Her mysterious disappearance
              was actually a sacrifice to protect crucial knowledge about the Animus Argenti and participatory
              metaphysics. Her jade and silver pendant, passed down to Lyra, serves as both amplifier and
              guide for advanced thread abilities.
            </p>

            <h3 className="font-sans text-h3 font-medium text-text-primary mb-4">
              Professor Marcus Harlow
            </h3>
            <p>
              A brilliant but corrupted Thread Seer whose unethical experiments with thread harvesting
              represent the dangerous extreme of the "Control" philosophy. His repeated exposure to raw
              thread energy has left him scarred by "thread burn"—silver-white marks that spread across
              his body, indicating deep imbalance and trauma. His Magnus Conduit machine designed for
              large-scale thread energy extraction threatens the stability of the entire Weave.
            </p>
          </div>
        </section>

        {/* Glossary */}
        <section>
          <h2 className="font-sans text-h2 font-normal text-text-primary mb-6 luminous-text">
            Thread Glossary
          </h2>
          <div className="prose-dark">
            <dl className="space-y-4">
              <div>
                <dt className="font-sans font-medium text-text-primary">Animus Argenti</dt>
                <dd className="text-text-body mt-1">
                  The "Silver Soul"—the conscious core of the thread dimension, manifesting as pure silver threads that serve as a living interface between human consciousness and the Weave.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Tactile Communion</dt>
                <dd className="text-text-body mt-1">
                  An evolved form of thread perception where the Seer experiences the Weave through touch, texture, temperature, and full-body sensation rather than visual sight.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Thread Burn</dt>
                <dd className="text-text-body mt-1">
                  Physical and spiritual corrosion resulting from unethical or forceful thread manipulation, appearing as silver-white scars that spread across the body.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">The Weave</dt>
                <dd className="text-text-body mt-1">
                  The collective network of all threads—a vast, living ecosystem that shows signs of developing its own consciousness and attempts at communication.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Communion vs. Control</dt>
                <dd className="text-text-body mt-1">
                  The central philosophical divide in thread manipulation: working with the Weave in harmony and reciprocity versus extracting and controlling thread energy for utilitarian purposes.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Weave-Quake</dt>
                <dd className="text-text-body mt-1">
                  Significant instability in the thread dimension, often caused by unethical harvesting or dimensional damage, measured as a percentage of overall network disruption.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Thread Nexus</dt>
                <dd className="text-text-body mt-1">
                  Locations where many threads converge, often sites of great magical power and cultural significance, such as Threadweaver Academy.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Convergence Protocol</dt>
                <dd className="text-text-body mt-1">
                  A collaborative ceremony involving multiple thread traditions working together to stabilize the Weave during times of crisis.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Magnus Conduit</dt>
                <dd className="text-text-body mt-1">
                  Harlow's machine designed for large-scale thread energy extraction, representing the dangerous extreme of the "Control" philosophy.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Òwú Ìdásílẹ̀ (Foundation Thread)</dt>
                <dd className="text-text-body mt-1">
                  Yoruba term for the Animus Argenti—the foundational consciousness of the thread dimension that enables deep communion and understanding.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Participatory Metaphysics</dt>
                <dd className="text-text-body mt-1">
                  Lin Chen's theory that observer and observed co-create reality in the Weave, emphasizing the interconnected nature of perception and existence.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Silver Path</dt>
                <dd className="text-text-body mt-1">
                  Lin Chen's approach to the Weave based on communion and reciprocity rather than extraction and control.
                </dd>
              </div>

              <div>
                <dt className="font-sans font-medium text-text-primary">Thread Artifacts</dt>
                <dd className="text-text-body mt-1">
                  Objects that amplify or focus thread abilities, such as Lin Chen's jade and silver pendant or the Yoruba Òwú Ìmọ̀lára (Thread Sensing Staff).
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  )
}
