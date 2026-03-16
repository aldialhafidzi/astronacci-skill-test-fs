export type ParamsCheckVoucherType = {
    flightNumber: string
    date: string | Date
}

export type CheckVoucherType = {
    exists: boolean
}

export type CreateVoucherType = {
    success: boolean
    seats: string[]
}

export type ParamsGenerateVoucherType = {
    flightNumber: string
    date: string | Date
    aircraft: string
    id: string
    name: string
}

export type VoucherType = {
    id: number
    crewName: string
    crewId: string
    flightNumber: string
    date: string
    aircraft: string
    seats: string[]
}