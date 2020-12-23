import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import './style.scss'


const WhishesLines = () => {
	const { i18n, t } = useTranslation()
	const language = i18n.language

	return (
		<a href={`${process.env.PUBLIC_URL}/documents/policy_${language}.pdf`} download className="policy-links">
			{t("policy")}
		</a>
	)
}

export default WhishesLines