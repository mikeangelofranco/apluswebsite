export const clinicInfo = {
  name: "A Plus Premium Clinic",
  tag: "Medical Aesthetics & Cosmetic Surgery",
  phone: "+63 917 777 3466",
  email: "hello@apluspremiumclinic.com",
  address: "Basement Level, Astra Lifestyle Center, A. S. Fortuna St, Mandaue City, Cebu 6014",
  hours: "Mon - Sat, 9:00 AM - 7:00 PM",
  summary:
    "Refined medical aesthetics in a calm, design-forward clinic focused on natural-looking results.",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Specialists", href: "#specialists" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroHighlights = [
  "Science-backed care",
  "Licensed professionals",
  "Personalized treatment plans",
] as const;

export const consultationLink = "https://aplusclinic.net/patientregistration/lookup/" as const;

export const brandPillars = [
  {
    title: "Skin",
    image: "/images/clinic/facials-body-contouring.png",
    description:
      "Corrective and glow-focused treatments designed to improve clarity, texture, and confidence.",
  },
  {
    title: "Face & Body",
    image: "/images/clinic/bodyskin.png",
    description:
      "Refinement-led enhancements that support balanced contours, smoother definition, and elegant proportion.",
  },
  {
    title: "Surgical Aesthetics",
    image: "/images/clinic/bodskin.png",
    description:
      "Carefully planned cosmetic procedures delivered with clinical precision and a natural finish in mind.",
  },
] as const;

export const treatmentCategories = [
  {
    title: "Skin",
    description: "Clinical treatments for healthier, brighter, more refined skin.",
    treatments: ["Facials", "Acne treatments", "Skin rejuvenation", "Whitening and smoothing"],
  },
  {
    title: "Face Enhancements",
    description: "Subtle, structured refinements that respect facial balance and expression.",
    treatments: ["Fillers", "Jaw contouring", "Nose enhancement", "Undereye treatments"],
  },
  {
    title: "Body",
    description: "Targeted solutions for shape, tone, and smoother day-to-day confidence.",
    treatments: ["Slimming", "Body contouring", "Hair removal", "Underarm treatments"],
  },
  {
    title: "Surgery",
    description: "Premium surgical planning for patients seeking lasting aesthetic improvement.",
    treatments: ["Rhinoplasty", "Blepharoplasty", "Liposuction", "Chin augmentation"],
  },
] as const;

export const trustPoints = [
  {
    title: "Licensed and experienced medical team",
    description:
      "Each treatment journey begins with professional assessment, clear recommendations, and realistic guidance.",
  },
  {
    title: "Advanced aesthetic technology",
    description:
      "We pair modern equipment with physician-led protocols chosen for safety, comfort, and reliable outcomes.",
  },
  {
    title: "Personalized consultations",
    description:
      "Treatment plans are tailored to your features, concerns, downtime preferences, and long-term goals.",
  },
  {
    title: "Safety-first, natural-looking results",
    description:
      "Our approach prioritizes elegance and restraint, never chasing overfilled or overdone results.",
  },
  {
    title: "Comfortable premium clinic environment",
    description:
      "From arrival to aftercare, every touchpoint is designed to feel discreet, warm, and professionally calm.",
  },
] as const;

export const specialistProfile = {
  name: "Dr. Charles Larino",
  title: "Medical Director & Aesthetic Physician",
  intro:
    "Known for refined, natural-looking outcomes, Dr. Larino leads patient care with a steady focus on assessment, proportion, and long-term confidence.",
  detail:
    "Consultations are thoughtful, treatment plans are honest, and recommendations stay anchored in what looks elegant in real life.",
  image: "/images/clinic/charles.avif",
  supportingName: "Dr. Geona Ann Macrohon-Larino",
  supportingTitle: "Co-Lead Aesthetic Physician",
  supportingImage: "/images/clinic/goena.avif",
  credentials: [
    "15+ years of aesthetic medicine experience",
    "Advanced training in injectables, skin care, and facial assessment",
    "Known for conservative treatment planning and polished results",
  ],
} as const;

