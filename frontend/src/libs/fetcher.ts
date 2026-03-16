interface OptionsType extends RequestInit {
    timeout?: number
    revalidate?: number
    tags?: unknown[]
}

async function fetcher(resource: string, options?: OptionsType) {
    const timeout = options?.timeout || 60000
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)

    const customOptions: OptionsType = {
        ...options,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            ...options?.headers
        }
    }

    const url = `http://127.0.0.1:8000/api${resource}`
    const response = await fetch(url, {
        ...customOptions,
        signal: controller.signal,
    })

    clearTimeout(id)
    return response
}

export default fetcher