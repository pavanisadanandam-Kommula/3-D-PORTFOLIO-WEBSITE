// Portfolio Content Constants for Kommula Pavani

export const PERSONAL_INFO = {
  name: "Kommula Pavani",
  title: "B.Tech AIML Student & Creative Developer",
  email: "pavanisadanandam@gmail.com",
  phone: "+91 9701928942",
  location: "Karimnagar, Telangana, India",
  bio: "Passionate about creating visually stunning and high-performance user interfaces, developing creative mail marketing campaigns, and deploying AI models into production.",
  profileImage: "/pavani-profile.png",
  socialLinks: {
    github: "https://github.com/pavanisadanandam-Kommula",
    linkedin: "https://www.linkedin.com/in/kommula-pavani-003873352",
    twitter: "#",
  },
}

export const EDUCATION = [
  {
    id: 1,
    institution: "Kamala Institute of Technology and Science",
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Machine Learning",
    duration: "Expected: 2027",
    cgpa: "8.0",
    details: "Pursuing B.Tech in AIML with focus on machine learning and AI applications",
  },
  {
    id: 2,
    institution: "SR Junior College",
    degree: "Intermediate",
    field: "MPC (Mathematics, Physics, Chemistry)",
    duration: "2021 - 2023",
    cgpa: "9.27",
    details: "Marks: 927",
  },
  {
    id: 3,
    institution: "T.S Model School, Elagandal",
    degree: "Secondary School Certificate (SSC)",
    field: "General",
    duration: "Completed",
    cgpa: "10.0",
    details: "Achieved perfect GPA in secondary school",
  },
]

export const SKILLS = {
  frontend: [
    { name: "HTML-CSS", level: 85 },
    { name: "UI/UX Designing", level: 88 },
    { name: "JavaScript", level: 80 },
    { name: "Responsive Design", level: 85 },
  ],
  backend: [
    { name: "Python", level: 82 },
    { name: "Git/GitHub", level: 85 },
    { name: "Jupyter Notebooks", level: 80 },
    { name: "C Language", level: 72 },
  ],
  tools: [
    { name: "Mail Marketing Campaigns", level: 87 },
    { name: "AI Implementation", level: 82 },
  ],
}

