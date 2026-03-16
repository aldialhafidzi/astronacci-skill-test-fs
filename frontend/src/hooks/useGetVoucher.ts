import { useCallback, useEffect, useState } from "react";
import type { VoucherType } from "../services/voucher/type";
import { getVouchers } from "../services/voucher";
import type { PaginationType } from "../constants";

export default function useGetVoucher({ page = 1 }: { page: number }) {
    const [loading, setLoading] = useState(false);
    const [vouchers, setVouchers] = useState<VoucherType[]>([]);
    const [pagination, setPagination] = useState<PaginationType>({
        current_page: page,
        last_page: 1,
        per_page: 10,
        total: 0
    });

    const refetch = useCallback(async (page: number) => {
        setLoading(true);

        setTimeout(async () => {
            const response = await getVouchers({ page });
            setVouchers(response.data || []);
            setPagination(prev => ({
                ...prev,
                ...response?.meta
            }))
            setLoading(false);
        }, 300);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        refetch(page);
    }, [refetch, page]);

    return { loading, vouchers, pagination, refetch }
}