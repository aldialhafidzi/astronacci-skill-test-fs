<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class VoucherCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'success'   => true,
            'data'      => $this->collection->map(function ($item) use ($request) {
                return [
                    'id'            => $item->id,
                    'crewName'      => $item->crew_name,
                    'crewId'        => $item->crew_id,
                    'flightNumber'  => $item->flight_number,
                    'date'          => $item->flight_date,
                    'aircraft'      => $item->aircraft_type,
                    'seats'         => [
                        $item->seat1,
                        $item->seat2,
                        $item->seat3
                    ]
                ];
            })
        ];
    }

    public function toResponse($request)
    {
        return response()->json([
            'success' => true,
            'data'      => $this->collection->map(function ($item) use ($request) {
                return [
                    'id'            => $item->id,
                    'crewName'      => $item->crew_name,
                    'crewId'        => $item->crew_id,
                    'flightNumber'  => $item->flight_number,
                    'date'          => $item->flight_date,
                    'aircraft'      => $item->aircraft_type,
                    'seats'         => [
                        $item->seat1,
                        $item->seat2,
                        $item->seat3
                    ]
                ];
            }),
            'meta' => [
                'current_page' => $this->resource->currentPage(),
                'last_page' => $this->resource->lastPage(),
                'per_page' => $this->resource->perPage(),
                'total' => $this->resource->total(),
            ]
        ]);
    }
}
