import siteMetadata from '@/data/siteMetadata'
import SocialIcon from './social-icons'

const SocialMedia = () => {
  return (
    <div className="mb-3 flex space-x-4">
      <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
      <SocialIcon kind="github" href={siteMetadata.github} size={6} />
      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
    </div>
  )
}

export default SocialMedia
