import { motion } from 'framer-motion'
import { CalendarDays, CheckCircle2, Send } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { fadeUp, staggerContainer } from '../animations/variants'
import { contactDetails } from '../utils/content'

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    requirement: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="bg-linen pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Book Consultation"
            title="Begin with a private design consultation."
            copy="Share your email and describe what you would like to design. Our studio will review your note and guide the next step."
          />
          <motion.div
            className="mt-10 grid gap-5 text-sm text-graphite/70 sm:grid-cols-2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="border-t border-charcoal/10 pt-5">
              <p className="font-semibold uppercase tracking-[0.18em] text-charcoal">Response Time</p>
              <p className="mt-2 leading-7">Within one studio business day.</p>
            </div>
            <div className="border-t border-charcoal/10 pt-5">
              <p className="font-semibold uppercase tracking-[0.18em] text-charcoal">Best For</p>
              <p className="mt-2 leading-7">Homes, villas, apartments, and renovation planning.</p>
            </div>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="border border-charcoal/10 bg-ivory p-8 shadow-soft"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center bg-charcoal text-white">
              <CalendarDays size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-taupe">Request Form</p>
              <h2 className="font-display text-4xl font-semibold text-charcoal">Tell us about your project</h2>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <motion.label className="block" variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal">
                Email address
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-3 w-full border border-charcoal/10 bg-white px-4 py-4 text-base text-charcoal outline-none transition placeholder:text-graphite/35 focus:border-charcoal"
              />
            </motion.label>

            <motion.label className="block" variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal">
                Project requirement
              </span>
              <textarea
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
                rows="7"
                placeholder="Describe your space, location, timeline, preferred style, and what you need help with."
                className="mt-3 w-full resize-none border border-charcoal/10 bg-white px-4 py-4 text-base leading-7 text-charcoal outline-none transition placeholder:text-graphite/35 focus:border-charcoal"
              />
            </motion.label>

            {isSubmitted ? (
              <motion.div
                className="flex items-start gap-3 border border-champagne/50 bg-champagne/15 p-4 text-sm leading-6 text-charcoal"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                <p>
                  Your consultation request is ready. Backend submission will be connected in a later phase.
                </p>
              </motion.div>
            ) : null}

            <motion.div variants={fadeUp}>
              <Button type="submit" className="w-full sm:w-auto">
                <Send size={17} />
                Submit Request
              </Button>
            </motion.div>
          </div>

          <div className="mt-10 border-t border-charcoal/10 pt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-taupe">Studio Details</h3>
            <div className="mt-5 space-y-4">
            {contactDetails.map(({ label, icon: Icon }) => (
              <motion.div key={label} className="flex items-center gap-4" variants={fadeUp}>
                <span className="inline-flex h-11 w-11 items-center justify-center bg-charcoal text-white">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-medium text-graphite/75">{label}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
