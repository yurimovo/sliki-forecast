import axios from 'axios'
import {useDispatch} from "react-redux";

const registration = async (userName, password, isAdmin) => {
    try {
        const response = await axios.post(`/api/auth/register`, {
            userName,
            password,
            isAdmin
        })
        console.log(response.data.message)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

const authorization =  (userName, password, isAdmin) => {
    const dispatch = useDispatch()
    axios.post(`/api/auth/login`, {
        userName,
        password,
        isAdmin
    }).then(r => {
        localStorage.setItem('token', r.data.token)
        localStorage.setItem('isAdmin', r.data.user.isAdmin)
        dispatch()

    }).catch(e => console.log(e.response.data.message))
}

export {
    registration,
    authorization
}