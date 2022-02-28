import axios from 'axios'

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

const authorization = async (userName, password, isAdmin) => {

    try {
        const response = await axios.post(`/api/auth/login`, {
            userName,
            password,
            isAdmin
        })
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('currentUser', response.data.userName)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export {
    registration,
    authorization
}