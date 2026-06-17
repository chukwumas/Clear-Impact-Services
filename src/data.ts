/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ServicePillar,
  TrainingProgram,
  ProjectEvent,
  Partnership,
  GalleryItem,
  BlogArticle,
  DownloadItem
} from './types';

export const CONTACT_INFO = {
  companyName: "Clear Impact Services Limited",
  address: "Plot 114 Rumuosi / Rumuagholu Road, Off Airport Road, Rumuosi, Port Harcourt, Rivers State, Nigeria",
  phones: ["08037762620", "09020147466"],
  email: "clearimpactservicers@gmail.com",
  taglines: [
    "Professional Solutions With Lasting Impact",
    "Transforming Organizations Through Training, Technology & Innovation"
  ],
  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    whatsapp: "https://wa.me/2348037762620?text=Hello%20Clear%20Impact%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20professional%20services..."
  }
};

export const CORE_SERVICES: ServicePillar[] = [
  {
    id: "consulting",
    title: "Corporate Consulting & Professional Training",
    shortDescription: "Empowering teams with leadership frameworks, strategic plans, and performance optimization workshops.",
    iconName: "Briefcase",
    details: [
      "Operational Excellence Training",
      "Leadership Development Programmes",
      "Executive Capacity Building",
      "Strategic Planning & Consulting",
      "Human Capacity Development",
      "Organizational Development",
      "Public Sector Reform Support",
      "Performance Management Training"
    ]
  },
  {
    id: "digital-learning",
    title: "Educational & Digital Learning Services",
    shortDescription: "Deploying high-impact learning systems, teacher capacity curriculum, and digital examinations.",
    iconName: "GraduationCap",
    details: [
      "STEM Education Programmes",
      "WAEC E-Study Platform Integration",
      "WAEC Verification Solutions",
      "Digital Learning Platforms",
      "Teacher Development Programmes",
      "School Technology Deployment",
      "CBT Examination Systems Setup",
      "Academic Development Support"
    ]
  },
  {
    id: "international-exams",
    title: "International Examination Support",
    shortDescription: "Certified guidance and testing preparation support for global excellence.",
    iconName: "Globe",
    details: [
      "IELTS Registration & Preparation Support",
      "Teacher Knowledge Test (TKT) Guidance",
      "Educational Consulting Services",
      "International Educational Opportunities Advice",
      "Cambridge Teachers Training and Related Curriculum Support"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Technology Services",
    shortDescription: "Protecting institutional integrity and delivering modern web-based software ecosystems.",
    iconName: "Shield",
    details: [
      "Cybersecurity Awareness Training",
      "IT Security Consulting",
      "Website / App Development",
      "Digital Transformation Solutions",
      "Data Protection Awareness",
      "ICT Deployment Services",
      "Smart School Systems Integration",
      "Software / Enterprise Web Development"
    ]
  },
  {
    id: "branding",
    title: "Media, Branding & Creative Services",
    shortDescription: "Crafting modern identities, public campaigns, and target media solutions.",
    iconName: "Palette",
    details: [
      "Corporate Branding & Logos",
      "Graphic Design & Print Media",
      "Business Card & Stationary Design",
      "Social Media Management & Campaigns",
      "Targeted Media & Publicity Campaigns",
      "TV Programme Production Support",
      "Structured Digital Marketing",
      "Advertising & Communication Strategy"
    ]
  },
  {
    id: "events-youth",
    title: "Events, Project Management & Youth Development",
    shortDescription: "Delivering world-class cultural management, sports tournaments, and youth empowerment initiatives.",
    iconName: "Calendar",
    details: [
      "Cultural Festival Management",
      "Sports Tournament Coordination",
      "Corporate Conferences & Seminars",
      "Government Event Coordination",
      "Teen Talent Arena Management",
      "Community Development Projects",
      "STEM Enterprise Challenge Support",
      "Secondary School Competitions Planning"
    ]
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "op-excellence",
    title: "Operational Excellence Training",
    description: "Designed for corporate executives and public sector managers to streamline workflows, eliminate administrative bottlenecks, and establish rigid quality management frameworks.",
    duration: "3-5 Days Intensive",
    targetAudience: "Department Heads, Operations Managers, Public Administrators",
    curriculum: [
      "Principles of Lean Operations & Public Administration",
      "Bottleneck Analysis and Core Workflow Design",
      "Performance Management Indicators & Audits",
      "Change Management & Implementation Roadmaps"
    ]
  },
  {
    id: "leadership-dev",
    title: "Leadership Development Programmes",
    description: "Focuses on strategic decision-making, team coaching, emotional intelligence, and accountability frameworks for forward-thinking organizations.",
    duration: "1 Month Cohort Based",
    targetAudience: "Executive Directors, Division Heads, Senior Officers",
    curriculum: [
      "Strategic Vision Alignment & Team Motivation",
      "Conflict Resolution and Adaptive Governance",
      "Data-Driven Organizational Decision Making",
      "Fostering Corporate Innovation & Scale"
    ]
  },
  {
    id: "tkt-prep",
    title: "Teacher Knowledge Test (TKT) support",
    description: "Comprehensive preparation support for primary and secondary school educators aiming to earn globally recognized teaching credentials from Cambridge Assessment English.",
    duration: "2 Weeks prep",
    targetAudience: "Educators, School Principals, Curriculum Advisors",
    curriculum: [
      "Language and Background to Language Learning",
      "Lesson Planning and Classroom Resource Management",
      "Managing the Teaching and Learning Process",
      "Cambridge Evaluation Standards and Core Methodology"
    ]
  }
];

export const PROJECTS_EVENTS: ProjectEvent[] = [
  {
    id: "bongo-fest",
    title: "Owerri Bongo Festival",
    category: "cultural",
    location: "Owerri, Imo State",
    description: "An annual hallmark cultural celebration promoting local musical talents, traditional drumming, and cultural heritage across Imo State.",
    year: "2025"
  },
  {
    id: "igbo-cultural-fest",
    title: "Igbo Cultural Festival",
    category: "cultural",
    location: "Port Harcourt, Rivers State",
    description: "A prestigious gathering highlighting traditional aesthetics, languages, dances, and historical showcases of the Igbo community.",
    year: "2025"
  },
  {
    id: "teen-talent",
    title: "Teen Talent Arena",
    category: "youth",
    location: "Port Harcourt",
    description: "A comprehensive talent discovery platform focusing on creative writing, debating, fine art, and performing arts for teenager development.",
    year: "2025"
  },
  {
    id: "school-football",
    title: "Secondary School Football Tournament",
    category: "sports",
    location: "Rivers State",
    description: "A highly coordinated sports tournament promoting raw grassroots athletic talent, discipline, and healthy peer interaction among high-schoolers.",
    year: "2024"
  },
  {
    id: "stem-enterprise",
    title: "STEM Enterprise Challenge",
    category: "academic",
    location: "Port Harcourt",
    description: "Leading secondary schools competing on digital technology designs, robotics construction, and scalable engineering modules.",
    year: "2025"
  },
  {
    id: "gov-excellence",
    title: "Government Capacity Building Projects",
    category: "corporate",
    location: "Rivers State",
    description: "Structured corporate and digital administration workshops aimed at upgrading civil service departments toward transparent, high-performance operations.",
    year: "2025"
  }
];

export const PARTNERSHIPS: Partnership[] = [
  {
    id: "british-council",
    name: "British Council Support Affiliate",
    role: "International Exam support",
    description: "Collaborative efforts in aiding IELTS preparation courses, Teacher Knowledge Test (TKT) candidate support, and facilitating international educational consulting.",
    logoPlaceholder: "BC"
  },
  {
    id: "sidmach",
    name: "Sidmach Technologies Limited",
    role: "Gold Partner",
    description: "Direct joint channel integration to deliver the WAEC E-Study platform, CBT examination setups, school technology deployment, and secure verification systems.",
    logoPlaceholder: "SM"
  },
  {
    id: "smart-host",
    name: "Smart-Host Cyber Security Company (USA)",
    role: "Strategic Security Alliance",
    description: "Co-implementing cybersecurity audits, enterprise networks, and advanced defense training workshops for schools, organizations, and public departments.",
    logoPlaceholder: "SH"
  },
  {
    id: "nusa",
    name: "Network USA (NUSA) Membership",
    role: "Strategic Educational Affiliate",
    description: "Fostering cultural initiatives, international educational guidance, and collaborative youth development programs aligned with global excellence.",
    logoPlaceholder: "NUSA"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Corporate Training Cohort",
    category: "training",
    location: "Executive Boardroom, Port Harcourt",
    description: "Operational Excellence workshop in progress with public administrators."
  },
  {
    id: "gal-2",
    title: "Owerri Bongo Fest Opening Ceremony",
    category: "festivals",
    location: "Owerri",
    description: "Cultural presentation of drum lines on the main festival stage."
  },
  {
    id: "gal-3",
    title: "Secondary School STEM presentation",
    category: "school",
    location: "School Tech Hub",
    description: "Students demonstrating their smart automation design as part of the STEM Enterprise Challenge."
  },
  {
    id: "gal-4",
    title: "Teen Talent Arena Showcase",
    category: "youth",
    location: "Auditorium, Port Harcourt",
    description: "Young creatives sharing their visual arts portfolios to a panel of expert judges."
  },
  {
    id: "gal-5",
    title: "Educational Technology Seminar",
    category: "school",
    location: "Seminar Hall",
    description: "Principals receiving brief reviews of the WAEC E-Study subscription dashboard."
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "blog-1",
    title: "Modernizing Secondary Education: Deploying CBT and Digital Classrooms",
    category: "Ed-Tech",
    author: "Consulting Division Editorial",
    date: "June 12, 2026",
    summary: "Discover how digitized testing models, including computerized examinations and the WAEC E-Study platform, drastically improve student passing rates and administrative oversight.",
    content: "Deploying high-quality software learning systems in secondary education represents more than a visual refresh; it is a critical shift in how students comprehend core information. Traditional revision tools often keep students disconnected from modern examination modes. Platforms like our WAEC E-Study platform, integrated in collaboration with Sidmach Technologies, bridge this divide by providing immediate mock exam responses, diagnostic analytics, and detailed teacher advisory tools. Ensuring your school is equipped for computer-based testing (CBT) setups preparing students for modern expectations must match teacher development support such as the TKT to see comprehensive positive academic results."
  },
  {
    // Exact requested blog topics from Phase 7:
    // 2. The Path to Corporate Agility: Implementing Performance Management Systems in Government and Private Sectors.
    id: "blog-2",
    title: "The Path to Corporate Agility: Implementing Performance Management",
    category: "Corporate Leadership",
    author: "Strategy Advisory Panel",
    date: "May 28, 2026",
    summary: "How modern, metrics-driven accountability frameworks and operational training empower teams to execute high-impact community and corporate goals.",
    content: "Institutional lag is a structural problem rather than an individual failure. Both government civil services and fast-growing private firms frequently struggle with performance alignment. By executing modern, professional corporate training initiatives, teams learn to isolate administrative blockers, monitor performance milestones, and optimize daily operations. Operational excellence translates high-level strategic plans into predictable, standard daily workflows. Our continuous support programs ensure capacity projects yield real structural value."
  },
  {
    // Exact requested blog topics from Phase 7:
    // 3. Defending Institutional Data: Why Cybersecurity Awareness Training is Critical for Modern Enterprises.
    id: "blog-3",
    title: "Defending Institutional Data: Why Cybersecurity Awareness is Critical",
    category: "Cybersecurity",
    author: "Information Security Team",
    date: "April 15, 2026",
    summary: "Institutional safety begins at the human layer. Discover why general cybersecurity awareness training prevents ransomware, data breaches, and system compromise.",
    content: "As organizations upgrade to modern digital layouts, they automatically open security vectors that simple software firewalls cannot comprehensively protect. Phishing emails, target social engineering, and weak configuration portals represent critical risks to corporate data assets. Smart-Host Cybersecurity analyses show over 85% of successful system breaches began via email social engineering. By equipping staff with structured Cybersecurity Awareness Workshops, organizations convert their team members into an active security perimeter, protecting sensitive institutional and student information."
  }
];

export const DOWNLOADS_CATALOG: DownloadItem[] = [
  {
    id: "doc-1",
    title: "Clear Impact Services Limited Corporate Profile",
    category: "Corporate",
    fileSize: "2.4 MB (PDF)",
    description: "Comprehensive review of our corporate, technology, consulting, and project management capabilities.",
    filePath: "#"
  },
  {
    id: "doc-2",
    title: "WAEC E-Study School License Guide",
    category: "Educational",
    fileSize: "1.1 MB (PDF)",
    description: "Detailed breakdown of CBT school software features, diagnostic testing elements, and institutional onboarding plans.",
    filePath: "#"
  },
  {
    id: "doc-3",
    title: "Executive Training Cohort Calendar",
    category: "Schedules",
    fileSize: "820 KB (PDF)",
    description: "Course curriculums, cohort timelines, facilitator profiles, and venue details for our 2026 Operational Excellence workshops.",
    filePath: "#"
  }
];
