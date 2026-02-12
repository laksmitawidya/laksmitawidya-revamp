export interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Axrail.ai - AI-Powered Platform',
    description: `Currently developing and maintaining web applications using React and TypeScript at Axrail.ai, 
    an innovative AI platform. Building scalable frontend solutions with modern technologies and best practices.`,
    href: 'https://axrail.ai/',
  },
  {
    title: 'AccelByte - Gaming Backend Platform',
    description: `Built comprehensive admin portals and developer tools for AccelByte's gaming backend platform. 
    Developed features using React, Redux, and Electron for cross-platform desktop applications. Implemented 
    crash reporting, smart build systems, and playtest management tools used by game developers worldwide.`,
    href: 'https://accelbyte.io/',
  },
  {
    title: 'Okkami - Mobile Social Platform',
    description: `Developed mobile applications using React Native and Expo for Okkami's social platform. 
    Created intuitive user interfaces and implemented real-time features for seamless user experiences 
    across iOS and Android platforms.`,
    href: 'https://www.okkami.com/',
  },
  {
    title: 'Personal Portfolio Website',
    description: `Designed and developed my personal portfolio using Next.js, TypeScript, and TailwindCSS. 
    Features a modern, responsive design with optimized performance and accessibility. Showcases my projects, 
    blog posts, and professional journey.`,
    href: 'https://www.laksmitawidya.com/',
  },
  {
    title: 'Tiket.com - QA Engineering',
    description: `Performed comprehensive quality assurance testing for Tiket.com's web and mobile platforms. 
    Developed automated test scripts using Selenium and conducted manual testing to ensure platform reliability 
    and user satisfaction across Indonesia's leading travel booking platform.`,
    href: 'https://www.tiket.com/',
  },
  {
    title: 'Ralali.com - QA Testing',
    description: `Conducted quality assurance testing for Ralali.com's B2B e-commerce platform. 
    Implemented testing strategies, identified critical bugs, and ensured platform stability for 
    one of Indonesia's largest wholesale marketplaces.`,
    href: 'https://www.ralali.com/',
  },
]

export default projectsData
