// ---------------------------------------------------------------------------
// Work experience + education timeline. Content mirrors the resume verbatim.
// ---------------------------------------------------------------------------

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'SellAnyCar.com',
    location: 'Dubai, UAE',
    period: 'May 2025 – Present',
    current: true,
    summary:
      'Building agentic AI solutions end to end: LLM-powered APIs and SDKs, prompt-engineering services, and real-time chat and WhatsApp integrations.',
    bullets: [
      'Developed and deployed end-to-end agentic solutions to automate customer touchpoints, optimizing resource allocation and scaling the conversion-led support architecture.',
      'Worked with the CEO to design and deliver accessible AI solutions for car dealerships, improving accuracy and speed for inspectors and buyers.',
      'Built and scaled APIs and SDKs for integrating AI models and agentic systems that automate customer touchpoints across our BuyAnyCar social platform.',
      'Implemented a modular prompt building service that increased prompt production rate for our AI agents by 50%.',
      'Designed and maintained scalable backend services for a car scanning system that integrates large language model capabilities to automate detail identification and improve operational speed by 40%.',
      'Architected and scaled APIs to support real-time chat functionality and WhatsApp integration across multiple applications to ensure seamless communication between buyers and sellers.',
      'Enhanced legacy CRM systems and optimized database performance by 30% to ensure high availability and improved efficiency for inspectors and dealers.',
      'Implemented social networking features within the BuyAnyCar application, enhancing user engagement and retention.',
      'Strengthened platform security and operational health by resolving critical vulnerabilities and implemented API rate limiting to prevent brute-force attacks.',
      'Authored comprehensive technical documentation and system architecture diagrams, reducing onboarding time for new hires.',
      'Collaborated with product managers and designers to translate ambiguous requirements into technical specifications for high-impact initiatives.',
    ],
  },
  {
    role: 'Backend Software Engineer',
    company: 'PMG',
    location: 'Dallas, Texas, USA',
    period: 'June 2023 – December 2024',
    summary:
      'Backend engineer on a software lifecycle analysis tool, engineering AI-driven features on AWS Bedrock and LangChain.',
    bullets: [
      'Designed and maintained scalable backend services for a software lifecycle analysis tool that integrated real-time data analytics to increase team efficiency by 25%.',
      'Identified and resolved a critical bottleneck in our cataloging module by implementing message queues using AWS SQS, improving system throughput by 40%.',
      'Engineered AI-driven applications that leverage large language models, AWS Bedrock and LangChain, streamlining data processing tasks and enabling personalized user experiences, which improved marketing campaign targeting and customer engagement by 30%.',
      'Implemented rigorous maintenance routines and industry best practices for quality assurance to ensure high availability and reduce system downtime.',
      'Mentored new team members on best practices for Python and FastAPI, resulting in quicker onboarding and increased delivery velocity.',
      'Optimized database schemas and queries to ensure low latency and a 20% increase in data retrieval speed for client-facing applications.',
      'Strengthened the backbone of application governance by integrating authentication protocols and security best practices to ensure an auditable and secure production environment.',
    ],
  },
  {
    role: 'Full Stack Software Engineer',
    company: 'ESSIC (University of Maryland)',
    location: 'Rockville, Maryland, USA',
    period: 'November 2021 – May 2023',
    summary:
      'Full-stack engineer on a crop planning and weather forecasting platform for the Earth System Science Interdisciplinary Center.',
    bullets: [
      'Built a dynamic management dashboard for crop planning and weather forecasting using React and Material UI.',
      'Developed interactive data visualizations that improved data processing efficiency for users by 30% and greatly improved resource allocation.',
      'Designed responsive widgets to display real-time meteorological data across mobile and desktop devices.',
      'Automated real-time data updates via websockets, ensuring users have access to the most current forecasts.',
      'Integrated multiple third-party APIs to fetch and sync live weather and agricultural data.',
    ],
  },
];

export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    school: 'University of Maryland',
    location: 'College Park, Maryland',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Graduated 2023',
  },
];
