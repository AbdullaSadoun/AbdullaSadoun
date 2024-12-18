import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaServer, FaMobile, FaDesktop } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern frameworks and best practices.",
    technologies: ["React", "Next.js", "Vue", "Angular"]
  },
  {
    icon: <FaServer className="w-8 h-8" />,
    title: "Backend Development",
    description: "Creating robust and scalable server-side solutions with modern technologies.",
    technologies: ["Node.js", "Python", "Java", "PostgreSQL"]
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with native performance.",
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    icon: <FaDesktop className="w-8 h-8" />,
    title: "Desktop Applications",
    description: "Creating powerful desktop applications for multiple platforms.",
    technologies: ["Electron", "Python", "C++", "Java"]
  }
]

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 