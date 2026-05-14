import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeIn, fadeUp, staggerContainer } from '../../animations/variants'
import { heroImage } from '../../utils/content'
import Button from '../common/Button'

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal text-white">
      <motion.img
        src={heroImage}
        alt="Luxury neutral living room with sculptural furniture"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-charcoal/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/55 to-transparent" />

      <motion.div
        className="section-shell relative flex min-h-screen items-center pb-16 pt-28"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.p className="eyebrow text-white/70" variants={fadeUp}>
            Premium Interior Design Studio
          </motion.p>
          <motion.h1 className="heading-xl mt-7 text-white" variants={fadeUp}>
            Quiet luxury for homes with soul.
          </motion.h1>
          <motion.p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl" variants={fadeUp}>
            We design refined residential interiors where architecture, atmosphere,
            and personal ritual meet in effortless balance.
          </motion.p>
          <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row" variants={fadeUp}>
            <Button to="/contact" className="border-white bg-white text-charcoal hover:bg-champagne">
              Book Consultation
              <ArrowRight size={17} />
            </Button>
            <Button to="/projects" variant="secondary">
              View Projects
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-5 hidden max-w-xs border border-white/20 bg-white/10 p-5 text-sm leading-6 text-white/72 backdrop-blur-md md:right-10 md:block"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
      >
        Full-service interiors from concept direction to final styling.
      </motion.div>
    </section>
  )
}

export default HeroSection
