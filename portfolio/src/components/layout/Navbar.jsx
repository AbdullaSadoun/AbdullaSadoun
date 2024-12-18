import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../shared/Button'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
  ]

  return (
    <div className="fixed w-full z-50 flex justify-center pt-6 px-4">
      <nav className={`
        flex items-center justify-between
        w-full max-w-[90rem] 
        px-8 py-4
        rounded-full
        transition-all duration-300
        ${isScrolled 
          ? 'bg-black/40 backdrop-blur-md border border-white/10' 
          : 'bg-black/25 backdrop-blur-sm'
        }
      `}>
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-white">
            Portfolio
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
          <Button 
            href="#contact" 
            variant="outline"
            className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-full text-sm"
          >
            Contact
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 