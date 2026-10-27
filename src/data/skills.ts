// ---------------------------------------------------------------------------
// Skills grouped by category. `level` is an honest self-assessment 1-5
// shown as animated bars on the e-resume page.
// ---------------------------------------------------------------------------

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'JavaScript / TypeScript', level: 4 },
      { name: 'PHP', level: 4 },
      { name: 'SQL', level: 4 },
    ],
  },
  {
    category: 'AI / LLM',
    skills: [
      { name: 'LangChain', level: 4 },
      { name: 'LlamaIndex', level: 4 },
      { name: 'AWS Bedrock', level: 4 },
      { name: 'Prompt Engineering', level: 5 },
      { name: 'Agentic AI Systems', level: 5 },
      { name: 'ElevenLabs Voice Agents', level: 4 },
      { name: 'OpenRouter (multi-model routing)', level: 4 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', level: 5 },
      { name: 'Flask', level: 4 },
      { name: 'Django', level: 4 },
      { name: 'Laravel', level: 4 },
      { name: 'Node.js / Express', level: 4 },
      { name: 'REST APIs', level: 5 },
      { name: 'WebSockets', level: 4 },
      { name: 'Message Queues (SQS)', level: 4 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Material UI', level: 4 },
      { name: 'HTML / CSS', level: 4 },
      { name: 'Responsive Design', level: 4 },
    ],
  },
  {
    category: 'Data & Storage',
    skills: [
      { name: 'PostgreSQL', level: 4 },
      { name: 'MongoDB', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Redis', level: 4 },
      { name: 'Google BigQuery', level: 3 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 4 },
      { name: 'GCP', level: 3 },
      { name: 'Docker', level: 4 },
      { name: 'CI / Git Workflows', level: 4 },
    ],
  },
];
