import { useEffect, useState } from 'react'

export interface APIHook<T> {
    loading: boolean
    result?: T
}

export const useApi = <R,B>(api:string, method?: string, requestBody?:B) => {
    const [result, setResult] = useState<R>()
    const [loading, setLoading] = useState<boolean>(false)
    const body = requestBody ? JSON.stringify(requestBody) : undefined
    useEffect(() => {
        setLoading(true)
        fetch(api, {
            method,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            setResult(res)
        })
        .finally(() => setLoading(false))
    }, [setResult, setLoading])
    return {result, loading}
}