import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../../animations/variants'
import { arrowIcon as ArrowUpRight, projects } from '../../utils/content'
import SectionTitle from '../common/SectionTitle'

function ProjectsSection() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            align="left"
            eyebrow="Featured Projects"
            title="Homes designed to feel composed, not decorated."
            copy="A glimpse into our residential work across penthouses, villas, and private apartments."
          />
          <Link
            to="/projects"
            className="inline-flex w-fit items-center gap-2 border-b border-charcoal pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`group relative overflow-hidden bg-charcoal ${index === 1 ? 'lg:mt-12' : ''}`}
              variants={fadeUp}
            >
              <img
                src={project.image}
                alt={`${project.title} interior project`}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">{project.location}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold">{project.title}</h3>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center border border-white/35 transition group-hover:bg-white group-hover:text-charcoal">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
