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
    title: "Father's Equations",
    content: `The questions from the night before, and the hope Ms. Rivera had sparked, still echoed in Lyra's mind as green tea and chalk dust scented the kitchen. Professor Chen's research papers colonized the breakfast table, an outpost of his university office. Rain tapped the windows as Lyra's charcoal scratched across her sketchbook.

Threads again. She couldn't stop drawing them. Three months ago, they were mere whispers of light; now, they emerged bold as shy animals. Reaching for fresh willow charcoal, she pricked her finger on a sharp, splintered edge. A tiny, crimson bead welled. With it came a strange sensation: not pain, but a faint, electric *sting*. It seemed to emanate from the warm, golden friendship thread that often shimmered around her father's favorite teacup. It vanished as quickly as it came, leaving her frowning, rubbing her fingertip. Odd. The silver family thread connecting her to her father thrummed with greater strength, yet sometimes she saw it fray. And the silver-gray academic threads around his work pulsed with discovery or dimmed with doubt, each like a distinct pigment.

Her father glanced up from his equations, a brief, distracted look that didn't quite meet her eyes. "The fruit bowl again, Lyra? You used to draw such lovely, precise still lifes." His gaze flickered towards her current page, then away, a subtle frown etched between his brows. "This new style… it's rather abstract, isn't it? Hard to tell what you're aiming for."

"It's... connections," Lyra mumbled, angling the sketchbook away protectively. His words, though gentle, landed like tiny barbs. *Hard to tell what you're aiming for.* It was the core of her frustration—how to make him *see* what was so vivid to her. His baffled disappointment was a familiar ache, a silent judgment: she'd veered from a path he understood into territory he found illegible, perhaps even worrying.

"Well, art needs its foundations," he said, his attention already returning to the glowing screen. "Perhaps focus on mastering the fundamentals before exploring… these." He gestured vaguely to her sketchbook. "You should finish grading those papers," he reminded her.

"Almost done." She set aside her sketchbook, the vibrant threads she'd been capturing dimming in her mind under the weight of his gentle incomprehension. The silver-gray academic threads around his work pulsed with an intensity that felt like a world away from her own, strongest when he worked on his equations.

"This correlation coefficient..." He frowned at his laptop. "Something's missing."

Lyra peered over his shoulder, the sharp scent of black coffee mingling with dry paper. Numbers, variables, matrices—her father's language. Yet beneath the mathematics, she discerned patterns similar to what she'd been drawing.

"What if you tried a non-linear approach?" she suggested. "The relationship looks more like a web than a line."

He paused, considering. "Interesting perspective." His fingers tapped new equations, eyes brightening. "Yes... that works."

The silver thread between them brightened momentarily—precious bridges over growing distance.

Then, he gathered his papers, squaring corners with precision. "You're creative, Lyra, deeply so, like—" He stopped, the unspoken name of her mother hanging in the air, a familiar, sorrowful chord that made their silver family thread visibly dim and waver. He cleared his throat. "But creativity thrives on parameters, on structure. The real world, the one we can measure and verify, operates on definable principles. Not on… well." His vague gesture at her sketchbook, sharper this time, seemed to wave away its contents as outside those principles.

A familiar knot tightened in Lyra's chest. *Not real. Not definable.* His words built a wall between her reality and his. Her gaze swept the kitchen, lingering on the tangible absences of her mother. The empty easel. Dust-gathering art supplies. The framed photo where sometimes, in certain lights, ghostly threads lingered, pale as moonlight, leading nowhere, yet achingly present.

## Mathematical Connections

"Actually," her father's voice brightened, "my current research might interest you." He straightened his glasses, "professor mode" engaged. "Connections—patterns of influence between seemingly unrelated systems."

He sketched a diagram: nodes, lines connecting them, influence flowing between points. "Social networks, economic systems, even biological processes—all follow similar mathematical principles."

Lyra leaned forward. His diagram, all clean lines and precise nodes, mirrored her own hidden sketches of flowing light and organic color. The same underlying structure, viewed through different lenses—dual perspectives of the same truth.

"Math reveals these connections everywhere," he continued, his hands leaving faint silver trails in her sight as he gestured. "From the dance of quantum particles to the vast architecture of galaxies. Invisible structures linking all things."

"But what if they're *literally* real?" The words tumbled out. "The connections. What if someone could actually *see* those structures?"

His brow furrowed, academic enthusiasm faltering. Concern clouded his expression. "That's... not how reality works, Lyra."

"But your equations predict connections. What if they're not just mathematical?"

"That's mysticism, not science." His voice cooled, a subtle shift that Lyra felt like a drop in temperature. "Your mother… she had similar notions. Grand, intuitive leaps, but without empirical foundation. Beautiful, perhaps, but not… testable. Not real in the way science demands."

The casual dismissal of her mother's way of seeing—and by extension, her own—stung with unexpected sharpness. The silver thread connecting them visibly frayed, shimmering with distressed light. *He doesn't understand. He won't even try.* "But isn't that just one way of knowing?" The question surprised even her, bolder than intended. "Your equations, they're beautiful, Ba, truly. But they feel… distant. What if there are other ways to perceive the same reality, ways that are just as valid, just… different?"

His jaw tightened. "Science isn't just 'one way of knowing,' Lyra. It is the most rigorous, the most tested method we have for understanding the universe. It's the systematic pursuit of verifiable truth. Other approaches, while perhaps culturally interesting or artistically evocative, are not equivalent in defining reality."

The chasm between them widened. The silver filaments of their family thread seemed to unravel further, each word a snip. Wrong direction. She had to backtrack, to retreat to ground he found acceptable, even if it felt like a betrayal of her own burgeoning truth. "I meant… metaphorically," she said, the word tasting like ash. "Like how artists visualize abstract concepts to make them understandable."

The tension in his shoulders eased, relief visibly softening his features. "Exactly. Useful metaphors, not literal phenomena." He checked his watch. "I have a faculty meeting. Finish those papers?"

After he left, Lyra returned to her sketchbook, adding details to the thread patterns. Not metaphors. Not abstractions. Real.

## The Studio Revelation

The silence of the apartment pressed around her. Her father's footsteps had faded, leaving only distant traffic and restless thoughts. The argument hung in the air like smoke—his dismissal of her mother's "notions," his insistence on empirical truth over intuitive knowing.

*Your mother had similar notions.* The words echoed, sharp with unintended cruelty.

Unable to concentrate on grading papers, Lyra found herself drawn to the hallway, to the door that had remained closed for four years. Her mother's studio. Forbidden territory by unspoken agreement.

The polished wood was cool beneath her hesitant fingertips. Her father had forbidden her entry, but disobedience felt as vital as breathing. The silver-blue threads pulsed stronger here, responding to her presence.

She took a shallow breath, then, with sudden resolve, turned the knob.

The light flicked on. A world suspended between presence and absence. The dust-covered easel. Jars of dried paint. The half-finished canvas—a mountain landscape, one corner blank, a story interrupted.

Her mother's journal lay on the small desk, its leather cover worn smooth. Embossed on it, a circle with radiating lines—a design that echoed unsettlingly with Lyra's own nascent visions of threads emanating from a central point. Beside it, a small silver pendant on a delicate chain, bearing the same symbol, caught the faint light.

Heart hammering, Lyra remembered peeking inside the journal once. Page after page revealed sketches that mirrored her own "abstractions"—not mere swirls of light, but vibrant, purposeful threads rendered with her mother's confident hand. Interspersed were notes in an unrecognized script, repeating symbols that felt like a forgotten language. One page, startlingly, was in English: "The threads respond to intention. They are not just connections—they are pathways."

The very air in the studio hummed. Memory threads, silvery-blue like moonlight on water, wove a delicate, almost invisible web between paintings, through brushes, around the journal and the pendant—a tapestry of memory and profound absence. Tonight, they shimmered with a soft, rhythmic pulse, like a sleeping heart.

Lyra's fingers traced the journal's embossed symbol. The threads brightened, responding to her touch. Not imagination. Not grief. Something else.

Her gaze was drawn to the pendant again. It seemed to pulse with a faint, inner light, almost beckoning. She reached out, her fingers hovering just above it, feeling a subtle warmth, a faint vibration. Her fingers trembled as they neared the pendant, an ache of longing to connect with this tangible piece of her mother so strong it was almost a physical pull. But the image of her father's carefully maintained silence around this room—the sheer weight of his unspoken grief—pressed down on her. She snatched her hand back as if the pendant were suddenly white-hot, its silent call still echoing in her mind.

The sound of the front door opening made her freeze. Her father's footsteps in the hallway, returning from his meeting earlier than expected.

"Lyra?" His voice carried through the apartment.

She quickly turned off the studio light and slipped out, closing the door behind her with barely a whisper. Her heart hammered as she hurried to the kitchen, grabbing the stack of papers she was supposed to be grading.

"In here, Bàba," she called, settling at the table just as he appeared in the doorway.

He looked tired, his thread signature muted with grey exhaustion of academic politics. But his eyes went immediately to her face, reading something there that made him pause.

"Everything alright?"

"Just working on the papers," she said, not quite meeting his eyes. The pendant's warmth still seemed to linger on her fingertips, a secret burning between them.

He nodded slowly, but she could see the question in his expression. The studio door was closed, as always, but something in the air had shifted. The memory threads still hummed faintly, carrying whispers of her mother's presence.

"The Academy letter came today," he said quietly, pulling an envelope from his jacket. Thick cream paper. Official seal. "I thought... perhaps it's time we talked about your mother. About what this all means."

Lyra's breath caught. The pendant's call seemed to pulse stronger, as if responding to his words. The threads between them—father and daughter, past and present, science and intuition—shimmered with new possibility.

"Yes," she whispered. "I think it's time."

He sat across from her, the Academy letter between them like a bridge. For the first time in years, the silver thread connecting them didn't fray with unspoken grief. Instead, it pulsed with something new: understanding, acceptance, and the beginning of truth.

"Your mother," he began, his voice soft with memory, "she saw things. Like you do. And I... I was too afraid to believe her. Too afraid of what it might mean."

The studio door remained closed, but Lyra could feel the pendant calling to her through the walls, a promise of answers, of connection, of a legacy she was only beginning to understand.

The Academy awaited. Her mother's path beckoned. And for the first time, her father was ready to let her walk it.`,
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
