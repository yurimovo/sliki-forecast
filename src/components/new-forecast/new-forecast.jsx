import React, {useState} from 'react'
import axios from "axios"
import {Button} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import './new-forecast.css'

const NewForecast = () => {

    const pilotsArray = [
        'Max Verstappen', 'Sergio Perez', 'Lewis Hamilton',
        'George Russell', 'Charles Leclerc', 'Carlos Sainz',
        'Lando Norris', 'Daniel Ricciardo', 'Fernando Alonso',
        'Esteban Ocon', 'Pierre Gasly', 'Yuki Tsunoda',
        'Sebastian Vettel', 'Lance Stroll', 'Nicholas Latifi',
        'Alex Albon', 'Valtteri Bottas', 'Guanyu Zhou',
        'Mick Schumacher', 'Nikita Mazepin'
    ]

    /*const [forecast, setForecast] = useState(() => {
        return {

        }
    })*/

    /*const changeInputForecast = event => {
        event.persist()
        setForecast(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }*/

    const submitForecast = async (
        qPilot1, qPilot2, qPilot3, qPilot4, qPilot5,
        qPilot6, qPilot7, qPilot8, qPilot9, qPilot10,
        rPilot1, rPilot2, rPilot3, rPilot4, rPilot5,
        rPilot6, rPilot7, rPilot8, rPilot9, rPilot10,
        pilotOfTheDay, fastestLapPilot
    ) => {
        try {
            const response = await axios.post(`/new-forecast`, {
                qPilot1, qPilot2, qPilot3, qPilot4, qPilot5,
                qPilot6, qPilot7, qPilot8, qPilot9, qPilot10,
                rPilot1, rPilot2, rPilot3, rPilot4, rPilot5,
                rPilot6, rPilot7, rPilot8, rPilot9, rPilot10,
                pilotOfTheDay, fastestLapPilot
            })
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    const pilots = pilotsArray.map((pilot, key) => {
        return (
            <option value={key}>{pilot}</option>
        )
    })

    return (
        <div className={'container design-new-forecast'}>
            <form>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'new-forecast-form'}>
                            <div className={'row row-new-forecast'}>
                                <div className={'col-sm-12 text-center'}>
                                    <h4 className={'h2-new-forecast'}>
                                        Новый прогноз
                                    </h4>
                                </div>
                            </div>
                            <div className={'row row-new-forecast'}>
                                <div className={'col-sm-6'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12 text-center'}>
                                            <h5 className={'h5-new-forecast'}>
                                                Прогноз на квалификацию
                                            </h5>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-sm-6 col-new-forecast text-center'}>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot1'}
                                            >
                                                <option selected disabled>1-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot2'}
                                            >
                                                <option selected disabled>2-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot3'}
                                            >
                                                <option selected disabled>3-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot4'}
                                            >
                                                <option selected disabled>4-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot5'}
                                            >
                                                <option selected disabled>5-я позиция</option>
                                                {pilots}
                                            </select>
                                        </div>
                                        <div className={'col-sm-6 col-new-forecast text-center'}>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot6'}
                                            >
                                                <option selected disabled>6-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot7'}
                                            >
                                                <option selected disabled>7-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot8'}
                                            >
                                                <option selected disabled>8-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot9'}
                                            >
                                                <option selected disabled>9-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'qPilot10'}
                                            >
                                                <option selected disabled>10-я позиция</option>
                                                {pilots}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-sm-6'}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12 text-center'}>
                                            <h5 className={'h5-new-forecast'}>
                                                Прогноз на гонку
                                            </h5>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-sm-6 col-new-forecast text-center'}>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot1'}
                                            >
                                                <option selected disabled>1-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot2'}
                                            >
                                                <option selected disabled>2-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot3'}
                                            >
                                                <option selected disabled>3-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot4'}
                                            >
                                                <option selected disabled>4-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot5'}
                                            >
                                                <option selected disabled>5-я позиция</option>
                                                {pilots}
                                            </select>
                                        </div>
                                        <div className={'col-sm-6 col-new-forecast text-center'}>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot6'}
                                            >
                                                <option selected disabled>6-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot7'}
                                            >
                                                <option selected disabled>7-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot8'}
                                            >
                                                <option selected disabled>8-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot9'}
                                            >
                                                <option selected disabled>9-я позиция</option>
                                                {pilots}
                                            </select>
                                            <select
                                                className={'form-select select-new-forecast'}
                                                name={'rPilot10'}
                                            >
                                                <option selected disabled>10-я позиция</option>
                                                {pilots}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'row  row-new-forecast'}>
                                <div className={'col-sm-6 col-new-forecast text-center'}>
                                    <h5 className={'h5-new-forecast'}>
                                        Быстрый круг
                                    </h5>
                                    <select
                                        className={'form-select select-new-forecast'}
                                        name={'fastestLapPilot'}
                                    >
                                        <option selected disabled>Выберите пилота</option>
                                        {pilots}
                                    </select>
                                </div>
                                <div className={'col-sm-6 col-new-forecast text-center'}>
                                    <h5 className={'h5-new-forecast'}>
                                        Пилот дня
                                    </h5>
                                    <select
                                        className={'form-select select-new-forecast'}
                                        name={'pilotOfTheDay'}
                                    >
                                        <option selected disabled>Выберите пилота</option>
                                        {pilots}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-sm-12'}>
                                <Button
                                    type={'submit'}
                                    className={'btn btn-success btn-new-forecast'}
                                    onClick={submitForecast}
                                >
                                    Отправить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewForecast