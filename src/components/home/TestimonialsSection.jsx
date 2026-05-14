import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../animations/variants'
import { testimonials } from '../../utils/content'
import SectionTitle from '../common/SectionTitle'

function TestimonialsSection() {
  return (
    <section className="bg-charcoal py-24 text-white sm:py-32">
      <div className="section-shell">
        <div className="flex justify-center">
          <SectionTitle
            tone="dark"
            eyebrow="Client Notes"
            title="Discreet, exacting, and deeply personal."
            copy="Our work is measured by how naturally a finished home supports the life inside it."
          />
        </div>

        <motion.div
          className="mt-14 grid gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item) => (
            <motion.article key={item.name} className="border border-white/12 p-7" variants={fadeUp}>
              <p className="font-display text-3xl leading-snug text-white">"{item.quote}"</p>
              <div className="mt-8 border-t border-white/12 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-white/45">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
