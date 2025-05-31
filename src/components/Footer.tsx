import {  Twitter, Instagram } from 'lucide-react'

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'Instagram', 
    href: '#',
    icon: Instagram,
  }
  
]

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-text-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-secondary hover:text-accent-silver transition-colors duration-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Le Viet Hong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
