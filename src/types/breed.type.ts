interface BreedSummary {
  id: string
  name: string
  imageId: string
  description?: string
}

interface BreedSummaryResponse {
  id: string
  name: string
  reference_image_id: string
  description: string
}

interface BreedDetail {
  id: string
  name: string
  description: string
  temperament: string
  origin: string
  lifeSpan: string
  adaptability: number
  affectionLevel: number
  childFriendly: number
  grooming: number
  intelligence: number
  healthIssues: number
  socialNeeds: number
  strangerFriendly: number
}

interface BreedDetailResponse {
  id: string
  name: string
  description: string
  temperament: string
  origin: string
  life_span: string
  reference_image_id: string
  adaptability: number
  affection_level: number
  child_friendly: number
  grooming: number
  intelligence: number
  health_issues: number
  social_needs: number
  stranger_friendly: number
}

interface BreedImage {
  id: string
  url: string
  width: number
  height: number
}

interface BreedImageResponse {
  id: string
  url: string
  width: number
  height: number
}

export type { BreedSummary, BreedSummaryResponse, BreedDetail, BreedDetailResponse, BreedImage, BreedImageResponse }
