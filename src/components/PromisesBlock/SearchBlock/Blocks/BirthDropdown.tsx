import React, { FC } from 'react';
import { SelectorType } from '../../../common/FormComponents/Components/Dropdown';
import { Dropdown } from '../../../common/FormComponents/FormComponents';
import { useTranslation } from 'react-i18next'

import '../style.scss'

type PropsType = {
	bday: string
	setBday: (bday: string) => void
}
const BirthdayDropdown: FC<PropsType> = ({ bday, setBday }) => {
	const { t } = useTranslation()

	const currentYear = (new Date).getFullYear()
	const years = [] as Array<SelectorType>
	for (let i = 0; i < 100; i++) {
		years.push({
			label: (currentYear - i).toString(),
			value: (currentYear - i).toString(),
		})
	}

    return (
		<div className="birth-dropdown">
			<Dropdown
				placeholder={t("placeholders.birth")}
				selectedID={bday.toString()}
				data={years}
				handleChange={(value) => setBday(value.toString())}
			/>
		</div>
    )
}
export default BirthdayDropdown;
