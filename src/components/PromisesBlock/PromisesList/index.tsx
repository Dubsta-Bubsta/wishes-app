import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PromiseType } from '../../../types';
import './style.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from 'axios';
import { useGetLocation } from '../../../hooks/useGetLocationName';

type PropsType = {
    promises: Array<PromiseType>
    hasMore: boolean
    getMore: () => void
}
const PromisesList: FC<PropsType> = ({ promises, hasMore, getMore }) => {
    return (
        <InfiniteScroll
            dataLength={promises.length}
            next={getMore}
            hasMore={hasMore}
            className="promises-list"
            loader={"..."}
        >
            {promises.map(promise => <PromiseBlock key={promise.PromiseID} promise={promise} />)}
        </InfiniteScroll>
    )
}


const PromiseBlock = ({ promise }: { promise: PromiseType }) => {
    const [location, setLocation] = useState("")
    useGetLocation(promise.location, setLocation)


    return (
        <Link to={`/?promiseId=${promise.PromiseID}`} className="promise-element">
            <p className="promise-name">{promise.name}</p>
            <p className="promise-details">
                <span>{promise.bday}</span>
                {(promise.bday && location) && <span>,</span>}
                <span>{location}</span>
            </p>
            <p className="promise-content">{promise.promise}</p>
        </Link>
    )
}

export default PromisesList;
