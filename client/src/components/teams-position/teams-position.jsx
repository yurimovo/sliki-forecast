import React, { useState, useEffect } from 'react'

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

    /*const [teams, setTeams] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/teams/teams')
            setTeams(response.data)
            console.log(response.data)
        })()
    },[])*/

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
                    {/*{teams && teams.map((team) => {
                        return (
                            <div className={'row'}>
                                <div className={'col-sm-2'}>
                                    team.position
                                </div>
                                <div className={'col-sm-8'}>
                                    team.name
                                </div>
                                <div className={'col-sm-2'}>
                                    team.points
                                </div>
                            </div>
                        )
                    })}*/}
                    {teams}
                </tbody>
            </table>
        </div>
    )
}

export default TeamsPosition