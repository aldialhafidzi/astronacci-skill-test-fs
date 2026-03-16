<?php

namespace App\Services;

class SeatGeneratorService
{
    public function generate($aircraft)
    {
        $layouts = [
            'ATR' => [
                'rows' => range(1, 18),
                'seats' => ['A', 'C', 'D', 'F']
            ],
            'Airbus 320' => [
                'rows' => range(1, 32),
                'seats' => ['A', 'B', 'C', 'D', 'E', 'F']
            ],
            'Boeing 737 Max' => [
                'rows' => range(1, 32),
                'seats' => ['A', 'B', 'C', 'D', 'E', 'F']
            ]
        ];

        $config = $layouts[$aircraft];

        $allSeats = [];

        foreach ($config['rows'] as $row) {
            foreach ($config['seats'] as $seat) {
                $allSeats[] = $row . $seat;
            }
        }

        shuffle($allSeats);

        return array_slice($allSeats, 0, 3);
    }
}
