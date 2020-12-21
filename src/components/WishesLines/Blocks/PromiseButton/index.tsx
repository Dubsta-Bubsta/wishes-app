import React, { FC, useState } from 'react'
import NewPromiseModal from '../../../Modals/NewPromiseModal'
import { useTranslation } from 'react-i18next'
import './style.scss'


type PropsType = {
}
const PromiseButton: FC<PropsType> = ({ }) => {
	const [open, setOpen] = useState(false)
	const { t } = useTranslation()

	return (
		<>
			<button className="promise-btn" onClick={() => setOpen(true)}>{t('iPromise')}</button>
			
			{ open && <NewPromiseModal open={open} setOpen={setOpen}/> }
		</>
		

	
	)
}


export default PromiseButton