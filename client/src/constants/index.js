import { analytics, consultancy, freight, trade, realEstate, industrial } from '../assets/images'

export const navLinks = [
  {href: '#home', title: 'Home'},
  {href: '#about', title: 'About'},
  {href: '#services', title: 'Services'},
  {href: '#contact-us', title: 'Contact Us'},
];

export const sections = ['home', 'about', 'services', 'contact-us'];

export const achievements = [
  { value: "15+", title: "Years of Excellence" },
  { value: "500+", title: "Successful Projects" },
  { value: "150+", title: "Global Clients" },
  { value: "97%", title: "Client Satisfaction" },
];

export const benefits = [
  'Global Network & Expertise',
  'Customized Solutions',
  'Proven Track Record',
  'End-to-End Service',
  'Innovation-Driven Approach'
]

export const services = [
  {
    imgURL: consultancy,
    title: 'Expert Consultancy',
    description: 'Offering expertise in project management, investment strategies, and business consultancy to meet your goals.'
  },
  {
    imgURL: freight,
    title: 'Logistics & Freight',
    description: 'Providing logistics solutions, handling equipment, and freight forwarding services for efficient operations.'
  },
  {
    imgURL: trade,
    title: 'Trade & Commerce',
    description: 'Facilitating import/export operations and wholesale services to boost your market presence.'
  }, 

  {
    imgURL: realEstate,
    title: 'Real Estate & Construction',
    description: 'Delivering services in property development, construction, and real estate management.'
  },
  {
    imgURL: industrial,
    title: 'Industrial Growth',
    description: 'Accelerating industrialization and commercialization of products for sustainable business development.'
  },
  {
    imgURL: analytics,
    title: 'Strategic Planning',
    description: 'Develop comprehensive strategies that align with your business goals and market conditions.'
  }
]