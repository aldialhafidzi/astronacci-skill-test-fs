<?php

namespace App\Exceptions;

use Exception;

class VoucherAlreadyExistsException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'message' => 'Voucher already generated for this flight and date'
        ], 409);
    }
}
