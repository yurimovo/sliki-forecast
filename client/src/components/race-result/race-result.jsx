import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './race-result.css'
import {Link} from "react-router-dom";

const RaceResult = () => {

    const handleSaveResult = () => {

    }

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    <h3 className={'h3-race-result'}>
                        Ввод результатов ГП
                    </h3>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-md-6'}>
                    Пилоты
                </div>
                <div className={'col-md-6'}>
                    Команды
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-sm-6'}>
                    Быстрый круг
                </div>
                <div className={'col-sm-6'}>
                    Гонщик дня
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-sm-12 text-center'}>
                    <Button
                        className={'btn btn-success'}
                        onClick={handleSaveResult}
                    >
                        <Link className={'nav-item'} to="/">Сохранить</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RaceResult