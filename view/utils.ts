

import { Response } from "qqlx-core"
import { getResponseData } from "../lib/response"
import { isEnvBrower } from "../lib/verify"

class CommonRequest {
    private HOST = 'http://127.0.0.1:8003'
    private defaultHeaders: Record<string, string> = {}

    constructor() { }

    async get<T> (path: string, dto?: Record<string, any>) {
        const query = new URLSearchParams(dto)
        const response = await fetch(`${this.HOST}${path}?${query.toString()}`, {
            headers: this.getDefaultHeaders(),
        })
        const info: Response<T> = await response.json()
        return getResponseData<T>(info)
    }

    async post<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('POST', path, dto)
    }

    async put<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('PUT', path, dto)
    }

    async patch<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('PATCH', path, dto)
    }

    async delete<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('DELETE', path, dto)
    }

    private async getDefaultPostConfig<T> (method: string, path: string, dto?: Record<string, any>): Promise<T> {
        const response = await fetch(`${this.HOST}${path}`, {
            method,
            headers: { ...this.getDefaultHeaders(), 'Content-Type': 'application/json' },
            body: dto ? JSON.stringify(dto) : null
        })
        const info: Response<T> = await response.json()

        return getResponseData<T>(info)
    }

    setDefaultHeaders (key: string, value: string) {
        this.defaultHeaders[key] = value
    }

    private getDefaultHeaders () {
        const headers = this.defaultHeaders
        if (headers['Authorization']) return headers
        else return {
            'Authorization': isEnvBrower()
                ? localStorage['qqlx-token']
                : global['Authorization']
        }
    }
}

export const $request = new CommonRequest()
