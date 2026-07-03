export const site = {
  name: 'Hafiz Maulana Faiz Islamic Academy',
  shortName: 'HMF Islamic Academy',
  tagline: 'Authentic Quranic Education for Every Muslim Family',
  founder: 'Hafiz Maulana Faiz',
  email: 'islamihaal@gmail.com',
  phone: '+92-342-4457281',
  whatsapp: '923424457281',
  location: 'Sialkot, Pakistan',
  siteUrl: 'https://hafizmaulanafaiz.academy',
  regions: ['USA', 'UK', 'Canada', 'Australia', 'Europe', 'Middle East'],
}

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks = {
  academy: [
    { label: 'About Us', to: '/about' },
    { label: 'Meet Our Teachers', to: '/teachers' },
    { label: 'Male Students', to: '/male-students' },
    { label: 'Female Students', to: '/female-students' },
  ],
  learn: [
    { label: 'All Courses', to: '/courses' },
    { label: 'Kids Program', to: '/kids-program' },
    { label: 'Adults Program', to: '/adults-program' },
    { label: 'Pricing', to: '/pricing' },
  ],
  support: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
    { label: 'Book Free Trial', to: '/book-free-trial' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  ],
}

export const founderQualifications = [
  'Graduate of Islamia University of Madinah Munawwarah',
  'Alim (Dars-e-Nizami)',
  'Hafiz al-Quran',
  'Certified Tajweed Instructor',
  "Ijazah in Hafs 'an 'Asim",
  'Tafseer al-Quran',
  "Ilm al-Qiraat",
  'Certified Motivational Speaker',
]

export const whyChooseUs = [
  {
    title: 'Certified Islamic Scholars',
    detail: 'Every teacher is formally qualified, with Ijazah credentials verified before they join the academy.',
  },
  {
    title: 'Authentic Quran & Sunnah Curriculum',
    detail: 'Our syllabus is built strictly on classical, authenticated sources — no shortcuts, no guesswork.',
  },
  {
    title: 'Graduate of Madinah University',
    detail: 'Our founder studied directly at the Islamic University of Madinah, a globally respected seat of learning.',
  },
  {
    title: 'Male & Female Teachers',
    detail: 'Brothers and sisters each learn in a comfortable, appropriately matched teaching environment.',
  },
  {
    title: 'Structured Learning Path',
    detail: 'Every student follows a clear, staged curriculum instead of an unplanned, ad-hoc lesson plan.',
  },
  {
    title: 'Flexible, Affordable, Supported',
    detail: 'Timings that fit real family life, transparent fees, and responsive student support throughout.',
  },
]

export const teachingFeatures = [
  'Live Interactive Classes',
  'One-to-One Learning',
  'Small Group Classes',
  'Flexible Scheduling',
  'Progress Reports',
  'Homework Support',
  'Personalised Learning Plans',
  'Recorded Lesson Notes',
  'Free Trial Class',
  'International Students Welcome',
]

export interface Teacher {
  slug: string
  name: string
  role: string
  gender: 'male' | 'female'
  bio: string
  qualifications: string[]
  specialities: string[]
}

