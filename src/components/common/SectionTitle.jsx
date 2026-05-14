import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

function SectionTitle({ eyebrow, title, copy, align = 'center', tone = 'light' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  const titleColor = tone === 'dark' ? 'text-white' : 'text-charcoal'
  const copyColor = tone === 'dark' ? 'text-white/62' : 'text-graphite/75'
  const eyebrowColor = tone === 'dark' ? 'text-champagne' : ''

  return (
    <motion.div
      className={`flex max-w-3xl flex-col gap-5 ${alignment}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      <h2 className={`heading-lg ${titleColor}`}>{title}</h2>
      {copy ? <p className={`body-copy max-w-2xl ${copyColor}`}>{copy}</p> : null}
    </motion.div>
  )
}

export default SectionTitle
