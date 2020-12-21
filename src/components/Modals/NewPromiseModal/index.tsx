import React, { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Popup from '../../common/Popup'
import './style.scss'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import { PromiseType } from '../../../types'
import Axios from 'axios'
import { CustomField, Textarea } from '../../common/FormComponents/FormComponents'
import LocationDropdown from '../../PromisesBlock/SearchBlock/Blocks/LocationDropdown'
import { useGetCountries } from '../../../hooks/useGetCountries'
import { useTranslation } from 'react-i18next'

type PropsType = {
	open: boolean
	setOpen: (open: boolean) => void
}


const NewPromise: FC<PropsType> = ({ open, setOpen }) => {
	const history = useHistory()
	const { t } = useTranslation()

	const validationSchema = yup.object({
		name: yup.string().required(t("placeholders.requiredField")),
		promise: yup.string().required(t("placeholders.requiredField")).min(20).max(1000),
		location: yup.string(),
		bday: yup.string(),
	});
	const handleSubmit = async (promise: PromiseType, setSubmitting: (val: boolean) => void) => {
		setSubmitting(true);

		const response = await Axios.post(`${process.env.REACT_APP_API_URL}/create`, promise)
		if (response.status === 200) {
			history.push(`/?promiseId=${response.data.PromiseID}`)
			setOpen(false)
		}


		setSubmitting(false);
	}

	const [location, setLocation] = useState('')
	const { countries, searchText, setSearchText, } = useGetCountries()


	return (
		<Popup open={open} setOpen={setOpen}>
			<Formik
				validateOnChange={true}
				initialValues={{ name: '', bday: '', promise: '' } as PromiseType}
				validationSchema={validationSchema}
				enableReinitialize={true}
				onSubmit={(data: PromiseType, { setSubmitting }) => {
					handleSubmit(data, setSubmitting)
				}}
			>

				{({ isSubmitting }) => (
					<Form className="create-promise-modal">
						<p className="promise-name">{t("newPromiseModal.title")}</p>
						<p className="promise-comment">{t("newPromiseModal.description")}</p>
						<CustomField name="name" placeholder={t('placeholders.name')} required={true} />
						<div className="grid-2">
							<LocationDropdown
								location={location.toString()}
								setLocation={(val: string) => setLocation(val)}

								countries={countries}
								searchText={searchText}
								setSearchText={setSearchText}

								style={{ height: 42 }}
							/>
							<CustomField name="bday" placeholder={t('placeholders.birth')} />
						</div>

						<CustomField
							name="promise"
							required={true}
							placeholder={t('placeholders.promiseLength')}
							Component={Textarea}
						/>


						<button disabled={isSubmitting} className="submit-btn">{t("iPromise")}</button>
					</Form>
				)}
			</Formik>
		</Popup>
	)
}

export default NewPromise