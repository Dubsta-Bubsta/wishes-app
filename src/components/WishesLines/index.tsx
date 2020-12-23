import React, { FC, useEffect } from 'react'
import Line from './Blocks/Line'
import PromiseButton from './Blocks/PromiseButton'
import { useTranslation } from 'react-i18next'
import './style.scss'

const WhishesLines = () => {
	const { t } = useTranslation()


	return (
		<div className="wishes-lines-holder">
			<div className="wishes-lines">
				<h1 className="title">{t('title')}</h1>

				<div className="lines">
					<Line />
					<Line />
					<Line />
					<Line />
					<Line />
					<Line />
				</div>
				<PromiseButton />
			</div>
		</div>
	)
}

export default WhishesLines