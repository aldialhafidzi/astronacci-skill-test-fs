export type BaseResponse<T> = {
    success: boolean
    message: string
    data?: T
    meta?: PaginationType
}

export type PaginationType = {
    current_page: number
    last_page: number
    per_page: number
    total: number
}