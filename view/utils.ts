

import { Response } from "qqlx-core"
import { getResponseData } from "../lib/response"
import { isEnvBrower } from "../lib/verify"

class CommonRequest {
    HOST = 'http://127.0.0.1'
    defaultHeaders: Record<string, string> = {}

    constructor() { }

    async get<T> (path: string, query?: Record<string, any>) {
        const _query = new URLSearchParams(query)
        const response = await fetch(`${this.HOST}${path}?${_query.toString()}`, {
            headers: { ...this.defaultHeaders },
        })
        const info: Response<T> = await response.json()
        return getResponseData<T>(info)
    }

    async post<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('POST', path, { dto })
    }

    async put<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('PUT', path, { dto })
    }

    async patch<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('PATCH', path, { dto })
    }

    async delete<T> (path: string, dto?: Record<string, any>) {
        return this.getDefaultPostConfig<T>('DELETE', path, { dto })
    }

    private async getDefaultPostConfig<T> (method: string, path: string, body?: Record<string, any>): Promise<T> {
        const response = await fetch(`${this.HOST}${path}`, {
            method,
            headers: { ...this.defaultHeaders, 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : null,
        })
        const info: Response<T> = await response.json()

        return getResponseData<T>(info)
    }

    setDefaultHeaders (key: string, value: string) {
        this.defaultHeaders[key] = value
    }
}

export const $request = new CommonRequest()
