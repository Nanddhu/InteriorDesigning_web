import { motion } from 'framer-motion'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { fadeUp, staggerContainer } from '../animations/variants'
import { aboutImage, processSteps, studioStats } from '../utils/content'

function About() {
  return (
    <section className="bg-ivory pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="section-shell">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.8fr]">
          <SectionTitle
            align="left"
            eyebrow="Studio"
            title="A design practice rooted in calm, precision, and personal ritual."
            copy="Aurelia partners with discerning homeowners to create residences that feel quietly luxurious, emotionally grounded, and effortless to live in."
          />
          <motion.div
            className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {studioStats.map(({ value, label }) => (
              <motion.div key={label} className="border border-charcoal/10 p-5" variants={fadeUp}>
                <p className="font-display text-4xl font-semibold text-charcoal">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.img
          src={aboutImage}
          alt="Layered luxury living room by Aurelia Interiors"
          className="mt-16 aspect-[16/8] w-full object-cover shadow-soft"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
              Every decision earns its place.
            </h2>
          </div>
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article key={step.title} className="border-t border-charcoal/10 py-6">
                <h3 className="font-display text-3xl font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-3 text-base leading-8 text-graphite/70">{step.description}</p>
              </article>
            ))}
            <Button to="/contact" variant="outline" className="mt-4 w-fit">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
