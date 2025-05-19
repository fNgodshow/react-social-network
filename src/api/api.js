import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '09345616-1aa8-4f71-9cca-f17565ed861f'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getUsersProfile(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data;
            })
    },
    userAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    followUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
}