export const specialistsTeam = [
  {
    name: "Dr. Charles Larino",
    title: "Medical Director & Aesthetic Physician",
    image: "/images/clinic/charles.avif",
    intro:
      "Known for refined, natural-looking outcomes, Dr. Larino approaches every consultation with careful assessment, proportion, and long-term confidence in mind.",
    detail:
      "His treatment philosophy is grounded in restraint, elegant balance, and recommendations that feel realistic in everyday life.",
    credentials: [
      "15+ years of aesthetic medicine experience",
      "Advanced training in injectables, skin care, and facial assessment",
      "Known for conservative treatment planning and polished results",
    ],
  },
  {
    name: "Dr. Geona Ann Macrohon-Larino",
    title: "Co-Lead Aesthetic Physician",
    image: "/images/clinic/goena.avif",
    intro:
      "Dr. Geona Ann Macrohon-Larino brings a precise, patient-centered approach to aesthetic care with strong attention to skin quality, harmony, and comfort.",
    detail:
      "Her consultations focus on clarity, personalization, and treatments that support graceful, natural-looking refinement over time.",
    credentials: [
      "Co-leads physician consultations and treatment planning",
      "Focused on personalized injectables and skin rejuvenation care",
      "Values subtle enhancement, safety, and a calm patient experience",
    ],
  },
] as const;

export const resultPreviews = [
  {
    title: "Facial Rejuvenation",
    description: "Softer, brighter definition through carefully balanced enhancement.",
    beforeImage: "/images/clinic/before-cosmetic-surgery.png",
    afterImage: "/images/clinic/after-cosmetic-surgery.png",
  },
  {
    title: "Laser Skin Renewal",
    description: "Improved smoothness, clarity, and a more even-looking complexion.",
    beforeImage: "/images/clinic/laserbefore.png",
    afterImage: "/images/clinic/laserafter.png",
    imageFit: "contain",
  },
  {
    title: "Contour Refinement",
    description: "Subtle shape improvement with a cleaner, more rested overall look.",
    beforeImage: "/images/clinic/contourbefore.png",
    afterImage: "/images/clinic/contourafter.png",
    imageFit: "contain",
  },
] as const;

export const testimonials = [
  {
    name: "Camille R.",
    treatment: "Skin Rejuvenation",
    highlight: "Thoughtful care, calm communication, and results that feel naturally elegant.",
    quote:
      "The clinic felt calm, private, and incredibly professional. My results looked polished without looking obvious.",
  },
  {
    name: "Nina M.",
    treatment: "Facial Balancing",
    highlight: "Honest guidance, refined planning, and subtle results that still feel like you.",
    quote:
      "I appreciated how honest the consultation was. The plan felt tailored to me, and the final result was beautifully subtle.",
  },
  {
    name: "Andrea T.",
    treatment: "Body Contouring",
    highlight: "A premium experience from first visit to follow-up, with clarity at every step.",
    quote:
      "Everything felt premium from the first visit. The team explained each step clearly and made the whole experience easy.",
  },
] as const;

export const branches = [
  {
    name: "Cebu Clinic",
    address: "Barangay, Basement Level Astra Lifestyle Center, A. S. Fortuna St, Mandaue, 6014 Cebu",
    phone: "+63 917 777 3466",
  },
  {
    name: "Mactan Clinic",
    address: "City Times Square Mactan, Basak, Lapu-Lapu, 6014 Cebu",
    phone: "+63 917 193 2133",
  },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
] as const;

export const footerLinks = {
  quickLinks: navLinks,
  socials: socialLinks,
} as const;

// Legacy exports kept so older unused components in the repo continue to typecheck cleanly.
export const featuredTreatments = [
  {
    title: "Cosmetic Surgery",
    description:
      "Precision-led surgical planning for patients seeking refined structural enhancement and lasting confidence.",
    image: "/images/clinic/medicalaesthetics.png",
  },
  {
    title: "Medical Aesthetics",
    description:
      "Injectables, skin correction, and rejuvenation protocols designed for subtle, polished outcomes.",
    image: "/images/clinic/cosmeticsurgery.png",
  },
  {
    title: "Facials and Body Contouring",
    description:
      "Glow-focused skin care and body treatments tailored to comfort, maintenance, and visible refinement.",
    image: "/images/clinic/facials-body-contouring.png",
  },
] as const;

