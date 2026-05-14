import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../animations/variants'
import { services } from '../../utils/content'
import SectionTitle from '../common/SectionTitle'

function ServicesSection() {
  return (
    <section className="bg-soft-noise py-24 sm:py-32">
      <div className="section-shell">
        <div className="flex justify-center">
          <SectionTitle
            eyebrow="Services"
            title="A complete design language for your home."
            copy="From early spatial thinking to final artwork placement, each service is intentionally scoped around a polished, low-friction experience."
          />
        </div>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              className="group border border-charcoal/10 bg-ivory/80 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-soft"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-10 inline-flex h-12 w-12 items-center justify-center bg-charcoal text-white transition duration-300 group-hover:bg-champagne group-hover:text-charcoal">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-3xl font-semibold text-charcoal">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-graphite/68">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