export const teachers: Teacher[] = [
  {
    slug: 'hafiz-maulana-faiz',
    name: 'Hafiz Maulana Faiz',
    role: 'Founder & Lead Scholar',
    gender: 'male',
    bio: 'Hafiz Maulana Faiz founded the academy after completing his studies at the Islamic University of Madinah, with a mission to make authentic Quranic education accessible to Muslim families worldwide.',
    qualifications: founderQualifications,
    specialities: ['Tajweed', 'Tafseer', 'Hifz supervision', 'Qiraat'],
  },
  {
    slug: 'ustadh-abdullah',
    name: 'Ustadh Abdullah',
    role: 'Senior Quran Teacher',
    gender: 'male',
    bio: 'A Hafiz al-Quran with over seven years of online teaching experience, specialising in Hifz and Tajweed for children and teenagers.',
    qualifications: ['Hafiz al-Quran', 'Certified Tajweed Instructor', "Alim (Dars-e-Nizami)"],
    specialities: ['Hifz al-Quran', 'Noorani Qaida', 'Kids Islamic Program'],
  },
  {
    slug: 'ustadha-maryam',
    name: 'Ustadha Maryam',
    role: 'Senior Quran Teacher (Sisters)',
    gender: 'female',
    bio: 'A dedicated female Quran teacher offering a comfortable, private learning environment for sisters and young girls, with a gentle, structured teaching style.',
    qualifications: ['Certified Tajweed Instructor', 'Ijazah in Hafs an Asim', 'Islamic Studies certification'],
    specialities: ['Quran Reading for Beginners', 'Tajweed Course', 'Female Students Program'],
  },
  {
    slug: 'ustadha-safiyyah',
    name: 'Ustadha Safiyyah',
    role: 'Islamic Studies Teacher',
    gender: 'female',
    bio: 'Specialises in Islamic Studies, Aqeedah, and Fiqh for adult sisters and reverts, with a warm, discussion-based teaching approach.',
    qualifications: ['Islamic Studies certification', 'Fiqh & Aqeedah specialisation'],
    specialities: ['Islamic Studies', 'Aqeedah', 'Fiqh', 'Adults Islamic Program'],
  },
]

export interface Testimonial {
  name: string
  location: string
  quote: string
  course: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Yusuf R.',
    location: 'London, UK',
    quote:
      'My son went from not knowing the Arabic alphabet to reading full surahs in under a year. The teacher\u2019s patience made all the difference.',
    course: 'Kids Islamic Program',
  },
  {
    name: 'Aisha M.',
    location: 'Toronto, Canada',
    quote:
      'As a revert, I was nervous about starting from zero. My teacher never made me feel behind — every class built my confidence.',
    course: 'Adults Islamic Program',
  },
  {
    name: 'Omar S.',
    location: 'Houston, USA',
    quote:
      'The Tajweed course completely changed how I recite. I finally understand the rules instead of just memorising sounds.',
    course: 'Tajweed Course',
  },
  {
    name: 'Fatima K.',
    location: 'Sydney, Australia',
    quote:
      'Having a female teacher for my daughters made this an easy decision for our family. The scheduling around our time zone was seamless.',
    course: 'Female Students Program',
  },
  {
    name: 'Bilal A.',
    location: 'Manchester, UK',
    quote:
      'My Hifz journey with this academy has been the most structured, accountable programme I\u2019ve tried. Two years in and still consistent.',
    course: 'Hifz al-Quran',
  },
  {
    name: 'Khadija N.',
    location: 'Berlin, Germany',
    quote:
      'The free trial class showed me exactly what to expect — no pressure, just a genuinely good first lesson.',
    course: 'Quran Reading for Beginners',
  },
]

export interface FaqItem {
  q: string
  a: string
}

export const generalFaqs: FaqItem[] = [
  {
    q: 'How do online Quran classes work?',
    a: 'Classes take place live over video call with your teacher, using a shared screen for reading material. Your teacher listens, corrects, and guides you in real time, just as in an in-person lesson.',
  },
  {
    q: 'What age can my child start?',
    a: 'Most children begin from age 4–5 with the Kids Islamic Program, starting with the Arabic alphabet and Noorani Qaida.',
  },
  {
    q: 'Do you offer separate classes for brothers and sisters?',
    a: 'Yes. We offer qualified male teachers for brothers and qualified female teachers for sisters, with fully separate, comfortable class environments.',
  },
  {
    q: 'Is there a free trial class?',
    a: 'Yes, every new student is welcome to book a free trial class before committing to a course.',
  },
  {
    q: 'What time zones do you support?',
    a: 'We schedule classes across all major time zones, with dedicated slots for the US, UK, Canada, Australia, Europe, and the Middle East.',
  },
  {
    q: 'How much do classes cost?',
    a: 'Fees vary by course and class type (one-to-one vs small group). Visit our Pricing page for full details, or contact us for a tailored quote.',
  },
  {
    q: 'Can adults with no prior Quran knowledge join?',
    a: 'Yes, our Adults Islamic Program and Quran Reading for Beginners course are both designed for complete beginners, including new Muslims.',
  },
  {
    q: 'How do I pay for classes?',
    a: 'We accept major international payment methods. Full details are shared during your free trial booking.',
  },
]
