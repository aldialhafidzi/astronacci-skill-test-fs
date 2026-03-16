<?php

namespace App\Http\Controllers;

use App\Exceptions\VoucherAlreadyExistsException;
use App\Http\Requests\GenerateVoucherRequest;
use App\Http\Resources\VoucherCollection;
use App\Models\Voucher;
use App\Services\SeatGeneratorService;
use Illuminate\Http\Request;
use App\Http\Resources\VoucherResource;

class VoucherController extends Controller
{
    public function check(Request $request)
    {
        $exists = Voucher::where('flight_number', $request->flightNumber)
            ->where('flight_date', $request->date)
            ->exists();

        return response()->json([
            'exists' => $exists
        ]);
    }

    public function generate(
        GenerateVoucherRequest $request,
        SeatGeneratorService $seatService
    ) {
        $exists = Voucher::where('flight_number', $request->flightNumber)
            ->where('flight_date', $request->date)
            ->exists();

        if ($exists) {
            throw new VoucherAlreadyExistsException();
        }

        $seats = $seatService->generate($request->aircraft);

        $voucher = Voucher::create([
            'crew_name'     => $request->name,
            'crew_id'       => $request->id,
            'flight_number' => $request->flightNumber,
            'flight_date'   => $request->date,
            'aircraft_type' => $request->aircraft,
            'seat1'         => $seats[0],
            'seat2'         => $seats[1],
            'seat3'         => $seats[2]
        ]);

        return new VoucherResource($voucher);
    }

    public function destroy($id)
    {
        $voucher = Voucher::findOrFail($id);
        $voucher->delete();

        return response()->json([
            'success' => true,
            'message' => 'Voucher deleted successfully'
        ]);
    }

    public function get()
    {
        return new VoucherCollection(
            Voucher::latest()->paginate(10)
        );
    }
}
