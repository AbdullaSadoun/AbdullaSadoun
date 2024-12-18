import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led development of modern web applications using React, Next.js, and TypeScript. Implemented responsive designs and optimized performance.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions",
    period: "2019 - 2021",
    description: "Developed full-stack applications using MERN stack. Collaborated with design team to implement pixel-perfect UI/UX.",
    skills: ["MongoDB", "Express.js", "React", "Node.js"]
  },
  {
    title: "Frontend Developer",
    company: "Web Innovators",
    period: "2017 - 2019",
    description: "Created responsive web applications and maintained existing client websites. Implemented modern CSS practices and animations.",
    skills: ["JavaScript", "HTML5", "CSS3", "jQuery"]
  }
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional journey and the skills I've acquired along the way.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
                <div className="bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-colors">
                  <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                  <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
                  <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                  <p className="mt-4">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 