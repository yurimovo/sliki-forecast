import React, {useState, useEffect, useContext, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"

import Loader from "../loader/loader"

const PersonalForecastPoints = () => {

    const [points, setPoints] = useState(0)
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const userId = useParams().id

    const getPoints = useCallback(async () => {
        try {
            const fetched = await request(
                `/api/points/${userId}`,
                'GET',
                null,
                {Authorization: `Bearer ${token}`}
            )
            setPoints(fetched)
        } catch (e) {}
    }, [token, userId, request])

    useEffect(() => {
        getPoints()
    }, [getPoints()])

    if (loading) {
        return <Loader />
    }

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    Ваши очки: {points}
                </div>
            </div>
        </div>
    )
}

export default PersonalForecastPoints