export const INTERNSHIPS = [
  {
    id: 1,
    company: "Zscaler",
    position: "Zero Trust Cloud Security Intern",
    duration: "2025",
    duration_short: "2025",
    location: "Remote",
    description: "Worked on access control policies and cloud perimeter architectures.",
    achievements: [
      "Implemented zero trust security models",
      "Designed and tested access control policies",
      "Collaborated on cloud perimeter architecture",
      "Enhanced security infrastructure",
    ],
    technologies: ["Security", "Cloud Architecture", "Access Control"],
  },
  {
    id: 2,
    company: "Google AIML",
    position: "Machine Learning Engineering Intern",
    duration: "2024 - 2025",
    duration_short: "2024-2025",
    location: "Remote",
    description: "Explored machine learning pipeline models and computer vision layers.",
    achievements: [
      "Studied ML pipeline architectures",
      "Explored computer vision applications",
      "Analyzed deep learning models",
      "Researched AI deployment strategies",
    ],
    technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
  },
  {
    id: 3,
    company: "Juniper Networks",
    position: "Network Engineering Intern",
    duration: "2024",
    duration_short: "2024",
    location: "Remote",
    description: "Learned SDN configurations and virtualization protocols.",
    achievements: [
      "Studied Software Defined Networking (SDN)",
      "Learned virtualization protocols",
      "Configured network systems",
      "Explored network security concepts",
    ],
    technologies: ["SDN", "Networking", "Virtualization", "Protocols"],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: "Vision Crop AI",
    description: "Leaf scan disease recognition web application with TensorFlow.js and Node.js",
    shortDescription: "AI-powered plant disease recognition",
    longDescription:
      "Hackathon-winning project that identifies crop diseases through leaf scanning using TensorFlow.js and Node.js backend. This application bridges AI and agriculture to help farmers detect and prevent crop diseases early.",
    technologies: ["TensorFlow.js", "Node.js", "HTML-CSS", "Python"],
    images: ["/projects/vision-crop-1.png", "/projects/vision-crop-2.jpg"],
    liveLink: "https://crop-vision-pro.vercel.app",
    githubLink: "https://github.com/pavanisadanandam-Kommula/crop-vision-pro.git",
    highlights: ["Hackathon Winner", "Internship Offer", "AI Disease Detection"],
  },
  {
    id: 2,
    title: "Smart Habit Tracker",
    description: "Gamified student schedule tracker with streak graphs and XP systems",
    shortDescription: "Gamified productivity and habit tracking",
    longDescription:
      "An engaging habit tracking application designed for students that gamifies productivity through streak tracking, XP systems, and achievement badges. Helps students build consistent study habits through visual motivation.",
    technologies: ["JavaScript", "HTML-CSS", "Python", "Data Visualization"],
    images: ["/projects/habit-tracker-1.png", "/projects/habit-tracker-2.jpg"],
    liveLink: "https://student-smart-habit-tracker.vercel.app",
    githubLink: "https://github.com/pavanisadanandam-Kommula/student-smart-habit-tracker.git",
    highlights: ["Gamification", "Streak Tracking", "Progress Visualization"],
  },
  {
    id: 3,
    title: "Organic Connect - Farm to Feast",
    description: "Direct marketplace bridging farmer logistics with retail customers",
    shortDescription: "Farm-to-table marketplace platform",
    longDescription:
      "An innovative e-commerce platform that directly connects farmers with retail customers, eliminating middlemen and ensuring fresh organic produce. Features logistics optimization and real-time inventory management.",
    technologies: ["Node.js", "Python", "Database Design", "UI/UX Design"],
    images: ["/projects/organic-connect-1.png", "/projects/organic-connect-2.jpg"],
    liveLink: "https://farm-to-feast.vercel.app",
    githubLink: "https://github.com/pavanisadanandam-Kommula/Farm_to_feast.git",
    highlights: ["Direct Farmer Connection", "Logistics Optimization", "Real-time Inventory"],
  },
  {
    id: 4,
    title: "Health-Care Blog",
    description: "Evidence-based wellness publication platform",
    shortDescription: "Health and wellness content platform",
    longDescription:
      "A comprehensive health and wellness blogging platform that publishes evidence-based articles on nutrition, fitness, mental health, and preventive care. Designed to provide reliable health information to the general public.",
    technologies: ["HTML-CSS", "JavaScript", "Content Management", "UI Design"],
    images: ["/projects/health-blog-1.png", "/projects/health-blog-screenshot-1.png", "/projects/health-blog-screenshot-2.png"],
    liveLink: null,
    githubLink: null,
    highlights: ["Evidence-Based Content", "Wellness Focus", "User-Friendly Design"],
  },
]

export const CERTIFICATES = [
  {
    id: 1,
    title: "Professional Certification in AI & Machine Learning",
    issuer: "Google AIML Program",
    date: "2024-2025",
    credentialId: "GOOGLE-AIML-2024",
    image: "/certificates/google-aiml.jpg",
    credentialUrl: "/certificates/google-aiml.jpg",
  },
  {
    id: 2,
    title: "Cloud Security Specialization",
    issuer: "Zscaler",
    date: "2025",
    credentialId: "ZSCALER-2025",
    image: "/certificates/zscaler-cert.jpg",
    credentialUrl: "/certificates/zscaler-cert.jpg",
  },
  {
    id: 3,
    title: "Network Engineering & SDN",
    issuer: "Juniper Networks",
    date: "2024",
    credentialId: "JUNIPER-2024",
    image: "/certificates/juniper-cert.jpg",
    credentialUrl: "/certificates/juniper-cert.jpg",
  },
  {
    id: 4,
    title: "Project Completion Certificate - Smart Habit Tracker",
    issuer: "Student Forge Technologies Pvt. Ltd.",
    date: "May 2026",
    credentialId: "STUDENTFORGE-SMART-HABIT-TRACKER-2026",
    image: "/certificates/internships/studentforge-smart-habit-tracker-whatsapp.jpg",
    credentialUrl: "/certificates/internships/studentforge-smart-habit-tracker.jpg",
  },
]

