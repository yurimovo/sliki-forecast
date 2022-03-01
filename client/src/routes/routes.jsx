import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewForecast from "../components/new-forecast/new-forecast"
import NextGp from "../components/next-gp/next-gp"
import PilotsPosition from "../components/pilots-position/pilots-positions"
import TeamsPosition from "../components/teams-position/teams-position"
import ForecastersPosition from "../components/forecasters-position/forecasters-position"
import {Register} from "../components/register/register"
import { useSelector } from 'react-redux'
import {Auth} from "../components/auth/auth"
import Body from "../components/body/body"
import PersonalPage from "../components/personal-page/personal-page"
import PersonalForecastPoints from "../components/personal-forecast-points/personal-forecast-points"
import PersonalForecastPosition from "../components/personal-forecast-position/personal-forecast-position"
import PersonalForecasts from "../components/personal-forecasts/personal-forecasts"
import PersonalForecastDetails from "../components/personal-forecast-details/personal-forecast-details"
import RaceResult from "../components/race-result/race-result";

export const useRoutes = () => {
    const auth = useSelector(state => state.auth)
    return (
        <>
            { auth ?
                <Routes>
                    <Route path={'/'} exact element={<Body />} />
                    <Route path={'/next-gp'} exact element={<NextGp />} />
                    <Route path={'/pilots-position'} exact element={<PilotsPosition />} />
                    <Route path={'/teams-position'} exact element={<TeamsPosition />} />
                    <Route path={'/forecasters-position'} exaxt element={<ForecastersPosition />} />
                    <Route path={'/new-forecast'} exaxt element={<NewForecast />} />
                    <Route path={'/personal-page'} exact element={<PersonalPage />} />
                    <Route path={'/personal-forecast-points'} exact element={<PersonalForecastPoints />} />
                    <Route path={'/personal-forecast-position'} exact element={<PersonalForecastPosition />} />
                    <Route path={'/personal-forecasts'} exact element={<PersonalForecasts />} />
                    <Route path={'/personal-forecast-details'} exact element={<PersonalForecastDetails />} />
                    <Route path={'/race-result'} exact element={<RaceResult />} />
                </Routes> :
                <Routes>
                    <Route path={'/auth'} exact element={<Auth />} />
                    <Route path={'/register'} exact element={<Register />} />
                </Routes>
            }
        </>
    )
}