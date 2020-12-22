import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './style.scss'

const WhishesLines = () => {
	const { i18n, t } = useTranslation()
	const language = i18n.language
	return (
		<div className="policy-links">
			<Link to={`/${language}/policy`}>{t("policy")}</Link>
		</div>
	)
}

export default WhishesLines