import React from 'react'
import preloader from '../../../assets/preloader.svg'

const Preloader = ({ ...props }) => {
	return (
		<div style={{ width: '80px', margin: '20px auto', ...props.style }}>
			<img src={preloader} alt="preloader" style={{ width: '100%' }} />
		</div>
	)
}

export default Preloader;