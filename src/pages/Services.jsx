import { motion } from 'framer-motion'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { fadeUp, staggerContainer } from '../animations/variants'
import { services } from '../utils/content'

function Services() {
  return (
    <section className="bg-soft-noise pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="section-shell">
        <SectionTitle
          align="left"
          eyebrow="Services"
          title="Interior design services for refined residential projects."
          copy="Choose a focused engagement or a full-service design partnership, each structured to keep decisions calm and beautifully resolved."
        />

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {services.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              className="group border border-charcoal/10 bg-ivory p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              variants={fadeUp}
            >
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center bg-charcoal text-white transition group-hover:bg-champagne group-hover:text-charcoal">
                <Icon size={22} />
              </div>
              <h2 className="font-display text-4xl font-semibold text-charcoal">{title}</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-graphite/70">{description}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14">
          <Button to="/contact">Discuss Scope</Button>
        </div>
      </div>
    </section>
  )
}

export default Services
