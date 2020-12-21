import React, { useState, useEffect, useRef, FC } from 'react'
import deleteIcon from '../../../../../assets/delete-icon.svg'
import classNames from 'classnames'
import s from './Dropdown.module.scss'
import { Input } from '../../FormComponents'

export type SelectorType = {
    value: number | string
    label: number | string
    disabled?: boolean
}
// Getting active element by ID - simple filter
const getActiveSelector = (value = "" as number | string, data: Array<SelectorType>) => {
    let activeSelector = '' as string
    if (data.length) {
        let filteredSelectors = data.filter(selector => selector.value === value)
        if (filteredSelectors.length) {
            activeSelector = filteredSelectors[0].label.toString()
        }
    }

    return activeSelector
}

type PropsType = {
    data: Array<SelectorType>
    selectedID: number | string
    handleChange: (value: string | number) => void
    placeholder?: string
    pagination?: {
        hasMore: boolean
        getMore: any
    }
    search?: {
        search: string
        setSearch: (search: string) => void
    }
}

const Dropdown = (props: PropsType) => {
    const { data = [], selectedID = '', placeholder, handleChange = () => { }, pagination, search } = props

    useEffect(() => {
        if (selectedID) {
            handleChange(selectedID)
        }
    }, [])

    const [open, setOpen] = useState(false)
    // Changing value and closing dropdown
    const changeHandler = (value: string | number) => {
        handleChange(value)
        setOpen(false)
        search?.setSearch('')
    }

    const getIsActive = (value: string | number) => {
        return selectedID === value
    }


    const dropdownRef = useRef(null)
    // If clicking outside dropdown - toggle off
    useEffect(() => {
        const checkTarget = (e: any) => {
            if (dropdownRef.current && !(dropdownRef as any).current.contains(e.target)) {
                setOpen(false)
                e.stopPropagation()
            }
        }

        document.addEventListener('touchstart', checkTarget)
        document.addEventListener('click', checkTarget)

        return () => { document.removeEventListener('click', () => { }) }
    }, [])

    const activeSelectorValue = getActiveSelector(selectedID, data)

    return (
        <div
            ref={dropdownRef}
            className={s.dropdown}
        >
            <div className={classNames(s.activeElement, { [s.withSearch]: (search && !activeSelectorValue) })} onClick={() => setOpen(!open)}>

                {(search && !activeSelectorValue) ? 
                        <Input
                            value={search.search}
                            onChange={(e: any) => { search.setSearch(e.target.value) }}
                            placeholder={placeholder}
                        />  : 

                    <p className={classNames(s.activeElementValue, { [s.placeholder]: !activeSelectorValue })} >
                        {activeSelectorValue ? activeSelectorValue : placeholder}
                    </p>}
                {activeSelectorValue &&
                   <button className={s.deleteBtn} onClick={(e) => { handleChange(""); e.stopPropagation() }}>
                    <img src={deleteIcon} alt="delete-icon" />
                </button>}
            </div>


            {open && <div className={s.dropdownList}>
                {data.map(selector => (
                    <div
                        key={selector.value}
                        className={classNames(s.selector, {
                            [s.active]: getIsActive(selector.value),
                            [s.disabled]: selector.disabled
                        })}
                        onClick={() => { changeHandler(selector.value); setOpen(!open) }}
                    >
                        <p>{selector.label}</p>
                    </div>
                ))}
                {(pagination && pagination.hasMore) && 
                    <button className={s.getMoreBtn} onClick={pagination.getMore}>
                        Показать еще
                    </button>
                }
            </div>}

        </div>
    )
}



export const FormikDropdown = (props: any) => {
    const { value, name, handleChange, values, placeholder, hasMore, getMore } = props

    return (
        <div>
            <Dropdown
                selectedID={value}
                data={values}
                handleChange={(value) => { handleChange(name, value) }}
                placeholder={placeholder}
                pagination={{
                    hasMore, getMore
                }}
            />
        </div>
    )
}

export default Dropdown;