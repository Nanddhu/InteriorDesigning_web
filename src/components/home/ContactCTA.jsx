import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import { fadeUp } from '../../animations/variants'
import Button from '../common/Button'

function ContactCTA() {
  return (
    <section className="bg-linen py-24 sm:py-32">
      <motion.div
        className="section-shell text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <p className="eyebrow">Begin The Conversation</p>
        <h2 className="heading-lg mx-auto mt-5 max-w-4xl">
          Let's shape a home that feels refined, restful, and unmistakably yours.
        </h2>
        <p className="body-copy mx-auto mt-6 max-w-2xl">
          Book a private consultation with our studio to discuss your residence,
          timeline, and the atmosphere you want to create.
        </p>
        <Button to="/contact" className="mt-10">
          <CalendarDays size={17} />
          Book Consultation
        </Button>
      </motion.div>
    </section>
  )
}

export default ContactCTA
