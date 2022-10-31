export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

export interface CountryEntity {
  name: string
  capital: string
  subregion: string
  region: Region
  population: number
  numericCode: string
  languages: Array<{
    name: string
    nativeName: string
  }>
  flag: string
  independent: boolean
}
