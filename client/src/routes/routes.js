import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewForecast from "../components/new-forecast/new-forecast"
import Body from "../components/body/body"

export const useRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Body />} />
                <Route path="/new-forecast" element={<NewForecast />} />
            </Routes>
        </>
    )
}