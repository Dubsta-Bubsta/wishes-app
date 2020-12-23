import Axios from "axios";
import { useState, useEffect } from "react";
import { SelectorType } from "../components/common/FormComponents/Components/Dropdown";
import { useTranslation } from 'react-i18next'

export const useGetCountries = () => {
	const [searchText, setSearchText] = useState('')
	const [countries, setCountries] = useState<Array<SelectorType>>([])

	const { i18n } = useTranslation()
	const language = i18n.language

	useEffect(() => {
		(async () => {
			try {
				const response = await Axios.get(`
				http://geohelper.info/api/v1/countries?
				locale%5Blang%5D=${language}&
				filter%5Bname%5D=${searchText}&			
				apiKey=${process.env.REACT_APP_GEOHELPER_KEY}
			`)

			if (response.status === 200) {
				const selectors = response.data.result.map((city: any) => {
					return {
						value: city.iso3.toString(),
						label: city.name.toString()
					}
				})
				setCountries(selectors)

			} else {
				setCountries([])
			}
			} catch(e) {
				
			}
		})()
	}, [searchText, language]);

	return {
		searchText,
		setSearchText,
		countries
	}
}