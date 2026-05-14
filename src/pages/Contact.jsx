import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { fadeUp, staggerContainer } from '../animations/variants'
import { contactDetails } from '../utils/content'

function Contact() {
  return (
    <section className="bg-linen pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Contact"
            title="Begin with a private design consultation."
            copy="Tell us about your residence, timeline, and the feeling you want your home to hold. Our studio will guide the next step."
          />
          <motion.div
            className="mt-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Button href="mailto:studio@aureliainteriors.com">
              <CalendarDays size={17} />
              Book Consultation
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="border border-charcoal/10 bg-ivory p-8 shadow-soft"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="font-display text-4xl font-semibold text-charcoal">Studio Details</h2>
          <div className="mt-8 space-y-5">
            {contactDetails.map(({ label, icon: Icon }) => (
              <motion.div key={label} className="flex items-center gap-4 border-t border-charcoal/10 pt-5" variants={fadeUp}>
                <span className="inline-flex h-11 w-11 items-center justify-center bg-charcoal text-white">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-medium text-graphite/75">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
