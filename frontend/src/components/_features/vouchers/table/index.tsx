import { deleteVoucher } from "../../../../services/voucher";
import type { VoucherType } from "../../../../services/voucher/type";

export default function TableVoucher({
    data = [],
    loading = false,
    refetch = () => { }
}: {
    data: VoucherType[],
    loading: boolean,
    refetch: () => void
}) {
    const handleDelete = async (id: number) => {
        try {
            await deleteVoucher(id);
            refetch();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="overflow-x-auto text-sm min-h-[500px]">
            <table className="min-w-full bg-white border rounded-lg">

                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="p-2 border text-center">No</th>
                        <th className="p-2 border">Crew Name</th>
                        <th className="p-2 border">Crew ID</th>
                        <th className="p-2 border">Flight</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Aircraft</th>
                        <th className="p-2 border">Seats</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {loading &&
                        <>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map(k => (
                                <tr key={k}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7]?.map(v =>
                                        <td key={v} className="p-2 border">
                                            <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </>
                    }

                    {!loading &&
                        <>
                            {data?.map((v, index) => (
                                <tr key={index} className="hover:bg-gray-50">

                                    <td className="p-2 border text-center">{index + 1}</td>
                                    <td className="p-2 border">{v.crewName}</td>
                                    <td className="p-2 border">{v.crewId}</td>
                                    <td className="p-2 border">{v.flightNumber}</td>
                                    <td className="p-2 border">{v.date}</td>
                                    <td className="p-2 border">{v.aircraft}</td>

                                    <td className="p-2 border">
                                        <div className="flex gap-2">
                                            {v.seats.map((seat: string) => (
                                                <span
                                                    key={seat}
                                                    className="bg-green-100 text-green-700 p-1 rounded text-sm font-semibold"
                                                >
                                                    {seat}
                                                </span>
                                            ))}
                                        </div>
                                    </td>

                                    <td className="p-2 border">
                                        <button
                                            onClick={() => handleDelete(v?.id)}
                                            className={`px-3 py-1 border rounded bg-red-600 text-white`}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </>
                    }
                </tbody>
            </table>

            {!loading && !data?.length && <p className="p-6 text-center">No Data</p>}
        </div>
    )
}