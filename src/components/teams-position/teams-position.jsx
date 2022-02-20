import React from 'react'

import './teams-position.css'

const TeamsPosition = () => {

    const teamsArray = [
        'Red Bull',
        'Mercedes',
        'Ferrari',
        'McLaren',
        'Alpine',
        'Aston Martin'
    ]

    const teams = teamsArray.map((team, key) => {
        return (
            <tr key={key}>
                <td>
                    {team}
                </td>
            </tr>
        )
    })

    return (
        <div className={'teams'}>
            <h5 className={'text-center'}>Кубок конструкторов</h5>
            <hr className={'hr'}/>
            <table className={'table'}>
                <tbody>
                    {teams}
                </tbody>
            </table>
        </div>
    )
}

export default TeamsPosition