export const whyChooseUs = trustPoints.map((point, index) => ({
  number: `0${index + 1}`,
  title: point.title,
  description: point.description,
}));

export const resultCategories = [
  {
    label: "Cosmetic Surgery",
    treatment: "Advanced Facial Rejuvenation",
    summary:
      "Carefully planned structural refinement for patients seeking more balanced, elegant facial definition.",
    beforeImage: "/images/clinic/before-cosmetic-surgery.png",
    afterImage: "/images/clinic/after-cosmetic-surgery.png",
    note: "Improved balance, softer transitions, and a more refined overall profile.",
  },
  {
    label: "Laser Treatments",
    treatment: "Laser Skin Renewal",
    summary:
      "Target pigment, dullness, and texture with physician-guided laser settings tailored to the skin.",
    beforeImage: "/images/clinic/results-before.svg",
    afterImage: "/images/clinic/results-after.svg",
    note: "Brighter tone, smoother texture, and clearer-looking skin.",
  },
  {
    label: "Skin Tightening",
    treatment: "Collagen Lift Therapy",
    summary:
      "Non-surgical tightening designed to support contour and restore a firmer, fresher look over time.",
    beforeImage: "/images/clinic/results-before.svg",
    afterImage: "/images/clinic/results-after.svg",
    note: "Refined support and a more sculpted profile.",
  },
] as const;

export const experienceSpaces = [
  {
    title: "Reception Area",
    image: "/images/clinic/receptionarea.png",
  },
  {
    title: "Consultation Room",
    image: "/images/clinic/consoltation.png",
  },
  {
    title: "Treatment Room",
    image: "/images/clinic/treatmentroom.png",
  },
] as const;

export const journeySteps = [
  {
    title: "Consultation",
    description:
      "Discuss your goals, concerns, and priorities with a physician who listens closely.",
  },
  {
    title: "Clinical Assessment",
    description:
      "Receive a careful review of your features, skin condition, and treatment suitability.",
  },
  {
    title: "Treatment Planning",
    description:
      "Leave with a clear recommendation tailored to your comfort, schedule, and expected outcome.",
  },
  {
    title: "Aftercare",
    description:
      "Enjoy attentive follow-up and practical guidance that supports a smooth recovery process.",
  },
] as const;

export const testimonial = {
  quote:
    "The care felt highly personalized, and the result looked refined, natural, and very true to me.",
  author: "A.R.",
} as const;

export const servicesDirectory = treatmentCategories.map((category) => ({
  label: category.title,
  services: category.treatments.map((treatment) => ({
    title: treatment,
    description: `${treatment} delivered through physician-guided planning and premium clinical care.`,
  })),
}));

export const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Every new patient begins with a consultation so our team can assess your goals, anatomy, and comfort level before recommending the right treatment path.",
  },
  {
    question: "Are your treatments personalized?",
    answer:
      "Yes. We tailor treatment plans around your features, skin condition, downtime preference, and long-term aesthetic goals.",
  },
  {
    question: "Do you focus on natural-looking results?",
    answer:
      "That is one of our core priorities. Our approach emphasizes restraint, safety, and results that feel elegant rather than overdone.",
  },
  {
    question: "Can I book a consultation first before deciding?",
    answer:
      "Yes. Consultation is the best first step if you want expert guidance before committing to any procedure or treatment plan.",
  },
] as const;

export const founders = {
  title: "The Vision Behind the Clinic",
  story:
    "A Plus Premium Clinic was built to combine medical credibility with a warmer, more luxurious patient experience from consultation to aftercare.",
  philosophy:
    "Every recommendation is guided by safety, fit, and the belief that excellent aesthetic work should look quietly confident in everyday life.",
  imageOne: "/images/clinic/charles.avif",
  imageTwo: "/images/clinic/goena.avif",
  names: [specialistProfile.name, specialistProfile.supportingName],
} as const;

export const specialists = {
  name: [specialistProfile.name, specialistProfile.supportingName],
  role: specialistProfile.title,
  summary: specialistProfile.intro,
  experience: specialistProfile.credentials[0],
  credentials: specialistProfile.credentials,
  image: specialistProfile.image,
} as const;
