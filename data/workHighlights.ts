import {
  Bot,
  Database,
  FileText,
  HeartPulse,
  Landmark,
  Settings,
  ShieldCheck,
  Sprout,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Tone } from '@/components/ui/Selection'

export interface WorkHighlight {
  icon: LucideIcon
  category: string
  title: string
  description: string
  tags: string[]
  stat: 'POC' | 'Go-Live' | 'Ongoing'
  tone: Tone
  /** Short outcomes listed beside the description */
  points: string[]
}

const workHighlights: WorkHighlight[] = [
  {
    icon: Landmark,
    category: 'Banking · Document AI',
    title: 'Loan & Mortgage AI Document Processing',
    description:
      "AI-powered document processing for a banking group's loan and mortgage workflows, delivered full-stack.",
    tags: ['React', 'Python', 'AWS Lambda', 'AI'],
    stat: 'Ongoing',
    tone: 'mint',
    points: [
      'Loan & mortgage workflows',
      'React frontend + Python on Lambda',
      'Third-party API integrations',
    ],
  },
  {
    icon: Bot,
    category: 'Gen AI',
    title: 'Chatbot Admin Portal & RAG Chatbot',
    description:
      'RAG chatbot reaching ~90% answer accuracy, powered by AWS CDK, QuickSight, and Nova Pro.',
    tags: ['React', 'AWS', 'CDK', 'Bedrock', 'RAG'],
    stat: 'POC',
    tone: 'lilac',
    points: ['~90% answer accuracy', 'Admin portal for knowledge bases', 'QuickSight analytics'],
  },
  {
    icon: FileText,
    category: 'Document AI',
    title: 'Litigation Text Extraction',
    description:
      'Document extraction with ~90% accuracy across newspapers, CEDs, and Gazettes using Sonnet 4.',
    tags: ['Lambda', 'S3', 'Textract', 'Bedrock'],
    stat: 'POC',
    tone: 'sky',
    points: ['Newspapers, CEDs & Gazettes', '~90% extraction accuracy', 'Serverless pipeline'],
  },
  {
    icon: Settings,
    category: 'Admin Portal',
    title: 'Text Extraction Admin Portal',
    description:
      'Scalable React + TypeScript portal with automated CI/CD pipeline and image processing.',
    tags: ['React', 'TypeScript', 'CI/CD'],
    stat: 'Go-Live',
    tone: 'rose',
    points: ['Image-processing workflows', 'Automated CI/CD', 'Shipped to production'],
  },
  {
    icon: Database,
    category: 'Data & AI',
    title: 'Redshift Knowledge Base',
    description: 'Integrated Redshift as an alternative knowledge base source for the POC chatbot.',
    tags: ['Redshift', 'AWS', 'Bedrock', 'Lambda'],
    stat: 'POC',
    tone: 'butter',
    points: ['Structured data as a KB source', 'Bedrock + Lambda', 'Query-ready answers'],
  },
  {
    icon: ShieldCheck,
    category: 'Data Management',
    title: 'Data Asset Management Portal',
    description: 'Built from scratch with Playwright E2E testing and full VAPT compliance.',
    tags: ['React', 'Playwright', 'VAPT'],
    stat: 'Go-Live',
    tone: 'mint',
    points: ['Built from scratch', 'Playwright E2E suite', 'Full VAPT compliance'],
  },
  {
    icon: Sprout,
    category: 'Agronomy',
    title: 'Agronomy Admin Portal',
    description: 'Cross-team delivery featuring postMessage auth POC and hands-on team mentoring.',
    tags: ['React', 'TypeScript', 'Auth'],
    stat: 'Go-Live',
    tone: 'lilac',
    points: ['postMessage auth POC', 'Cross-team delivery', 'Mentored the team'],
  },
  {
    icon: HeartPulse,
    category: 'Healthcare',
    title: 'Healthcare Admin Portal',
    description:
      'Refactored for VAPT and SonarQube compliance, resolving circular dependencies across cross-functional teams.',
    tags: ['React', 'SonarQube', 'VAPT'],
    stat: 'Go-Live',
    tone: 'sky',
    points: ['VAPT & SonarQube clean', 'Untangled circular deps', 'Cross-functional teams'],
  },
]

export default workHighlights
