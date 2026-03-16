import type { BaseResponse } from "../../constants"
import fetcher from "../../libs/fetcher"
import type { CheckVoucherType, ParamsCheckVoucherType, ParamsGenerateVoucherType, CreateVoucherType, VoucherType } from "./type"

export async function checkVoucher(params: ParamsCheckVoucherType): Promise<CheckVoucherType> {
    const res = await fetcher(`/check`, {
        method: 'POST',
        body: JSON.stringify(params)
    })

    if (!res.ok) throw await res.json()
    return await res.json()
}

export async function generateVoucher(params: ParamsGenerateVoucherType): Promise<CreateVoucherType> {
    const res = await fetcher(`/generate`, {
        method: 'POST',
        body: JSON.stringify(params)
    })

    if (!res.ok) throw await res.json()
    return await res.json()
}

export async function getVouchers({ page }: { page: number }): Promise<BaseResponse<VoucherType[]>> {
    const res = await fetcher(`/vouchers?page=${page}`)

    if (!res.ok) throw await res.json()
    return await res.json()
}

export async function deleteVoucher(id: number): Promise<{ success: boolean, message: string }> {
    const res = await fetcher(`/vouchers/${id}`, {
        method: 'DELETE'
    })

    if (!res.ok) throw await res.json()
    return await res.json()
}