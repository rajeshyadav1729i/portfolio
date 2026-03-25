import { 
  Code2, Database, Layout, Server, Smartphone, 
  Terminal, Globe, Cpu, Github, Linkedin, Mail 
} from 'lucide-react';

export const portfolioData = {
  home: {
    name: "Rajesh Yadav",
    role: "Software Developer & Engineering Student",
    tagline: "Building digital products, brands, and experiences.",
    description: "I am a passionate software engineer specializing in building scalable web applications and developing strong fundamentals in data structures, algorithms, and OOP.",
    typingTexts: ["Software Developer.", "Problem Solver.", "Tech Enthusiast.", "Continuous Learner."],
    socialLinks: [
      { name: "GitHub", url: "https://github.com", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { name: "Email", url: "mailto:rajesh@example.com", icon: "Mail" }
    ]
  },
  
  about: {
    title: "About Me",
    bio: "Hello! I'm Rajesh Yadav, a computer science student at Lovely Professional University with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Dedicated to problem-solving, algorithms, and exploring modern web technologies.",
    highlights: [
      "B.Tech in Computer Science and Engineering",
      "Strong foundation in C++, OOP, and Data Structures",
      "Experience with Frontend Web Development (HTML/CSS/JS/React)",
      "Continuous learner and tech community active member"
    ]
  },

  resume: {
    title: "Resume",
    description: "Download my complete resume to see full details of my technical skills, projects, and education.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1dNGSjKV2pwXsbAJEUOSTacx0W_H4KN8L"
  },

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University (Phagwara, Punjab)",
      period: "Aug' 23 – Present",
      description: "CGPA : 7.0"
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "DAV Inter Collage (Sant Kabir Nagar, UP)",
      period: "Mar' 21 – May' 22",
      description: "PCM; Percentage: 76.2%"
    },
    {
      id: 3,
      degree: "Matriculation",
      institution: "PKIC School (Sant Kabir Nagar, UP)",
      period: "Mar' 19 – May' 20",
      description: "Percentage: 86.67%"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Trainee - OOPs and Data Structures with C++",
      company: "CSE PATHSHALA",
      period: "Jun' 25 – Aug' 25",
      description: "Gained in-depth knowledge of Object-Oriented Programming (OOP) concepts such as classes, inheritance, polymorphism, encapsulation, and abstraction using C++. Implemented key Data Structures including arrays, linked lists, stacks, queues, trees, and graphs. Crafted efficient and modular code following best C++ programming practices and debugging techniques.",
      technologies: ["C++", "Data Structures", "OOP"]
    }
  ],

  skills: {
    frontend: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "PHP", level: 60 },
      { name: "C++", level: 85 },
      { name: "Data Structures", level: 80 },
      { name: "OOP", level: 85 }
    ],
    tools: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Problem Solving", level: 85 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Event Management Calander",
      description: "Developed an interactive calendar-based application that enables users to create, update, and delete events with real-time synchronization. Implemented reminders and notifications for upcoming events. Spiked productivity by simplifying event scheduling.",
      image: "https://images.unsplash.com/photo-1506784951206-b3334bb2f5a6?q=80&w=2000&auto=format&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS", "PHP"],
      githubUrl: "https://github.com",
      liveUrl: ""
    },
    {
      id: 2,
      title: "Online Salon Boooking System",
      description: "Designed and developed a responsive website that allows users to book salon appointments by selecting services, stylists, and preferred time slots. Implemented client-side form validation and interactive features to ensure smooth and error-free bookings.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: ""
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Nov' 25",
      credentialUrl: ""
    },
    {
      id: 2,
      title: "C, C++ and DSA with C++",
      issuer: "NeoColab",
      date: "Aug' 25",
      credentialUrl: ""
    },
    {
      id: 3,
      title: "Packet Switching Network and Algorithm",
      issuer: "Coursera",
      date: "May' 24",
      credentialUrl: ""
    },
    {
      id: 4,
      title: "HTML, CSS, JavaScript",
      issuer: "FreeCodeCamp",
      date: "Mar' 23",
      credentialUrl: ""
    }
  ],

  achievements: [
    {
      id: 1,
      title: "LeetCode 50+ Questions Solved",
      description: "Successfully solved 50+ algorithmic problems on LeetCode focusing on data structures, dynamic programming, and optimization.",
      date: "2024"
    }
  ],

  hackathons: [
    // Empty array since none provided in the latest message
  ],

  research: [
    // Empty array since none provided in the latest message
  ],

  contact: {
    email: "rajesh@example.com",
    phone: "+91 xxxxx xxxxx",
    location: "Punjab, India",
    mapLink: "https://maps.google.com"
  }
};
