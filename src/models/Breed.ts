import { BreedDetailResponse } from '~/types/breed.type'

class Breed {
  _id!: string
  _name!: string
  _description!: string
  _temperament!: string
  _origin!: string
  _lifeSpan!: string
  _imageId: string
  _adaptability!: number
  _affectionLevel!: number
  _childFriendly!: number
  _grooming!: number
  _intelligence!: number
  _healthIssues!: number
  _socialNeeds!: number
  _strangerFriendly!: number

  constructor(
    id: string,
    name: string,
    description: string,
    temperament: string,
    origin: string,
    lifeSpan: string,
    imageId: string,
    adaptability: number,
    affectionLevel: number,
    childFriendly: number,
    grooming: number,
    intelligence: number,
    healthIssues: number,
    socialNeeds: number,
    strangerFriendly: number
  ) {
    this._id = id
    this._name = name
    this._description = description
    this._temperament = temperament
    this._origin = origin
    this._lifeSpan = lifeSpan
    this._imageId = imageId
    this._adaptability = adaptability
    this._affectionLevel = affectionLevel
    this._childFriendly = childFriendly
    this._grooming = grooming
    this._intelligence = intelligence
    this._healthIssues = healthIssues
    this._socialNeeds = socialNeeds
    this._strangerFriendly = strangerFriendly
  }

  static fromRequestResponse(obj: BreedDetailResponse): Breed {
    return new Breed(
      obj.id,
      obj.name,
      obj.description,
      obj.temperament,
      obj.origin,
      obj.life_span,
      obj.reference_image_id,
      obj.adaptability,
      obj.affection_level,
      obj.child_friendly,
      obj.grooming,
      obj.intelligence,
      obj.health_issues,
      obj.social_needs,
      obj.stranger_friendly
    )
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get description(): string {
    return this._description
  }

  get temperament(): string {
    return this._temperament
  }

  get origin(): string {
    return this._origin
  }

  get lifeSpan(): string {
    return this._lifeSpan
  }

  get imageId(): string {
    return this._imageId
  }

  get adaptability(): number {
    return this._adaptability
  }

  get affectionLevel(): number {
    return this._affectionLevel
  }

  get childFriendly(): number {
    return this._childFriendly
  }

  get grooming(): number {
    return this._grooming
  }

  get intelligence(): number {
    return this._intelligence
  }

  get healthIssues(): number {
    return this._healthIssues
  }

  get socialNeeds(): number {
    return this._socialNeeds
  }

  get strangerFriendly(): number {
    return this._strangerFriendly
  }
}

export default Breed
