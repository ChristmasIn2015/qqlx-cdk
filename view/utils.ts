
import type { AxiosInstance } from "axios"
import axios from "axios"

import { getResponseData } from "../lib/response"

export const HOST = 'http://127.0.0.1'
export const PORT = 6003

const request: AxiosInstance = axios.create({
    baseURL: `${HOST}:${PORT}`,
    timeout: 5000,
});

request.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
);

export const $request = request
