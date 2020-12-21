import React, { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Popup from '../../common/Popup'
import './style.scss'
import qs from 'query-string'
import { PromiseType } from '../../../types'
import Axios, { AxiosResponse } from 'axios'
import copyIcon from '../../../assets/copy-icon.svg'
import Preloader from '../../common/Preloader'
import { useGetLocation } from '../../../hooks/useGetLocationName'
import { useTranslation } from 'react-i18next'

type PropsType = {
	open: boolean
	setOpen: (open: boolean) => void
}


const PromiseModal: FC<PropsType> = ({ open, setOpen }) => {
	const history = useHistory()
	const location = useLocation()
	const { t } = useTranslation()


	const [promise, setPromise] = useState<PromiseType>({} as PromiseType)
	const [copied, setCopied] = useState(false)
	const [loading, setLoading] = useState(false)


	const [locationStr, setLocation] = useState("")
	useGetLocation(promise.location, setLocation)


	let params = qs.parse(location.search);
	const ID = params.promiseId

	useEffect(() => {
		(async () => {
			if (ID) {
				setLoading(true)
				const response = await Axios.get(`${process.env.REACT_APP_API_URL}/get`, { params: { PromiseID: ID } }) as AxiosResponse

				if (response.status === 200 && response.data.Items[0]) {
					setPromise(response.data.Items[0])
				} else {
					setOpen(false)
				}
				setLoading(false)
			}
		})()
	}, [ID]);

	useEffect(() => {
		if (location.search) {
			let params = qs.parse(location.search);
			if (params.promiseId) {
				setOpen(true)
			}
		}
	}, [location.search]);

	useEffect(() => {
		if (!open) {
			history.push(`/`)
		}
	}, [open]);


	const copyLink = () => {
		const link = window.location.origin + `?promiseId=${promise.PromiseID}`
		copyToClipboard(link)
	}


	const copyToClipboard = (str: string) => {
		return new Promise(function (resolve, reject) {
			var success = false;
			function listener(e: any) {
				e.clipboardData.setData("text/plain", str);
				e.preventDefault();
				success = true;
			}
			document.addEventListener("copy", listener);
			document.execCommand("copy");
			document.removeEventListener("copy", listener);
			if (success) {
				resolve(true);
				setCopied(true);
			} else {
				reject();
			}
		});

	}

	return (
		<Popup open={open} setOpen={setOpen}>

			<div className="promise-modal">
				{ loading ? <Preloader /> : <>
					<p className="promise-name">{promise.name} {t("promiseModal.madePromiseText")}!</p>

						<div className="promise-details">
							{promise.bday && <p className="promise-detail">{promise.bday}</p>}
							{locationStr && <p className="promise-detail">{locationStr}</p>}
						</div>

						<div className="promise-content">{promise.promise}</div>
						<div className="share-promise" onClick={copyLink}>
							<p className="share-text">{t("promiseModal.share")}</p>
							<button className="share-btn">
								<img src={copyIcon} alt="copy-icon" />
							</button>
						</div>
					</>}
			</div>

		</Popup>
	)
}


export default PromiseModal