import axios from "axios"


const url = "http://localhost:2233/api"

export const Createuser = async (data: any) => {
    try {
        return await axios.post(`${url}/create-user`, data).then((res) => {
            return res.data
        })
    } catch (error) {
        return error
    }
}
export const Verifyuser = async (data: any) => {
    try {
        return await axios.post(`${url}/verify-user`, data).then((res) => {
            return res.data
        })
    } catch (error) {
        return error
    }
}
export const Loginuser = async (data: any) => {
    try {
        return await axios.post(`${url}/login-user`, data).then((res) => {
            return res.data
        })
    } catch (error) {
        return error
    }
}
export const Createstud = async (userID: any, data: any) => {
    try {
        return await axios.post(`${url}/create-study/${userID}`, data).then((res) => {
            return res.data
        })
    } catch (error) {
        return error
    }
}