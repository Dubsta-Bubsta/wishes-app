import React, { FC, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { ReactComponent as CloseIcon } from '../../../assets/close-icon.svg'
import closeIcon from '../../../assets/close-icon.svg'

export const MaxWidthObject = {
	ls: 'ls',
	md: 'md',
	sm: 'sm',
	xl: 'sl',
	xs: 'xs',
}

const Popup = ({ open, setOpen, maxWidth = MaxWidthObject.sm, fullWidth = false, ...props }) => {
	const styles = useStyles()

	const [styleObject] = useState({})
	const modalRef = useRef(null)

	useEffect(() => {
		if (open) {
			document.querySelector('html').classList.add("hidden") 
		} else {
			document.querySelector('html').classList.remove("hidden") 
		}
		return () => { document.querySelector('html').classList.remove("hidden")  }
 
	}, [open])

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				e.stopPropagation()
			}
		})
		return () => { document.removeEventListener('click', () => { }) }
	}, [])


	return (
		<div className={`${styles.root} ${open ? "active" : ""}`}>
			<div className={styles.popupBg} onClick={() => { setOpen(false) }}></div>

			<div
				ref={modalRef}
				className={classNames(
					styles.popupContent, {
					[maxWidth]: maxWidth,
					"fullWidth": fullWidth
				}
				)}
				style={{ ...styleObject }}
			>
				{props.children}
				<button onClick={() => { setOpen(false) }} className={styles.closeBtn}>
					<img src={closeIcon} alt="close-icon" />
				</button>
			</div>
		</div>
	)
}


const useStyles = createUseStyles({
	root: {
		position: 'fixed',
		height: '100vh',
		width: '100vw',
		top: 0,
		left: 0,
		display: 'none',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 3,
		"&.active": {
			display: 'flex',
		}
	},
	popupBg: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		background: '#000',
		opacity: .3,
		zIndex: 3,
	},
	popupContent: {
		width: 'auto',
		maxHeight: 'calc(100% - 64px)',
		boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
		zIndex: 5,
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		overflowY: 'auto',
		background: '#fff',
		borderRadius: '20px',
		// minHeight: '90vh',
		"&.xs": {
			maxWidth: 444
		},
		"&.sm": {
			maxWidth: 600
		},
		"&.md": {
			maxWidth: 960
		},
		"&.lg": {
			maxWidth: 1280
		},
		"&.xl": {
			maxWidth: 1920
		},

		"&.fullWidth": {
			width: 'calc(100% - 64px)',
		}
	},
	closeBtn: {
		position: 'absolute',
		right: '10px',
		top: '10px'
	}

})

export default Popup;
