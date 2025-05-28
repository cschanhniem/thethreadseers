import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react'

// Chapter data from the actual manuscript
const chapterData = {
  'chapter-1': {
    title: 'The Bridge',
    content: `The golden thread snapped.

Lyra gasped, hand jerking back from the ancient book as if burned. Around her, Moonrise Books hummed with Saturday afternoon energy—customers browsing, pages turning, the soft chime of the door bell. But she could see what they couldn't: the luminous web of connections threading between every person, every object, every moment of shared experience.

And she had just broken one.

"You felt that, didn't you?"

The voice belonged to an elderly woman with silver hair and knowing eyes, standing beside the mythology section. Her thread signature was unlike anything Lyra had ever seen—ancient, layered, shot through with colors that had no names.

"I don't know what you mean," Lyra whispered, but her hands trembled as she clutched her sketchbook. The book she'd touched—*Threads of the Weave: A Cultural History*—lay open to a page showing symbols that matched her own secret drawings.

"My name is Eleanor Weaver," the woman said gently. "And I've been waiting a very long time to meet you, Lyra Chen."

*How does she know my name?*

The question died as Lyra's enhanced perception caught something impossible: threads of pure silver light emanating from the woman, reaching toward her with unmistakable intention. Not the chaotic tangle of most people's connections, but purposeful, directed, *calling*.

"The Academy sent me," Eleanor continued, her voice carrying the weight of revelation. "Your father's condition isn't random, child. And neither is your gift."

The bookstore around them seemed to fade, sounds muffling, colors dimming, until only the silver threads remained—blazing bright against a world gone grey. Lyra's breath caught as understanding crashed over her like a wave.

*This is it. This is the moment everything changes.*

But first, she needed to understand how she'd gotten here. How a girl who'd spent months hiding her impossible visions had ended up face-to-face with someone who not only believed her, but had been *looking* for her.

## Three Months Earlier

*And definitely her father's death sentence.*

The thought struck her like ice water as Lyra's pencil skimmed the sketchbook in Westbrook High's chaotic morning tide. Last night's phone call echoed: Dad's voice breaking, no longer trying to hide his terror. *"The headaches are like knives in my skull. The doctors say 'deteriorating rapidly.' They're using words like 'weeks, not months.'"* The timing wasn't coincidence—it was causation.

*What if seeing the threads isn't a gift? What if every thread I touch is literally killing him?*

"Still drawing your imaginary friends, Chen?" Madison Stone's voice cut through her spiral of guilt. A deliberate shoulder slam sent Lyra's sketchbook flying—pages scattering like accusations, revealing faces, gestures, the elusive energies she chased.

But today the bullying felt distant, unimportant compared to the weight crushing her chest. Madison's static-charged threads prickled with malice, but Lyra barely registered them. All she could think about was her father's deteriorating mind, the way his eyes had lost focus during their last video call.

"Here." Katie's quiet voice. The younger student gathered the fallen pages, her lilac threads dimmed with worry. "These are amazing. It's like you see... more."

Lyra managed a thin smile, chest tight. If only she could explain that seeing more was a curse, not a gift. That every thread she touched might be another nail in her father's coffin.

The bell shrilled. Students scattered. Lyra hurried to Art class, her sanctuary, where Ms. Rivera waited with an assignment that would change everything: "Relationship Mapping—Visualize the connections in your world."

As Lyra drew, the shimmer between her classmates intensified. Heat-haze distortions became something more—actual, tangible threads of light. When she saw Katie and Zach's golden connection fraying, she couldn't help herself. She reached out with her awareness, smoothing the jagged edges, coaxing loose filaments to reknit.

The thread responded—liquid gold, pulsing with mended light. Across the room, Katie looked up, met Zach's eyes. The tension in his shoulders eased.

"I'm sorry," Katie whispered.
"Me too," Zach replied.

Their golden thread pulsed, brilliant, whole. Lyra withdrew her hand, fingertips tingling with phantom warmth.

*She hadn't imagined it.* She'd touched the thread, repaired it. Katie had sensed it.

What else was possible?`,
    nextChapter: 'chapter-2',
    prevChapter: null,
  },
  'chapter-2': {
    title: 'The Calling',
    content: `When the light faded, Lyra found herself standing in a place that couldn't exist.

She stood on a platform of what looked like crystallized starlight, suspended in a void filled with countless silver threads. They stretched in every direction, forming a three-dimensional web so vast and complex that looking at it made her head spin. Some threads pulsed with gentle light, others flickered like dying candles, and still others blazed with colors she had no names for.

"Welcome, Thread Seer."

Lyra spun around to find a woman standing behind her—tall, elegant, with silver hair that seemed to move with a wind that didn't exist. Her eyes were the same violet as the thread that had brought Lyra here.

"I'm not—" Lyra began, but the woman held up a hand.

"You are exactly what you were born to be," the woman said gently. "My name is Vera, and I am the last of the Thread Seers... until now."

"The last?" Lyra's voice came out as barely a whisper. "But I thought the Thread Seers were just stories. Legends."

Vera's smile was sad. "We were very real, child. We were the guardians of the Web—the network of connections that binds all worlds, all realities together. We could see the threads, manipulate them, repair them when they were damaged." She gestured to the vast web around them. "This is the heart of it all. The place where every thread begins and ends."

Lyra stared at the impossible vista. "It's beautiful."

"And dying," Vera said quietly. "Look closer."

Lyra did, and her heart sank. Now that she knew what to look for, she could see the damage everywhere. Threads hung broken and fraying, their light dim or extinguished entirely. Dark patches spread through the web like infection, and in some places, entire sections had simply... vanished.

"The shadow creatures," Lyra breathed. "They're not just attacking my village. They're attacking everything."

"The Unravelers," Vera confirmed. "They come from the spaces between worlds, the void that exists where threads have been severed. They feed on connection itself, growing stronger with every bond they destroy. And they've been growing stronger for a very long time."

"But why? What do they want?"

"To return everything to the void. To unmake the Web entirely and leave nothing but empty darkness." Vera's expression was grim. "They nearly succeeded once before, a thousand years ago. It took the combined power of all the Thread Seers to stop them, and the effort... it cost us everything. Our numbers, our knowledge, our very existence."

Lyra felt a chill that had nothing to do with the strange, windless air of this place. "And now there's just you. And... me."

"Just you," Vera corrected softly. "I am only an echo, child. A memory preserved in the Web itself. My time ended long ago."

The weight of it hit Lyra like a physical blow. "You're saying I'm the only one left? That I'm supposed to stop these things by myself?"

"Not alone," Vera said, and for the first time, her smile held genuine warmth. "The Web itself will help you, as will those whose threads burn brightest. You'll find allies in the most unexpected places, Lyra. The Web has a way of bringing together those who are meant to stand against the darkness."

"But I don't know how to do any of this! I can barely touch a thread without everyone staring at me like I'm some kind of monster!"

"Because they fear what they don't understand. But fear can be overcome, child. Trust can be built. And power..." Vera reached out and touched Lyra's forehead with one finger. "Power can be taught."

The moment Vera's finger made contact, knowledge flooded into Lyra's mind. Not just information, but understanding—deep, instinctive knowledge of how the threads worked, how they could be woven and rewoven, strengthened and repaired. She saw techniques for reading the emotions and memories carried along the silver strands, methods for following threads across vast distances, ways to use the Web itself as a weapon against those who would destroy it.

When the flood of knowledge finally stopped, Lyra staggered, her head reeling.

"That's... that's everything," she gasped. "Everything the Thread Seers ever knew."

"Everything I knew," Vera corrected. "There was much more, once. But it's enough to begin with. The rest, you'll have to discover for yourself."

Lyra looked around at the vast, damaged Web, feeling the weight of responsibility settling on her shoulders like a cloak made of lead. "Where do I even start?"

"With what you know," Vera said simply. "Your village. Your people. Save what you can, and let that be the first thread in a new pattern. The Web will guide you from there."

The violet thread that had brought Lyra here began to pulse again, and she felt the strange platform beneath her feet starting to fade.

"Wait!" she called out. "Will I see you again?"

"When you need me most," Vera promised, her form already becoming translucent. "Remember, Lyra—every thread matters. Every connection has the power to change everything. Trust in that, and trust in yourself."

The last thing Lyra saw before the light claimed her again was Vera's smile, warm and proud and infinitely sad.

Then she was back in the ruins of her village, the violet thread fading from her grasp. But the knowledge remained, burning bright in her mind like a silver flame.

The shadow creatures were still there, still feeding. But now, for the first time, Lyra could see their weakness—the way they recoiled from the strongest threads, the way they avoided the connections that burned with love and hope and determination.

She stood up, stepped out of the shadows, and began to weave.`,
    nextChapter: null,
    prevChapter: 'chapter-1',
  },
}

