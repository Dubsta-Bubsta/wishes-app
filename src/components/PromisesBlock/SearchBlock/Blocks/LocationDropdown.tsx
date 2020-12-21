import React, { FC, useEffect, useState } from 'react';
import { SelectorType } from '../../../common/FormComponents/Components/Dropdown';
import { Dropdown } from '../../../common/FormComponents/FormComponents';
import { useTranslation } from 'react-i18next'

import '../style.scss'

type PropsType = {
	location: string
	setLocation: (location: string) => void
	countries: Array<SelectorType>

	searchText: string
	setSearchText: (search: string) => void

	style?: any
}

const LocationDropdown: FC<PropsType> = ({ location, setLocation, countries, searchText, setSearchText, style }) => {
	const { t } = useTranslation()

	return (
		<div className="location-dropdown" style={style}>
			<Dropdown
				selectedID={location.toString()}
				data={countries}
				handleChange={(value) => setLocation(value.toString())}
				placeholder={t("placeholders.country")}
				search={{
					search: searchText,
					setSearch: setSearchText
				}}
			/>
		</div>
	)
}
export default LocationDropdown;
