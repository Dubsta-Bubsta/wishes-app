import Axios from "axios";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next'

export const useGetLocation = (locationCode: string, setLocation: (loc: string) => void) => {
	const { i18n } = useTranslation()
	const language = i18n.language

    useEffect(() => {
        (async () => {
            if (locationCode) {
               try {
                const response = await Axios.get(`
                http://geohelper.info/api/v1/countries?
                locale%5Blang%5D=${language}&
                filter%5Biso3%5D=${locationCode}&			
                apiKey=${process.env.REACT_APP_GEOHELPER_KEY}
            `)

            if (response.status === 200 && response.data.result.length) {
                setLocation(response.data.result[0].name)
            }
               } catch(e) {

               }
            }
       })()
    }, [locationCode]);
}