import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

const Loader = () => {
    return (
        <div>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loader