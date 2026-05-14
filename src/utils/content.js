import {
  ArrowUpRight,
  Bath,
  Building2,
  Gem,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sofa,
  Sparkles,
  Globe,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export const heroImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85'

export const aboutImage =
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1300&q=85'

export const services = [
  {
    title: 'Residential Interiors',
    description:
      'Layered, livable homes shaped around proportion, light, and refined material palettes.',
    icon: Sofa,
  },
  {
    title: 'Luxury Renovations',
    description:
      'End-to-end transformations with architectural detailing, finish curation, and site coordination.',
    icon: Building2,
  },
  {
    title: 'Bespoke Styling',
    description:
      'Furniture, art, lighting, and textile direction for rooms that feel collected and personal.',
    icon: Sparkles,
  },
  {
    title: 'Bath & Wellness',
    description:
      'Spa-minded bathrooms, powder rooms, and wellness suites with tactile, enduring finishes.',
    icon: Bath,
  },
]

export const processSteps = [
  {
    title: 'Discovery',
    description:
      'We clarify lifestyle, spatial priorities, budget rhythm, and the visual language that should guide the home.',
  },
  {
    title: 'Concept Direction',
    description:
      'Mood, materiality, layout, lighting, and furniture direction come together as a calm design framework.',
  },
  {
    title: 'Design Development',
    description:
      'Selections, drawings, bespoke pieces, and styling details are refined into a build-ready interior story.',
  },
]

export const projects = [
  {
    title: 'Serene Penthouse',
    location: 'Mumbai',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Warm Minimal Villa',
    location: 'Bengaluru',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Art Collector Residence',
    location: 'Delhi',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
  },
]

export const studioStats = [
  { value: '48', label: 'Completed residences' },
  { value: '09', label: 'Cities served' },
  { value: '12+', label: 'Years crafting homes' },
]

export const testimonials = [
  {
    quote:
      'Aurelia translated our scattered references into a calm home that feels expensive without feeling staged.',
    name: 'Riya Mehta',
    role: 'Homeowner',
  },
  {
    quote:
      'Every material, corner, and lighting moment was handled with rare restraint. The process felt deeply considered.',
    name: 'Arjun Rao',
    role: 'Founder, Maison Rao',
  },
  {
    quote:
      'They gave our apartment a sense of quiet grandeur. It is the first place I have lived that truly feels complete.',
    name: 'Nandita Sen',
    role: 'Private Client',
  },
]

export const footerLinks = [
  { label: 'Portfolio', href: '#', icon: Globe },
  { label: 'Message', href: '#', icon: MessageCircle },
  { label: 'Newsletter', href: '#', icon: Send },
]

export const contactDetails = [
  { label: 'studio@aureliainteriors.com', icon: Mail },
  { label: '+91 98765 43210', icon: Phone },
  { label: 'Chennai, India', icon: MapPin },
]

export const accentIcon = Gem
export const arrowIcon = ArrowUpRight
