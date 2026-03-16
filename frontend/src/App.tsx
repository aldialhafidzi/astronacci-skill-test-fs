import TableVoucher from "./components/_features/vouchers/table";
import VoucherForm from "./components/_features/vouchers/form";
import useGetVoucher from "./hooks/useGetVoucher";
import Pagination from "./components/_atoms/pagination";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState(1);

  const { loading, vouchers, pagination, refetch } = useGetVoucher({ page })

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-6">
      <div className="flex justify-between gap-4 items-center">
        <h1 className="text-2xl font-bold">Astronacci Skill Test</h1>
        <h2 className="text-right">
          <p className="font-bold">Aldi Alhafidzi</p>
          <p className="text-sm">aldi.alhafidzi@gmail.com</p>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <VoucherForm onAddVoucher={() => refetch(page)} />
        </div>

        <div className="col-span-12 lg:col-span-8 bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6">
          <TableVoucher
            data={vouchers}
            loading={loading}
            refetch={() => refetch(page)}
          />

          {pagination?.last_page !== 1 &&
            <Pagination
              currentPage={pagination?.current_page}
              lastPage={pagination?.last_page}
              onPageChange={setPage}
            />}
        </div>
      </div>
    </div>
  )
}