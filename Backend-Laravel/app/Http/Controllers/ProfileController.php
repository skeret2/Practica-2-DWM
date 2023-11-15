<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Profile;


class ProfileController extends Controller
{
    public function getProfile()
    {
        $profiles = Profile::with('hobbies', 'frameworks')->get();
        return response()->json($profiles);
    }
}