export const OFFER_LETTERS = [
  {
    id: 1,
    company: "Student Forge Technologies",
    position: "Web Development Intern",
    date: "March 2026",
    location: "Kompally, Hyderabad",
    summary: "Offer letter for a web development internship with Student Forge Technologies.",
    image: "/certificates/internships/student-forge.jpg",
  },
  {
    id: 2,
    company: "Prodigy InfoTech",
    position: "Generative AI Intern",
    date: "May 2026",
    location: "Remote",
    summary: "Offer letter for a generative AI internship role at Prodigy InfoTech.",
    image: "/certificates/internships/prodigy-infotech.jpg",
  },
  {
    id: 3,
    company: "SkillCraft Technology",
    position: "Web Development Intern",
    date: "June 2026",
    location: "Remote",
    summary: "Offer letter for a web development internship at SkillCraft Technology.",
    image: "/certificates/internships/skillcraft-technology.jpg",
  },
  {
    id: 4,
    company: "Decode Labs",
    position: "Python Programming Intern",
    date: "June 2026",
    location: "Remote / Virtual",
    summary: "Offer letter for a Python Programming internship at Decode Labs from 7 June to 7 July 2026.",
    image: "/certificates/internships/decode-labs.jpg",
  },
]

export const HACKATHON_ACHIEVEMENTS = [
  {
    id: 1,
    title: "Vision Crop AI",
    event: "IEEEXTRM Hackathon — Internship Opportunity",
    date: "Feb – Mar 2026",
    location: "IEEE SNIST SB",
    summary: "Participated in the IEEEXTRM Hackathon conducted by IEEE SNIST SB and built an AI-powered crop disease detection solution that earned an internship opportunity.",
    image: "/certificates/hackathon/hackathon-1.jpg",
  },
  {
    id: 2,
    title: "Organic Connect – Farm to Feast",
    event: "TRINITHACK 2K26 Hackathon",
    date: "Feb 2026",
    location: "Trinity College, Peddapalli",
    summary: "Successfully participated in TRINITHACK 2K26 Hackathon at Trinity College of Engineering & Technology, building a farm-to-table marketplace platform.",
    image: "/certificates/hackathon/hackathon-2.jpg",
  },
]

export const EMAIL_DESIGNS = [
  {
    id: 1,
    title: "Team Building Event",
    description: "Engaging team building invitation with clear event details, activities checklist, and warm orange accent colors",
    category: "Event Invitation",
    color: "bg-orange-500",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-30%20112731-GyqaCULhJeijIQdJ35WE9xO8Edxhek.png",
    accentColor: "orange",
  },
  {
    id: 2,
    title: "Healthy Table Hostel",
    description: "Premium hostel promotional email with purple header, feature grid layout highlighting key benefits and special offers",
    category: "Promotional",
    color: "bg-purple-600",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-30%20112802-efG2g9dmQof1z9ADiciiYf2UnOKG1g.png",
    accentColor: "purple",
  },
  {
    id: 3,
    title: "Hygienic Hut Opening Day",
    description: "Restaurant opening day email with teal accent, structured information layout, and table reservation call-to-action",
    category: "Restaurant Launch",
    color: "bg-teal-500",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-30%20113131-ESKE2N2BD5CnkLGh07ctUahHSmeYIs.png",
    accentColor: "teal",
  },
]

export const ACHIEVEMENTS = [
  {
    id: 1,
    type: "award",
    title: "Hackathon – Internship Opportunity",
    description: "Vision Crop AI project at IEEEXTRM Hackathon earned an internship opportunity",
    date: "2026",
    details: "Built innovative AI-powered crop disease detection system that received an internship offer",
    icon: "trophy",
  },
  {
    id: 2,
    type: "offer",
    title: "Internship Offers",
    description: "Received multiple internship offers from top tech companies",
    date: "2024-2025",
    details: "Accepted positions at Zscaler, Google AIML, and Juniper Networks",
    icon: "briefcase",
  },
  {
    id: 3,
    type: "recognition",
    title: "Multidisciplinary Skills",
    description: "Expertise in both technical development and design",
    date: "Ongoing",
    details: "Proficient in AI/ML, web development, UI/UX design, and marketing automation",
    icon: "code",
  },
]

export const CONTACT_INFO = {
  email: "pavanisadanandam@gmail.com",
  phone: "+91 9701928942",
  location: "Karimnagar, Telangana, India",
  message: "Let's collaborate! I'm open to discussing opportunities, freelance projects, or just connecting to share ideas and insights.",
}
