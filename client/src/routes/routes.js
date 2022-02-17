import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewForecast from "../components/new-forecast/new-forecast"
import Body from "../components/body/body"
import NextGp from "../components/next-gp/next-gp"
import PilotsPosition from "../components/pilots-position/pilots-positions"
import TeamsPosition from "../components/teams-position/teams-position"
import ForecastersPosition from "../components/forecasters-position/forecasters-position"

export const useRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} exact element={<Body />} />
                <Route path={'/next-gp'} element={<NextGp />} />
                <Route path={'/pilots-position'} element={<PilotsPosition />} />
                <Route path={'/teams-position'} element={<TeamsPosition />} />
                <Route path={'/forecasters-position'} element={<ForecastersPosition />} />
                <Route path={"/new-forecast"} element={<NewForecast />} />
            </Routes>
        </>
    )
}