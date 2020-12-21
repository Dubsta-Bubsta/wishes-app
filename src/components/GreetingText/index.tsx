import React from 'react'
import { useTranslation } from 'react-i18next'

import './styles.scss'

const Greeting = () => {
	const { t } = useTranslation()

	return (
		<p className="greeting-text">{t("greetingsText")}</p>
	)
}

export default Greeting