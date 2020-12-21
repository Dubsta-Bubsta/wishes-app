import React, { FC } from 'react';
import { useGetCountries } from '../../../hooks/useGetCountries';
import { Input } from '../../common/FormComponents/FormComponents';
import BirthdayDropdown from './Blocks/BirthDropdown';
import LocationDropdown from './Blocks/LocationDropdown';
import { useTranslation } from 'react-i18next'

import './style.scss'

type PropsType = {
	name: string
	setName: (name: string) => void
	location: string
	setLocation: (location: string) => void
	bday: string
	setBday: (bday: string) => void
}
const SearchBlock: FC<PropsType> = ({ name, setName, location, setLocation, bday, setBday }) => {
	const { t } = useTranslation()
	const { countries, 	searchText,	setSearchText, } = useGetCountries()

    return (
		<div className="search-block">
			<Input
				value={name}
				onChange={(e: any) => setName(e.target.value)}
				placeholder={t("placeholders.name")}
			/>
		
			<LocationDropdown
				location={location}
				setLocation={setLocation}
				countries={countries}
				searchText={searchText}
				setSearchText={setSearchText}
			/>
			<BirthdayDropdown bday={bday} setBday={setBday}/>
	   </div>
    )
}
export default SearchBlock;
