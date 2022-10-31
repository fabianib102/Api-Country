import { CountryEntity } from '../../types'
import countriesData from './countries.json'

const countries: CountryEntity[] = countriesData as CountryEntity[]

export const getCountries = (): CountryEntity[] => countries

export const addEntry = () => null
