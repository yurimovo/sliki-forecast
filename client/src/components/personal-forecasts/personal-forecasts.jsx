import React, { useContext, useState, useCallback, useEffect } from 'react'
import {AuthContext} from "../../context/AuthContext"
import {useHttp} from "../../hooks/http.hook"
import {useParams} from "react-router-dom"

import Loader from "../loader/loader"

const PersonalForecasts = () => {

    const [forecasts, setForecasts] = useState([])
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const userId = useParams().id

    const getForecasts = useCallback(async () => {
        try {
            const fetched = await request(
                `/api/forecasts/${userId}`,
                'GET',
                null,
                {Authorization: `Bearer ${token}`}
            )
            setForecasts(fetched)
        } catch (e) {}
    }, [token, userId, request])

    useEffect(() => {
        getForecasts()
    }, [getForecasts()])

    if (loading) {
        return <Loader />
    }

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    Ваши прогнозы
                </div>
            </div>
        </div>
    )
}

export default PersonalForecasts