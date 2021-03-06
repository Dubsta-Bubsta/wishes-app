import Axios, { AxiosResponse, CancelToken } from 'axios';
import React, { useEffect, useState } from 'react';
import { getOptionValue } from 'react-select/src/builtins';
import { PromiseType } from '../../types';
import './style.scss'
import { getOption } from './utils';

import SeachBlock from './SearchBlock'
import PromisesList from './PromisesList';
import { useDebounce } from '../../hooks/useDebounce';

const PromisesBlock = () => {
    const [name, setName] = useState('')
	const debouncedName = useDebounce(name, 600);

    const [location, setLocation] = useState('')
    const [bday, setBday] = useState('')


    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [promises, setPromises] = useState<Array<PromiseType>>([])
    const [hasMore, setHasMore] = useState(false)
    const [loading, setLoading] = useState(false)
    const limit = 15

    useEffect(() => {
		let source = Axios.CancelToken.source();

		(async () => {
			page === 1 && setLoading(true)
			await getPromises(source.token)
			setLoading(false)
		})();

		return () => { source.cancel() }
    }, [page, debouncedName, location, bday])
    

    useEffect(() => {
        console.log('q')
        setPage(0)
        setPage(1)
    }, [debouncedName, location, bday])


    const getPromises = async (cancelToken: CancelToken) => {
        let options = {
            page,
            limit,
        }
        options = getOption(options, "name", debouncedName)
        options = getOption(options, "location", location)
        options = getOption(options, "bday", bday)
        
		const response = await Axios.get(`${process.env.REACT_APP_API_URL}/get`, { params: options, cancelToken }) as AxiosResponse
		if (response.status === 200) {
			if (page === 1) {
				setPromises(response.data.Items)
			} else {
				setPromises([...promises, ...response.data.Items])
            }
            setTotalCount(response.data.ScannedCount)
		}
    }
    

    return (
        <div className="searches-block">
            <SeachBlock
                name={name} setName={setName}
                location={location} setLocation={setLocation}
                bday={bday} setBday={setBday}

            />

            <PromisesList
                promises={promises}
                hasMore={totalCount > page * limit}
                getMore={() => setPage(page + 1) }
            />
        </div>
    )
}
export default PromisesBlock;
