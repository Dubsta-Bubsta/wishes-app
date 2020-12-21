import Axios, { AxiosResponse } from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { PromiseType } from '../../../../types'
import './style.scss'

const Line = ({  }) => {
	const [promises, setPromises] = useState<Array<PromiseType>>([])

	useEffect(() => {
		(async () => {
			const response = await Axios.get(`${process.env.REACT_APP_API_URL}/get`, { params: { limit: 100 } }) as AxiosResponse
			if (response.status === 200) {
				setPromises(response.data.Items)
			}
		})();
	}, [])

	return (
		<div className="line">
		   {promises.map(promise => <p className="line-text" key={promise.PromiseID}>{promise.promise}</p>)}
	   </div>
	)
}

export default Line