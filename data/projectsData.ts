export interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LAD Platform — Banking Sector',
    description:
      'Full-stack Gen AI solution for a major banking group, built on top of a LAD (Loan Administration & Documentation) platform. Delivered the admin portal in React + TypeScript, set up AWS CDK infrastructure, integrated QuickSight analytics, and extended beyond frontend scope to build Python-based BFF services and third-party API integrations on AWS Lambda.',
  },
  {
    title: 'Data Asset Management Portal',
    description:
      'Secure data governance portal for a Singapore-based organisation, built with full VAPT compliance. Designed the frontend architecture, enforced security-first data access patterns, and collaborated with backend engineers on API contracts and data flow.',
    href: 'https://digitalhub.ipos.gov.sg/FAMN/process/IP4SG/MN_Index',
  },
  {
    title: 'Agronomy Intelligence Portal',
    description:
      'AI-powered admin portal for an agrochemical enterprise, enabling business users to independently manage chatbot knowledge bases and agronomy workflows — eliminating engineering bottlenecks for content updates. Built on React + TypeScript with an AWS Bedrock knowledge pipeline.',
    href: 'https://www.yara.com/digital-farming/our-digital-farming-solutions/',
  },
  {
    title: 'Neonatal Monitoring Portal',
    description:
      'Clinical admin portal for neonatal jaundice monitoring, featuring real-time clinical dashboards and image-based bilirubin tracking workflows. Translated complex clinical requirements into a precise, accessible interface in close collaboration with healthcare domain experts.',
    href: 'https://www.sgh.com.sg/news/innovation/new-app-will-allow-parents-to-test-their-babies-for-jaundice-fro',
  },
  {
    title: 'Gen AI Proof-of-Concepts: Litigation Document Extraction System',
    description:
      'Series of R&D prototypes at Axrail: Automated document extraction pipeline for litigation case processing, achieving ~90% accuracy on legal documents via AWS Bedrock. Delivered the React + TypeScript admin portal, integrated image-processing workflows, and established automated CI/CD — significantly reducing manual document handling for legal teams.',
  },
  {
    title: 'Gen AI Proof-of-Concepts: Chatbot',
    description:
      'Series of R&D prototypes at Axrail: a speech-to-speech app, a Redshift knowledge-base integration, SSO/authentication workflow POCs, and semantic search improvements by resolving embedding quality issues — all built using AWS Bedrock, Lambda, and related services.',
  },
  {
    title: 'AccelByte — Gaming Backend Platform',
    description:
      'Five years building scalable admin portals and developer tools powering gaming services for studios including Striking Distance Studio and 2K. Stack: React, Remix, AstroJS, Electron (desktop), Redux, Storybook. Introduced a Yarn Workspaces monorepo, led E2E testing with Jest + Playwright, and built Node.js BFF services (Koa/Express) to optimise backend data for frontend consumption.',
    href: 'https://accelbyte.io/',
  },
  {
    title: 'AccelByte Development Toolkit (ADT)',
    description:
      'Built the frontend for ADT, a platform that helps development and QA teams get the right game build to testers, collect structured bug reports, and understand crashes without chasing missing details. Covers playtesting management, crash reporting, and build distribution workflows used by game studios worldwide.',
    href: 'https://accelbyte.io/development-toolkit',
  },
  {
    title: 'Okkami — Hotel Guest Experience App',
    description:
      'Mobile applications for hotel guest services using React Native, Redux, and Sagas — deployed across iOS and Android. Improved code documentation, resolved performance bottlenecks, and maintained high test coverage with Jest to keep the app reliable at scale.',
    href: 'https://www.okkami.com/',
  },
  {
    title: 'Tiket.com — QA Engineering',
    description:
      "Quality assurance for one of Indonesia's leading travel booking platforms. Developed test plans, executed regression and smoke tests, documented defects, and participated in design sprint activities. Used TestRail and researched Selenium and Appium automation tooling.",
    href: 'https://www.tiket.com/',
  },
  {
    title: 'Ralali.com — QA Engineering',
    description:
      'Quality assurance for a B2B wholesale marketplace. Designed and executed test cases following software quality standards, analysed requirements and UX goals, and delivered daily defect reports — grounding early engineering instincts in rigour and reliability.',
    href: 'https://www.ralali.com/',
  },
]

export default projectsData
