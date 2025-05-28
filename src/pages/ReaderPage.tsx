import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react'

// Chapter data from the actual manuscript
const chapterData = {
  'prologue': {
    title: 'Saigon, 1943',
    content: `The bullet whispered past Mei-Hua's ear—deadly breath seeking flesh. She didn't flinch. The threads had warned her a heartbeat before: bright, violent crimson connecting sniper to trigger, intention to consequence.

Lin Mei-Hua pressed deeper into warehouse shadows, air thick with damp sacking and something metallic—old rust or faint blood. Her brother's last words haunted her: *"If the Japanese shipping manifest reaches Tokyo, a thousand families in Chợ Lớn will starve this winter."* His message pulsed with her racing heart, tangled with the familiar ache of absence. Three months since his disappearance, and still the threads that once connected them hung broken and dark—burnt offerings swaying in memory's wind.

Below, Japanese soldiers patrolled the quays along the Saigon River. Their boots struck cobblestones in rhythmic patterns, each impact a small violence against the night. Air thick with river mud, tropical blooms, and fear bore distant sounds from Chợ Lớn, the city's sprawling Chinese quarter. To ordinary eyes: men with guns. To Mei-Hua: walking constellations trailing threads of ambition (harsh, metallic red), fear (brittle, pale yellow), and duty (rigid, grey-blue) that shimmered like gossamer in darkness.

These threads unsettled the deeper currents flowing through Hậu Giang street, Chợ Lớn's beating heart. Her grandmother had taught her to see both: threads showed bonds between people, currents carried the soul of places themselves. Tonight, those currents dragged at her senses, thick and dark with Chợ Lớn's collective sorrow, yet shot through with defiant sparks—a will not yet extinguished.

She closed her eyes, steadying herself with the breathing technique passed through generations of her family's Silk Vision tradition. *In through the nose, hold for three heartbeats, out through slightly parted lips.* A ghost-smile touched her mouth—her grandmother tapping her chest with a wooden spoon when she rushed the rhythm. When she opened her eyes again, the world revealed its layered truth, a faint hum underpinning the night's sounds, air itself thrumming against her skin.

The 丝线—silk threads—shone in vibrant spectrum, connecting person to person, object to purpose, action to consequence. Beneath them flowed Hậu Giang's currents, carrying centuries of stories, hopes, sorrows. The Japanese military headquarters pulsed with sickly yellow-green threads of control. Like infection, they stretched across Saigon, damming natural currents, particularly the vital rice flow from the Mekong Delta—now choked with the suffering of requisitioned harvests and hungry children.

And there—just as intelligence from the Cochinchina General Association had suggested—a thick cord of black-silver light ran from headquarters to a cargo ship moored at port. This thread vibrated with exploitation's purpose, carrying confiscated rice and strategic materials. A parasitic line, draining the lifeblood that Hậu Giang's currents sought to nurture.

"Do you see it? The threads, the... disturbances?" whispered Zhang, her fellow resistance fighter crouched beside her. Unable to perceive threads with her clarity, he'd learned to trust her unique sight.

"Yes." Her voice barely stirred the air. "The thread carrying stolen goods is strong. Its color resonates with greed and urgency." She traced its path, remembering another thread—a gentle green line connecting her father's calligraphy brush to the merchant licenses he'd forged, helping refugee families establish themselves in Chợ Lớn. Sometimes, even thread manipulation served harmony, not discord.

"And?" Zhang prompted, knowing her well enough to read the hesitation in her voice.

"There's an unnatural manipulation here, more than just the Japanese. The thread pattern..." She paused, recognition flickering through her mind like distant lightning. "It reminds me of Dr. Weber's work."

"The German researcher? The one who studied with your grandmother?"

Mei-Hua nodded grimly. "Before the war, he understood—truly understood—the balance between threads and currents. He even helped heal disrupted flows around the new French hospital. But after Berlin recalled him, his letters grew strange. Full of talk about 'maximizing thread potential' and 'strategic current redistribution.'"

This thread bore his signature style—precise, methodical—yet its usual warmth was gone, leaving only cold, sharp efficiency. Not merely a connection, but a conduit: actively, violently managed. Its energy felt siphoned and twisted, a corruption that ached in her heart for her grandmother's former student.

"We have fifteen minutes before the patrol returns," Zhang reminded her, checking his watch. The timepiece had been his father's—a thread of warm bronze light still connected the two, even across death's threshold.

Mei-Hua nodded and reached into her jacket, removing a small silk pouch—fabric worn smooth under her touch—embroidered with ancient symbols, her mother's last gift before fever claimed her. Inside lay tools passed down through her family for centuries. Her fingers brushed the jade needle her grandmother had given her on her sixteenth birthday, the day she'd first guided rather than forced a thread's path. Beside it, a red silk charm knotted in intricate pattern—a symbol of choices that could never be undone.

"Sometimes," her grandmother had said, eyes twinkling, "the Western ways have wisdom too. The trick is knowing when to apply precision"—she'd held up the needle—"and when to trust the currents to show the way."

She selected the jade needle, cool against her skin, and a spool of red silk thread. The thread had been soaked in herbs and a drop of her own blood during the last full moon—a practice that would have drawn scorn from Western academies, with their emphasis on sterile precision. Yet even Dr. Weber had admitted, in better days, that their clinical methods often achieved only superficial changes, missing the deeper harmonies that made true thread-work last.

"Keep watch," she whispered to Zhang. Then she began to work.

Her fingers began a delicate dance, weaving patterns taught by her grandmother—a choreography of persuasion. She didn't cut the enemy's black-silver thread; that would be blunt trauma, alerting them immediately and sending violent shockwaves through the local currents. Instead, she wove her own red silk alongside it, creating a subtle pattern of redirection, a gentle tributary.

*The art of Silk Vision is not domination, but conversation,* her grandmother had said. *We do not break the threads; we persuade them. And we always listen to the currents of the place, for they carry the wisdom of generations.*

As she worked, Mei-Hua whispered ancient verses in a dialect resonant with Chợ Lớn's history, her intention focused like sunlight through glass. The red thread began to pulse with her heartbeat—soft, warm light gradually coaxing the harsh black-silver cord without disrupting its primary flow. She was creating a fork in the path: the information would still flow to the harbor, but a copy, an echo carried on her silk, would now flow to the resistance headquarters as well, guided by the subtle currents she had aligned with.

A bead of sweat traced her temple despite the night's cool. This was delicate work, requiring her to balance the thread's integrity with surrounding currents' harmony. The Japanese had their own thread-walkers—practitioners likely German-trained in the Western tradition. They called the threads "Anima Filaments" and approached them with cold calculation, often severing and re-routing them, disregarding collateral damage to the unseen world or Hậu Giang's spirit.

Suddenly, the black-silver thread pulsed violently, and a discordant ripple spread through nearby currents. Mei-Hua froze, sharp breath caught in her throat—the sudden violence a physical jolt.

"Someone's coming," she whispered, hastily securing her work with a final, almost invisible knot of red silk. A familiar resonance in the approaching thread signature caught her breath. "No... it can't be..."

Zhang tensed beside her. "What is it?"

"Their touch—it's like Dr. Weber's, but twisted, corrupted." She frowned, fingers still hovering over her work. "The precision is there, but it's being used to strangle the currents, not work with them."

The approaching presence drew closer, bringing a surge of memories: afternoon teas with her grandmother and the German scholar, his earnest questions about current flows, his joy when he first sensed them himself. "What happened to you, old friend?" she whispered to the night.

"How long until you're finished?" Zhang's voice carried urgency's edge.

"It's done, but not as I intended. I've created the fork in the thread, but..." She swallowed hard. "There's resistance in the pattern. They'll detect it by morning, and the disturbance in the local currents will be obvious to anyone sensitive enough."

"That gives us tonight. It's enough." Zhang helped her pack away her tools, movements quick but gentle—he'd learned care after she'd scolded him for roughly handling her mother's pouch. "The elders were right to send you. A Western practitioner would have severed the thread."

Mei-Hua shook her head, a sad smile touching her lips. "Most would have, yes. But there are others..." She thought of the British anthropologist, of Dr. Weber before the war. "Some understand that true mastery comes from respect, not dominance." She tucked the pouch back into her jacket. "Though whoever is approaching now has forgotten that lesson, if they ever learned it."

As they prepared to retreat through shadows, Mei-Hua cast one last look at her handiwork. The red silk thread pulsed gently alongside the black-silver cord, nearly invisible in humid air—much like the green threads of life and commerce that still flowed through Chợ Lớn despite occupation, carrying hope and resistance in their quiet currents.

A deeper disquiet settled in her, beyond tonight's mission. Fleetingly, her sight expanded, showing not just local threads but glimmers of vast, interconnected patterns spanning continents—a tapestry of immense complexity. The Japanese occupation was but one brutal, tangled knot. And the unseen hands weaving it... cold dread touched her as she sensed some should have known better.

"We need to warn the elders," she murmured. "The balance is shifting. These new thread-walkers, with their machines and methodologies—they're pulling too much, too quickly. They don't understand how threads and currents nurture each other, how they're rooted in the hearts of communities."

Zhang gave her a concerned look but knew better than to question her sight. "First, we complete this mission. Then we warn the elders."

Mei-Hua nodded and followed him into darkness, the echo of disturbed threads and troubled currents of Hậu Giang vibrating in her consciousness. Behind them, the approaching presence grew stronger. Just before they turned the corner, she caught a glimpse of a figure on the warehouse roof—tall, European, familiar. The threads connecting them flared with recognition.

"Weber," she breathed, her heart clenching. But the currents around him felt wrong, distorted, like a beloved melody played in haunting minor key.

Her family had walked these paths of light and shadow, of thread and current, for three thousand years. They knew that knowledge without wisdom was a blade without a handle, dangerous to all it touched.

The threads belonged to no one. The currents belonged to the communities they nurtured. And both were beginning to resist.

---

*Seventy years later, Mei-Hua's granddaughter would tell stories to a young girl named Lyra Chen about the silk threads that connected all things and the deep currents of life that flowed through places like Chợ Lớn, binding communities and histories together—stories the Western academy, with its focus on "Anima Filaments," would dismiss as folklore until that same girl revealed abilities that would challenge everything they thought they knew about the threads that bind our world and the ancient wisdom needed to walk among them responsibly.*`,
    nextChapter: 'chapter-1',
    prevChapter: null,
  },
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
    prevChapter: 'prologue',
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
    nextChapter: 'chapter-3',
    prevChapter: 'chapter-1',
  },
  'chapter-3': {
    title: 'Recognition',
    content: `The Academy invitation lay on the kitchen table like a bridge between worlds. Lyra traced the embossed seal with her fingertip, feeling the weight of possibility and terror in equal measure. Three days since the bookstore incident. Three days since Ms. Rivera had looked at her with knowing eyes and spoken of gifts that were "rarer than you might think."

"You don't have to decide today," her father said quietly, setting down his tea. The silver thread connecting them pulsed with carefully controlled anxiety. "We could wait another year. Let you finish high school normally."

*Normally.* As if anything about her life could ever be normal again. As if she could go back to pretending the threads didn't exist, that she couldn't see the golden connections between her classmates or the fraying bonds that spoke of heartbreak and loss.

"What was she like?" Lyra asked suddenly. "Mom. When her abilities first manifested."

Wei's hand stilled on his teacup. The silver thread between them flickered with old pain, carefully banked but never extinguished. "Brilliant. Terrifying. Beautiful." He smiled, but it didn't reach his eyes. "She saw patterns everywhere—in art, in nature, in the connections between people. She could look at a room full of strangers and map their relationships in minutes."

"Did it scare you?"

"Every day." The admission came out raw, honest. "Not her gift itself, but what it cost her. The headaches, the exhaustion, the way she sometimes seemed to be living in two worlds at once. And the way people looked at her when they found out what she could do."

Lyra thought of Madison Stone's cruel laughter, of the way her classmates' eyes slid away when she tried to explain her drawings. "Like she was crazy."

"Like she was dangerous." Wei's voice carried the weight of old battles fought and lost. "The world doesn't know what to do with people who see too much, who understand too deeply. It tries to silence them, or use them, or break them."

The words hung between them, heavy with implication.

"But the Academy is different?"

"I hope so." Wei reached across the table, covering her hand with his. The silver thread between them blazed brighter, warm with love and fear and desperate hope. "Your mother believed it was. She thought it might be the only place where you could learn to control your abilities safely."

*Control.* The word echoed with promise and threat. Control meant power, but it also meant responsibility. It meant accepting that she was different, that she would always be different, that the threads she saw were real and permanent and hers to bear.

"What if I'm not strong enough?" The question slipped out before she could stop it, small and vulnerable in the quiet kitchen.

Wei's grip tightened on her hand. "You're Lin Chen's daughter. You're stronger than you know." He paused, studying her face with the intensity he usually reserved for his equations. "But strength isn't just about power, Lyra. It's about choosing how to use what you've been given. Your mother understood that."

"And if I choose wrong?"

"Then you learn from it. You grow. You try again." His smile was sad but genuine. "That's what being human means, gift or no gift."

Lyra looked out the window at the ordinary suburban street, at the invisible threads of connection and conflict that wove between every house, every family, every heart. Somewhere out there, Katie and Zach were probably arguing again, their golden thread straining under teenage drama. Somewhere, her art teacher was grading papers and wondering if she'd said too much to a student who saw too clearly.

And somewhere, in a place called Threadweaver Academy, there were others like her. Others who saw the hidden architecture of the world, who understood that reality was far stranger and more beautiful than most people could imagine.

The invitation seemed to pulse with possibility, but also whispered of dangers she couldn't yet comprehend.

"I want to go," she said finally, the words feeling both inevitable and terrifying. "I need to understand what this is, what I am."

Wei nodded slowly, pride and fear warring in his expression. "Then we'll make the arrangements. But Lyra..." He waited until she met his eyes. "Promise me something. Whatever you learn there, whatever they teach you, don't let them change who you are at heart. Your gift is part of you, but it's not all of you. Remember that."

She promised, though she wondered even as she spoke the words whether it was a promise she could keep. The threads around her seemed to pulse with anticipation, as if the very fabric of reality was holding its breath to see what she would choose.

The Academy awaited. And with it, a future she could barely imagine but could no longer avoid.`,
    nextChapter: null,
    prevChapter: 'chapter-2',
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
