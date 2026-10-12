import certificatesData from './certificates-manifest.json';

export const portfolioData = {
  personal: {
    name: "Shriya Sanjay Yerane",
    shortName: "Shriya Yerane",
    title: "Software Developer & AI/ML Engineer",
    role: "B.Tech Computer Science Student | AI/ML & Agentic AI Specialist",
    tagline: "Building intelligent software systems, agentic AI workflows, and data-driven cloud architectures.",
    email: "shriyayerane@gmail.com",
    phone: "+91 7757924820",
    rawPhone: "7757924820",
    location: "Nagpur, Maharashtra, India",
    github: "https://github.com/shriya07413",
    githubUsername: "shriya07413",
    linkedin: "https://linkedin.com/in/shriya-yerane", // Placeholder TODO: update with exact profile URL
    avatar: "/assets/images/shriya_portrait.jpg",
    resumePdf: "/assets/resume/Shriya_Sanjay_Yerane_Resume.pdf",
    resumeFilename: "Shriya_Sanjay_Yerane_Resume.pdf",
    resumePreview: "/assets/thumbnails/resume_preview.png",
    availability: "Open to Internships & Engineering Roles",
  },

  summary: `3rd-year B.Tech Computer Science Engineering student with a deep focus on Software Development, AI/ML, Web Development, and Automation. Hands-on experience through academic projects and a one-month internship at PremitiveKey specializing in AI development, agentic AI, and frontend web engineering. Familiar with Retrieval-Augmented Generation (RAG) systems, machine learning workflows, APIs, and automation tools such as Make.com and webhooks. Completed multiple industry job simulations with Deloitte and Forage in AI, Generative AI, and Data Analytics. Seeking an engineering internship to apply and scale these technical skills in a high-impact production environment.`,

  stats: [
    { label: "Academic Standing", value: "3rd Year", subtext: "B.Tech CSE" },
    { label: "CGPA", value: "7.09", subtext: "SIT Nagpur" },
    { label: "Engineering Projects", value: "4+", subtext: "AI, RAG & Cloud" },
    { label: "Industry Credentials", value: "9+", subtext: "Red Hat, Deloitte, Forage" },
    { label: "Athletic Honors", value: "3x", subtext: "CBSE National Player" },
  ],

  skillsCategories: [
    {
      category: "Programming Languages",
      icon: "Code2",
      description: "Core languages for systems, algorithms, and application development",
      skills: [
        { name: "Python", level: "Advanced", badge: "Primary" },
        { name: "Java", level: "Proficient" },
        { name: "C", level: "Proficient" },
        { name: "C++", level: "Proficient" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Dart", level: "Familiar" },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "BrainCircuit",
      description: "Machine learning modeling, agentic systems, and retrieval architectures",
      skills: [
        { name: "Agentic AI", level: "Certified", badge: "Specialty" },
        { name: "Generative AI", level: "Advanced" },
        { name: "RAG Systems", level: "Advanced", badge: "Specialty" },
        { name: "Machine Learning", level: "Advanced" },
        { name: "LangChain", level: "Proficient" },
        { name: "FAISS", level: "Proficient" },
        { name: "XGBoost", level: "Proficient" },
        { name: "Scikit-learn", level: "Proficient" },
        { name: "Pandas & NumPy", level: "Advanced" },
      ]
    },
    {
      category: "Web & Frameworks",
      icon: "Layout",
      description: "Full-stack development, modern UI libraries, and microservice backends",
      skills: [
        { name: "React", level: "Proficient", badge: "Frontend" },
        { name: "FastAPI", level: "Proficient", badge: "Backend" },
        { name: "Streamlit", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "Flutter", level: "Familiar" },
        { name: "REST APIs", level: "Advanced" },
      ]
    },
    {
      category: "Databases & Cloud Systems",
      icon: "Database",
      description: "Data storage, relational schemas, cloud services, and real-time stores",
      skills: [
        { name: "SQL", level: "Proficient" },
        { name: "SQLite", level: "Proficient" },
        { name: "Supabase", level: "Proficient" },
        { name: "Firebase", level: "Proficient" },
        { name: "Red Hat Linux (RH124)", level: "Certified" },
      ]
    },
    {
      category: "DevOps, Automation & Tools",
      icon: "Workflow",
      description: "Version control, workflow automations, and enterprise orchestration",
      skills: [
        { name: "Make.com & Webhooks", level: "Specialist", badge: "Internship" },
        { name: "Red Hat Ansible (DO457)", level: "Certified" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Arduino / Embedded", level: "Academic" },
      ]
    }
  ],

  experience: [
    {
      role: "AI Development Intern (Agentic AI & Frontend Development)",
      company: "PremitiveKey",
      location: "Mumbai, Maharashtra (Remote / Hybrid)",
      period: "May 20, 2026 – Jun 30, 2026",
      type: "Internship",
      highlights: [
        "Developed and optimized responsive web pages using HTML, CSS, and JavaScript, elevating UI/UX consistency, visual polish, and cross-browser performance.",
        "Explored autonomous agentic AI workflows and built mission-critical business automations using Make.com and webhooks, including WhatsApp API integration and real-time product catalog synchronization.",
        "Implemented robust client-side form validation, basic SEO best practices, and systematic testing/debugging workflows to ensure high-reliability web features.",
        "Collaborated on prompt engineering pipelines and iterative testing to streamline recurring business processes."
      ],
      technologies: ["Agentic AI", "Make.com", "Webhooks", "JavaScript", "HTML5", "CSS3", "WhatsApp API", "SEO"]
    }
  ],

  projects: [
    {
      id: "cloud-autoscaling",
      title: "ML-Driven Auto-Scaling & Cost Optimization Framework for Cloud Resource Management",
      category: "Machine Learning & Cloud",
      featured: true,
      description: "An intelligent predictive framework utilizing XGBoost and LSTM deep learning architectures to forecast incoming cloud workload requirements and dynamically automate auto-scaling decisions, minimizing latency spikes while preventing costly over-provisioning.",
      details: [
        "Architecting dual predictive models (XGBoost + LSTM) trained on cloud utilization timeseries to anticipate traffic surges before resource bottlenecks occur.",
        "Developing a high-performance FastAPI backend microservice to deliver low-latency real-time inference and scaling triggers.",
        "Building an interactive Streamlit analytics dashboard for real-time telemetry, visualizing resource allocation curves, scaling actions, and monetary cost savings.",
        "Aimed at optimizing cloud infrastructure expenditure without compromising service SLAs."
      ],
      technologies: ["Python", "XGBoost", "LSTM", "FastAPI", "Streamlit", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/shriya07413", // TODO: Update with specific repo link when available
      demoUrl: null,
      status: "In Active Development"
    },
    {
      id: "trustworthy-rag",
      title: "Trustworthy Retrieval-Augmented Generation (RAG) System",
      category: "Generative AI & LLMs",
      featured: true,
      description: "A robust backend-focused RAG pipeline that retrieves contextually precise domain documents and synthesizes factually grounded AI answers, mitigating hallucinations through vector similarity scoring and verifiable citations.",
      details: [
        "Engineered semantic search and chunking pipelines using LangChain, sentence-transformers embeddings, and FAISS vector indices.",
        "Integrated SQLite persistent storage to maintain conversation history, metadata logs, and document provenance records.",
        "Constructed an intuitive Streamlit interface allowing interactive querying, vector distance inspection, and contextual evidence review.",
        "Employed hallucination-reduction techniques to deliver verifiable, trustworthy responses."
      ],
      technologies: ["Python", "LangChain", "FAISS", "Sentence-Transformers", "SQLite", "Streamlit"],
      githubUrl: "https://github.com/shriya07413", // TODO: Update with specific repo link when available
      demoUrl: null,
      status: "Completed Academic Project"
    },
    {
      id: "intelligent-chatbot",
      title: "Intelligent Conversational Chatbot",
      category: "NLP & Conversational AI",
      featured: false,
      description: "An academic conversational AI system designed to parse, classify, and comprehend user intent across varied domains, generating coherent and contextually aligned replies.",
      details: [
        "Applied core Natural Language Processing (NLP) techniques for tokenization, intent recognition, and entity extraction.",
        "Built modular response generation logic to provide helpful and dynamic guidance to users.",
        "Demonstrated practical applications of conversational state management and user dialogue trees."
      ],
      technologies: ["Python", "Conversational AI", "NLP", "APIs", "Data Structures"],
      githubUrl: "https://github.com/shriya07413",
      demoUrl: null,
      status: "Completed Academic Project"
    },
    {
      id: "arduino-rain-shade",
      title: "Automatic Rain Shade System Using Arduino",
      category: "Embedded Systems & IoT",
      featured: false,
      description: "An automated IoT/embedded system that senses precipitation in real time and automatically deploys a protective shade cover mechanism, integrating hardware sensors with actuator motor controls.",
      details: [
        "Interfaced rain drop sensor modules with Arduino microcontrollers to read analog moisture thresholds.",
        "Programmed motor driver logic in C/C++ to smoothly actuate physical shade covers upon detecting rain triggers.",
        "Implemented fail-safes and manual override capabilities for weather-resistant automation."
      ],
      technologies: ["Arduino", "Embedded C/C++", "Sensors", "Actuators", "Hardware Integration"],
      githubUrl: "https://github.com/shriya07413",
      demoUrl: null,
      status: "Completed Academic Project"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Symbiosis Institute of Technology, Nagpur",
      period: "2024 – 2028",
      status: "Current (3rd Year)",
      score: "CGPA: 7.09",
      highlights: [
        "Specializing in Software Systems, Artificial Intelligence, and Cloud Computing.",
        "Active member of SIT Nagpur Sports Club and collegiate Futsal Team.",
        "Participant in hackathons including Smart India Hackathon (SIH) and technical symposiums."
      ]
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "High School Board",
      period: "Completed",
      status: "Graduated",
      score: "58.2%",
      highlights: ["Science stream with mathematics and computer science fundamentals."]
    },
    {
      degree: "Secondary School Examination (Class X)",
      institution: "High School Board",
      period: "Completed",
      status: "Graduated",
      score: "71.2%",
      highlights: ["Strong foundation in sciences, mathematics, and co-curricular sports."]
    }
  ],

  certificates: certificatesData,

  achievements: [
    {
      title: "CBSE Nationals Representation — Kho Kho",
      year: "2015–16 & 2017–18",
      category: "Sports Excellence",
      description: "Twice selected and represented at the National level in Kho Kho for CBSE schools across India, demonstrating athletic agility, teamwork, and high-pressure competitive focus."
    },
    {
      title: "CBSE Nationals Representation — Football",
      year: "2017–18",
      category: "Sports Excellence",
      description: "Represented at the CBSE National Championship in Football, exhibiting endurance, strategic on-field communication, and discipline."
    },
    {
      title: "Sports Coordinator — SIT Nagpur Sports Club",
      year: "2024–2025",
      category: "Leadership",
      description: "Coordinated inter-college and intra-college athletic tournaments, managed logistics, and promoted student engagement across university sporting events."
    },
    {
      title: "SIT Nagpur Futsal Team Player",
      year: "2024–2025 & 2026–2027",
      category: "Collegiate Athletics",
      description: "Active member of the university futsal squad, regularly competing in inter-collegiate leagues."
    },
    {
      title: "Hackathon Competitor (Smart India Hackathon - SIH)",
      year: "Academic",
      category: "Technical",
      description: "Participated in national and college-level hackathons solving real-world challenges with software and AI solutions."
    }
  ]
};
