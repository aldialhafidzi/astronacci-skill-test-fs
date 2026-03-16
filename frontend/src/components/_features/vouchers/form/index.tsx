import { useState, type FormEvent } from "react";
import type { ParamsGenerateVoucherType } from "../../../../services/voucher/type";
import { checkVoucher, generateVoucher } from "../../../../services/voucher";
import ErrorMessage from "../../../_atoms/error-message";

export default function VoucherForm({
    onAddVoucher = () => { }
}: {
    onAddVoucher: () => void
}) {
    const [form, setForm] = useState<ParamsGenerateVoucherType>({
        flightNumber: '',
        date: '',
        aircraft: 'ATR',
        id: '',
        name: ''
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string[] | boolean[] }>({});

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: [false] }))
    };

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            const resultCheck = await checkVoucher({
                flightNumber: form.flightNumber,
                date: form.date
            });

            if (resultCheck?.exists) {
                setErrors({
                    flightNumber: ["Voucher already generated for this flight"],
                });
                return;
            }

            await generateVoucher(form);
            onAddVoucher();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error?.errors) setErrors(error.errors);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={submit} className="bg-white shadow-lg rounded-xl p-8" noValidate>
            <h1 className="text-xl font-bold text-gray-800 mb-6">
                Airline Voucher Seat Generator
            </h1>

            <div className="space-y-4">

                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Crew Name</label>
                    <input
                        id="name"
                        className="w-full border rounded-lg p-3"
                        placeholder="Crew Name"
                        onChange={(e) => handleChange("name", e.target.value)}
                    />

                    <ErrorMessage message={errors?.name?.[0]} />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="id">Crew ID</label>
                    <input
                        id="id"
                        className="w-full border rounded-lg p-3"
                        placeholder="Crew ID"
                        onChange={(e) => handleChange("id", e.target.value)}
                    />

                    <ErrorMessage message={errors?.id?.[0]} />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="flightNumber">Flight Number</label>
                    <input
                        id="flightNumber"
                        className="w-full border rounded-lg p-3"
                        placeholder="Flight Number (e.g. GA102)"
                        onChange={(e) => handleChange("flightNumber", e.target.value)}
                    />

                    <ErrorMessage message={errors?.flightNumber?.[0]} />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="date">Flight Date</label>
                    <input
                        id="date"
                        type="date"
                        className="w-full border rounded-lg p-3"
                        onChange={(e) => handleChange("date", e.target.value)}
                    />

                    <ErrorMessage message={errors?.date?.[0]} />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="aircraft">Select the Aircraft</label>
                    <select
                        id="aircraft"
                        className="w-full border rounded-lg p-3"
                        onChange={(e) => handleChange("aircraft", e.target.value)}
                    >
                        <option>ATR</option>
                        <option>Airbus 320</option>
                        <option>Boeing 737 Max</option>
                    </select>

                    <ErrorMessage message={errors?.aircraft?.[0]} />
                </div>


                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                    Generate Vouchers
                </button>
            </div>
        </form>
    )
}