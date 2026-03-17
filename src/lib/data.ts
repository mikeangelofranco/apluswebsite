export const clinicInfo = {
  name: "A Plus Premium Clinic",
  tag: "Luxury Aesthetic Clinic",
  phone: "+63 917 555 0148",
  email: "hello@atelieraesthetica.com",
  address: "The Residences at Aurelia, Makati City, Philippines",
  hours: "Mon - Sat, 9:00 AM - 7:00 PM",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "Specialists", href: "#specialists" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroMetrics = [
  { value: "15+", label: "Years of specialist experience" },
  { value: "4.9/5", label: "Patient satisfaction rating" },
  { value: "1:1", label: "Personalized treatment planning" },
] as const;

export const featuredTreatments = [
  {
    title: "Cosmetic Surgery",
    description:
      "Led by Dr. Charles Larino, our team combines precision, safety, and advanced techniques. Every treatment is carefully tailored to help you achieve natural, confident, and refined results.",
    image: "/images/clinic/medicalaesthetics.png",
  },
  {
    title: "Medical Aesthetics",
    description:
      "Target wrinkles, fine lines, acne scars, and uneven skin tone with advanced aesthetic treatments. We use state-of-the-art, non-invasive procedures designed to deliver natural-looking results. Featuring the latest innovations including Profhilo, Botox, dermal fillers, Aptos Threads, and more.",
    image: "/images/clinic/cosmeticsurgery.png",
  },
  {
    title: "Facials and Body Contouring",
    description:
      "Enjoy relaxing facials and advanced body sculpting treatments designed to enhance your natural beauty. Our skilled team uses modern techniques to refresh your skin and shape your body safely. Every treatment is personalized to help you achieve natural, beautiful results.",
    image: "/images/clinic/facials-body-contouring.png",
  },
] as const;

export const specialists = {
  name: ["Dr. Charles Larino", "Dr. Geona Ann Macrohon-Larino"],
  role: "Aesthetic Physician",
  summary:
    "Meet the expert team behind Alpha Plus Medical Aesthetics, Cebu's leading luxury aesthetics clinic. Dedicated to enhancing natural beauty, our specialists provide advanced non-surgical and cosmetic treatments in an elegant, patient-focused setting. From skin rejuvenation to body contouring and cosmetic surgery, our team delivers world-class care to help you look and feel your best.",
  experience: "15+ years in aesthetic medicine",
  credentials: [
    "Board-certified physician with advanced facial anatomy training",
    "Specialist in natural-looking injectables and skin rejuvenation",
    "Trusted by discerning patients seeking discreet enhancement",
  ],
  image: "/images/clinic/larinos.avif",
} as const;

export const whyChooseUs = [
  {
    number: "01",
    title: "Personalized Treatment Planning",
    description:
      "Every recommendation begins with careful listening, facial analysis, and clear alignment with your goals.",
  },
  {
    number: "02",
    title: "Medically Guided Care",
    description:
      "Treatments are led by experienced clinicians using evidence-based protocols and premium technology.",
  },
  {
    number: "03",
    title: "Natural-Looking Results",
    description:
      "Our work is intentionally understated, preserving expression and confidence rather than chasing trends.",
  },
] as const;

export const resultCategories = [
  {
    label: "Cosmetic Surgery",
    treatment: "Advanced Facial Rejuvenation",
    summary:
      "Enhances facial or body features by refining shape, symmetry, and overall appearance. It helps individuals achieve a more youthful, balanced, and aesthetically pleasing look.",
    beforeImage: "/images/clinic/before-cosmetic-surgery.png",
    afterImage: "/images/clinic/after-cosmetic-surgery.png",
    note:
      "Improved facial symmetry, structural proportion, and overall aesthetic balance through targeted surgical enhancement.",
  },
  {
    label: "Laser Treatments",
    treatment: "Laser Skin Renewal",
    summary:
      "Target pigment, dullness, and uneven texture through advanced laser settings personalized to your tolerance and goals.",
    beforeImage: "/images/clinic/results-before.svg",
    afterImage: "/images/clinic/results-after.svg",
    note: "Restored clarity, smoother texture, and a brighter overall complexion.",
  },
  {
    label: "Skin Tightening",
    treatment: "Collagen Lift Therapy",
    summary:
      "Non-surgical tightening that improves definition while maintaining a soft, natural profile.",
    beforeImage: "/images/clinic/results-before.svg",
    afterImage: "/images/clinic/results-after.svg",
    note: "Refined jawline support with elegant skin firmness over time.",
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
      "Discuss your goals, concerns, and timeline with a specialist who listens with care.",
  },
  {
    title: "Skin or Facial Assessment",
    description:
      "Receive an in-depth clinical review of structure, skin quality, and treatment suitability.",
  },
  {
    title: "Personalized Treatment Plan",
    description:
      "Leave with a tailored recommendation designed around your features, lifestyle, and comfort level.",
  },
  {
    title: "Aftercare & Follow-Up",
    description:
      "Benefit from attentive guidance, review appointments, and adjustments when needed.",
  },
] as const;

export const testimonial = {
  quote:
    "I felt taken care of from the first consultation. The results were subtle, natural, and exactly what I hoped for.",
  author: "A.R.",
} as const;

export const servicesDirectory = [
  {
    label: "Face",
    services: [
      {
        title: "Facial Balancing",
        description:
          "Restore harmony across profile, volume, and contour with carefully measured enhancement.",
      },
      {
        title: "Jawline Refinement",
        description:
          "Define structure and smooth transitions for a more elegant facial silhouette.",
      },
      {
        title: "Lip Enhancement",
        description:
          "Hydrate and shape with restraint for softness, proportion, and natural movement.",
      },
    ],
  },
  {
    label: "Skin",
    services: [
      {
        title: "Brightening Protocols",
        description:
          "Target dullness, uneven tone, and early signs of fatigue with physician-led skin plans.",
      },
      {
        title: "Acne Recovery Care",
        description:
          "Reduce active congestion and post-acne texture with layered, skin-respecting treatment pathways.",
      },
      {
        title: "Microneedling",
        description:
          "Improve texture and resilience through collagen-stimulating controlled micro-injury.",
      },
    ],
  },
  {
    label: "Body",
    services: [
      {
        title: "Body Contouring",
        description:
          "Refine shape with non-invasive sculpting protocols tailored to comfort and downtime preferences.",
      },
      {
        title: "Skin Firming",
        description: "Improve elasticity in key areas through progressive collagen stimulation.",
      },
      {
        title: "Postpartum Renewal",
        description:
          "Support body confidence through considerate, individualized restorative care.",
      },
    ],
  },
  {
    label: "Injectables",
    services: [
      {
        title: "Wrinkle Softening",
        description:
          "Relax expression lines while preserving natural movement and character.",
      },
      {
        title: "Biostimulator Treatments",
        description: "Encourage gradual collagen renewal for elegant, longer-term improvement.",
      },
      {
        title: "Hydration Boosters",
        description:
          "Improve skin bounce and luminosity with deeply hydrating injectable therapies.",
      },
    ],
  },
  {
    label: "Laser",
    services: [
      {
        title: "Laser Resurfacing",
        description:
          "Smooth texture and soften visible signs of sun damage using precise energy-based care.",
      },
      {
        title: "Pigment Correction",
        description:
          "Address uneven tone, redness, and discoloration with physician-calibrated settings.",
      },
      {
        title: "Scar Revision",
        description:
          "Improve the appearance of acne and textural scars through staged laser treatment plans.",
      },
    ],
  },
  {
    label: "Wellness",
    services: [
      {
        title: "IV Therapy",
        description:
          "Support recovery, hydration, and glow from within through premium wellness infusions.",
      },
      {
        title: "Hormonal Skin Support",
        description:
          "Pair medical assessment with skin treatment strategy for balanced long-term outcomes.",
      },
      {
        title: "Recovery Rituals",
        description:
          "Add calming post-treatment therapies that prioritize comfort, healing, and discretion.",
      },
    ],
  },
] as const;

export const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Your consultation includes a full facial or skin assessment, allowing our specialists to recommend the most suitable approach based on your goals, anatomy, and comfort level.",
  },
  {
    question: "Is consultation required first?",
    answer:
      "Yes. We begin every new patient relationship with a consultation so we can assess suitability, discuss expectations, and design a safe treatment plan.",
  },
  {
    question: "How much downtime should I expect?",
    answer:
      "Downtime depends on the treatment chosen. Some services allow same-day return to routine, while more intensive laser or resurfacing plans may require several days of recovery.",
  },
  {
    question: "Are treatments customized?",
    answer:
      "Every plan is customized. We adapt the treatment sequence, intensity, and aftercare based on your skin condition, timeline, and desired outcome.",
  },
  {
    question: "How soon can I book?",
    answer:
      "Consultation appointments are typically available within the week, with treatment scheduling guided by your assessment and preferred timeframe.",
  },
] as const;

export const founders = {
  title: "The Vision Behind the Clinic",
  story:
    "At Alpha Premier Medical Aesthetics, our team of experienced doctors and nurses is dedicated to delivering exceptional care in aesthetic medicine. With extensive training and clinical expertise, we focus on achieving safe, natural, and outstanding results.",
  philosophy:
    "Every step, from consultation to treatment and aftercare, is guided by precision and personalized attention. You can trust our professionals to support your journey with compassion, safety, and confidence.",
  imageOne: "/images/clinic/charles.avif",
  imageTwo: "/images/clinic/goena.avif",
  names: ["Dr. Charles Larino", "Dr. Geona Ann Macrohon-Larino"],
} as const;

export const footerLinks = {
  quickLinks: navLinks,
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
} as const;
