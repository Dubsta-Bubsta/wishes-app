import Axios, { AxiosResponse } from 'axios'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { PromiseType } from '../../../../types'
import { handleMarquee } from '../../../../utils/utils'



const Line = ({  }) => {
	const [promises, setPromises] = useState([])

	useEffect(() => {
		(async () => {
			const response = await Axios.get(`${process.env.REACT_APP_API_URL}/get`, { params: { limit: 5 } }) 
			if (response.status === 200) {
				setPromises(response.data.Items)
			}
		})();
	}, []);
	useEffect(() => {
		if (promises.length) {
			handleMarquee()
		}
	}, [promises]);

	return (
		<div className="line-holder">
			<div className="line">
				{promises.map(promise => <p className="line-text" key={promise.PromiseID}>{promise.promise}</p>)}
			 </div>
	   </div>
	)
}

export default Line