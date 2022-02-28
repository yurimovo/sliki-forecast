import React from 'react'

import Flag from '../../media/flags/01-bahrein.png'
import './next-gp-flag.css'

const NextGpFlag = () => {
    return (
        <div>
            <img src={Flag} className={'flag-style'} alt={'next gp flag'}/>
        </div>
    )
}

export default NextGpFlag