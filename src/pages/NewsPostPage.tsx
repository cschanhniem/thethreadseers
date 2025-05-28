import { useParams, Link } from 'react-router-dom'

const newsData = {
  'book-one-release': {
    title: 'The Awakening Thread Now Available',
    date: '2024-01-15',
    content: `I'm thrilled to announce that *The Awakening Thread*, the first book in The Thread Seers series, is now available for purchase!

This has been a journey years in the making, and I'm so excited to finally share Lyra's story with the world. The Thread Seers series explores themes that are deeply personal to me—the invisible connections that bind us together, the power of empathy and understanding, and the courage it takes to embrace who we truly are.

## What You Can Expect

*The Awakening Thread* introduces readers to Lyra, a seventeen-year-old girl who can see the silver threads that connect all living things. When her village is attacked by shadow creatures that feed on these very connections, Lyra must embrace her abilities and step into her destiny as one of the legendary Thread Seers.

The book explores themes of:
- Finding your place in the world
- The power of connection and empathy
- Overcoming fear and self-doubt
- The responsibility that comes with great power

## Read Before You Buy

I believe strongly that readers should be able to experience a story before committing to it. That's why the first two chapters of *The Awakening Thread* are available to read for free right here on this site. You can start reading immediately and get a feel for Lyra's world and voice.

## Where to Get Your Copy

*The Awakening Thread* is available in both digital and print formats from all major retailers:

- Amazon (Kindle & Paperback)
- Barnes & Noble (Nook & Paperback)
- Kobo
- Apple Books
- And many more!

## What's Next

I'm already hard at work on Book Two, *The Weaver's Shadow*, which will continue Lyra's journey as she learns to master her abilities and faces even greater challenges. The Thread Seers series is planned as a trilogy, with each book building on the last to create an epic story of connection, courage, and hope.

Thank you for joining me on this journey. I can't wait to hear what you think of Lyra's story!

Happy reading,
Le Viet Hong`,
  },
  'series-announcement': {
    title: 'Introducing The Thread Seers',
    date: '2024-01-01',
    content: `Welcome to the world of The Thread Seers!

I'm Le Viet Hong, and I'm thrilled to introduce you to my debut young adult fantasy series. The Thread Seers is a story that's been living in my heart for years, and I'm finally ready to share it with the world.

## The Inspiration

The idea for The Thread Seers came to me during a particularly difficult time in my life when I was feeling disconnected from the people around me. I started thinking about the invisible bonds that tie us together—the threads of love, friendship, shared experience, and empathy that create the fabric of human connection.

What if those threads were real? What if some people could see them, manipulate them, even repair them when they were broken? And what would happen if something threatened to unravel that entire network of connection?

## The Story

The Thread Seers follows Lyra, a seventeen-year-old girl who has always been able to see the silver threads that connect all living things. In a world where this ability is feared and misunderstood, Lyra has learned to hide her gift. But when shadow creatures attack her village, feeding on the very threads she can see, hiding is no longer an option.

The series explores themes of:
- Finding your identity and place in the world
- The power of connection and empathy
- Overcoming prejudice and fear
- The responsibility that comes with unique abilities
- The importance of hope in the face of darkness

## What Makes It Special

While The Thread Seers contains all the elements readers love in young adult fantasy—magic, adventure, romance, and coming-of-age themes—it's grounded in something very real: the human need for connection. The magic system is based on the bonds between people, making every relationship in the story meaningful and every loss genuinely felt.

## Coming Soon

The first book, *The Awakening Thread*, will be available soon. I'll be sharing more details about the release date, cover reveal, and where you can get your copy in the coming weeks.

In the meantime, I'll be using this space to share more about the world of The Thread Seers, the characters you'll meet, and the journey of bringing this story to life.

Thank you for being here at the beginning of this adventure. I can't wait to share Lyra's story with you!

Le Viet Hong`,
  },
}

export default function NewsPostPage() {
  const { postSlug } = useParams<{ postSlug: string }>()
  const post = newsData[postSlug as keyof typeof newsData]

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 text-center">
        <h1 className="font-sans text-h1 font-light text-text-primary mb-6">Post Not Found</h1>
        <Link to="/news" className="minimal-button text-accent-silver">
          Return to News
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      {/* Post Header */}
      <div className="text-center mb-16">
        <time className="text-caption text-text-secondary font-sans tracking-wide mb-4 block">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <h1 className="font-sans text-h1 font-light tracking-wider text-text-primary mb-8 luminous-text">
          {post.title}
        </h1>
      </div>

      {/* Post Content */}
      <div className="prose-dark">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="font-sans text-h2 font-normal text-text-primary mb-6 mt-12">
                {paragraph.replace('## ', '')}
              </h2>
            )
          }
          if (paragraph.startsWith('- ')) {
            const listItems = paragraph.split('\n').filter(item => item.startsWith('- '))
            return (
              <ul key={index} className="list-disc list-inside space-y-2 mb-6">
                {listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-text-body">
                    {item.replace('- ', '')}
                  </li>
                ))}
              </ul>
            )
          }
          return <p key={index}>{paragraph}</p>
        })}
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-text-secondary/20">
        <Link
          to="/news"
          className="minimal-button text-text-secondary hover:text-accent-silver transition-all duration-300"
        >
          ← Back to News
        </Link>
      </div>
    </div>
  )
}
