import React from 'react'
import classNames from 'classnames'
import { useField, FieldAttributes } from "formik";
import s from './FormComponents.module.scss'
import Dropdown from './Components/Dropdown'
type CustomFieldProps = {
	name: string
	label?: string
	type?: string
	placeholder?: string
	disabled?: boolean
	style?: any
	handleChange?: any

	Component?: any
	componentProps?: any
}

export const CustomField: React.FC<FieldAttributes<CustomFieldProps>> = (
	{ label, Component = Input, ...props }) => {

	const [field, meta] = useField<CustomFieldProps>(props);
	let errorText = meta.error && meta.touched ? meta.error : "";

	return (
		<div className={classNames(s.formInput, { [s.error]: errorText, [s.withLabel]: label },)}>
			<label className={s.fieldLabel}>{label}</label>
			<Component
			    field={field}
				{...field}
				{...props}
				{...props.componentProps}
			/>

           <p className={classNames(s.errorText, "errorText")}>{errorText}</p> 
           { props.required && <span className={s.requiredStar}>*</span>}
		</div>
	)
}


export const Input = ({ ...props }) => {
    return (
        <input className={classNames(s.styledInput)} {...props} disabled={props.disabled} />
    )
}

export const Textarea = ({ ...props }) => {
    return (
        <textarea className={classNames(s.styledInput)} {...props} />
    )
}

export {
	Dropdown
}