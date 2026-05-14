import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../animations/variants'
import { aboutImage, studioStats } from '../../utils/content'
import Button from '../common/Button'
import SectionTitle from '../common/SectionTitle'

function AboutSection() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.95fr_1fr]">
        <motion.div
          className="relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={aboutImage}
            alt="Elegant interior lounge with warm natural materials"
            className="aspect-[4/5] w-full object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 right-5 bg-charcoal px-6 py-5 text-white shadow-soft sm:right-10">
            <p className="font-display text-4xl font-semibold">12+</p>
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Years crafting homes</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            align="left"
            eyebrow="About Aurelia"
            title="Interiors composed with restraint, warmth, and intention."
            copy="Our studio creates deeply personal homes for clients who value refinement without excess. We balance architectural clarity with tactile materials, custom furnishings, and a calm editorial eye."
          />
          <motion.div className="grid gap-6 border-t border-charcoal/10 pt-8 sm:grid-cols-3" variants={fadeUp}>
            {studioStats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-4xl font-semibold text-charcoal">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe">{label}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button to="/about" variant="outline">
              Studio Philosophy
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