export default function ReaderPage() {
  const { bookSlug, chapterSlug } = useParams<{ bookSlug: string; chapterSlug: string }>()
  const [fontSize, setFontSize] = useState(18)
  const [showSettings, setShowSettings] = useState(false)

  const chapter = chapterData[chapterSlug as keyof typeof chapterData]

  if (!chapter) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
        <h1 className="font-sans text-h1 font-light text-text-primary mb-6">Chapter Not Found</h1>
        <Link to={`/series/${bookSlug}`} className="minimal-button text-accent-silver">
          Return to Book
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Reader Header */}
      <div className="sticky top-0 bg-background-primary/95 backdrop-blur-sm border-b border-text-secondary/20 z-10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link
            to={`/series/${bookSlug}`}
            className="minimal-button text-text-secondary hover:text-accent-silver transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Book
          </Link>

          <h1 className="font-sans text-lg font-medium text-text-primary tracking-wide">
            {chapter.title}
          </h1>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="minimal-button text-text-secondary hover:text-accent-silver transition-all duration-300"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-t border-text-secondary/20 bg-background-secondary/50">
            <div className="mx-auto max-w-4xl px-6 py-4">
              <div className="flex items-center gap-6">
                <span className="text-sm text-text-secondary font-sans">Font Size:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                    className="minimal-button text-text-secondary hover:text-accent-silver text-sm px-2 py-1"
                  >
                    A-
                  </button>
                  <span className="text-sm text-text-body w-8 text-center">{fontSize}px</span>
                  <button
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    className="minimal-button text-text-secondary hover:text-accent-silver text-sm px-2 py-1"
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chapter Content */}
      <div className="mx-auto max-w-reading px-6 py-12">
        <div
          className="prose-dark"
          style={{ fontSize: `${fontSize}px` }}
        >
          <h2 className="font-sans text-h2 font-normal text-text-primary mb-8 text-center">
            {chapter.title}
          </h2>

          <div className="space-y-6">
            {chapter.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter Navigation */}
      <div className="border-t border-text-secondary/20 bg-background-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-8 flex justify-between items-center">
          {chapter.prevChapter ? (
            <Link
              to={`/series/${bookSlug}/read/${chapter.prevChapter}`}
              className="minimal-button text-text-body hover:text-accent-silver transition-all duration-300 flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous Chapter
            </Link>
          ) : (
            <div></div>
          )}

          {chapter.nextChapter ? (
            <Link
              to={`/series/${bookSlug}/read/${chapter.nextChapter}`}
              className="minimal-button text-text-body hover:text-accent-silver transition-all duration-300 flex items-center"
            >
              Next Chapter
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          ) : (
            <Link
              to={`/series/${bookSlug}`}
              className="minimal-button text-accent-silver border border-accent-silver/30 rounded-sm px-6 py-3 hover:border-accent-silver hover:bg-accent-silver/5 transition-all duration-300"
            >
              Finished? Get the Full Book
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
