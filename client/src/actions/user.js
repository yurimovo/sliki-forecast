import axios from 'axios'

const registration = async (userName, password) => {
    try {
        const response = await axios.post(`/api/auth/register`, {
            userName,
            password
        })
        console.log(response.data.message)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

const authorization = async (userName, password) => {

    try {
        const response = await axios.post(`/api/auth/login`, {
            userName,
            password
        })
        localStorage.setItem('token', response.data.token)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export {
    registration,
    authorization
}