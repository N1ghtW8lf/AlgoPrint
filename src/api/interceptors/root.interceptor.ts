import axios, { CreateAxiosDefaults } from 'axios'


const rootAxiosOptions: CreateAxiosDefaults = {
	baseURL: process.env.BASE_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}


const axiosClassic = axios.create(rootAxiosOptions)

export {
	axiosClassic,
	rootAxiosOptions
}
