import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  path?: string
}

const BASE_TITLE = 'PlainAI'
const BASE_URL = 'https://plainai.dev' // placeholder
const DEFAULT_DESCRIPTION = 'AI explained simple and plain for every profession. Free guides with tools, prompts, workflows, and action plans.'

export function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = title ? `${title} - ${BASE_TITLE}` : `${BASE_TITLE} - AI made simple for every profession`
  const desc = description || DEFAULT_DESCRIPTION
  const url = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
