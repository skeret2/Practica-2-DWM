<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Profile;


class ProfileController extends Controller
{
    public function getProfile()
    {
        $profile = Profile::all();
        return response()->json($profile);
    }
}
