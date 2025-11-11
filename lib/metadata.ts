const description = `Les Capsules sont un groupe d'amis de Sauclières dans le sud-Aveyron.`
const title = 'Les Capsules'
const baseUrl = process.env.NEXT_PUBLIC_REVIEW_ID
  ? `https://deploy-preview-${process.env.NEXT_PUBLIC_REVIEW_ID}--lescapsules.netlify.app`
  : `https://www.lescapsules.com`
const gaTrackingId =
  process.env.NEXT_PUBLIC_PRODUCTION_DEPLOY === 'true' ? 'G-Q6XBC0V997' : 'G-xxx'

export const siteMetadata = {
  title,
  description,
  siteUrl: baseUrl,
  keywords: 'Sauclières, Capsules, Fete, soirée, concert, village',
  gaTrackingId,
}
