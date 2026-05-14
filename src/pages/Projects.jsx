import { motion } from 'framer-motion'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { fadeUp, staggerContainer } from '../animations/variants'
import { arrowIcon as ArrowUpRight, projects } from '../utils/content'

function Projects() {
  return (
    <section className="bg-ivory pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            align="left"
            eyebrow="Projects"
            title="A portfolio of quiet residential luxury."
            copy="Selected homes designed around natural materiality, exacting proportions, and personal comfort."
          />
          <Button to="/contact" variant="outline" className="w-fit">
            Start a Project
          </Button>
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.article key={project.title} className="group bg-charcoal" variants={fadeUp}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} interior project`}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition group-hover:bg-charcoal/20" />
              </div>
              <div className="flex items-center justify-between gap-4 p-6 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">{project.location}</p>
                  <h2 className="mt-2 font-display text-3xl font-semibold">{project.title}</h2>
                </div>
                <ArrowUpRight size={18} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
