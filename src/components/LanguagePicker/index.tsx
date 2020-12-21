import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import { Emoji } from 'emoji-mart'
import './styles.scss'


const LanguagePicker = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang)
		Cookies.set('language', lang)
	}

	useEffect(() => {
		let lang = 'en'
		if (Cookies.get('language')) {
			lang = Cookies.get('language') as string
		} else {
			let userStystemLanguages = window.navigator.languages
			if (userStystemLanguages[0] === 'ru' || userStystemLanguages[1] === 'ru') {
				lang = 'ru'
			}
		}
		changeLanguage(lang)
	}, []);

	return (
		<div className="language-selector">
			<button onClick={() => changeLanguage('en')}>
				<Emoji emoji={':flag-us:'} set='twitter' size={30} />
			</button>
			<button onClick={() => changeLanguage('ru')}>
				<Emoji emoji={':flag-ru:'} set='twitter' size={30} />
			</button>
		</div>
	)
}
export default LanguagePicker;
