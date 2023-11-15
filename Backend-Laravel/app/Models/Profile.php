<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $filleable = [
        'name',
        'lastname',
        'email',
        'city',
        'country',
        'sumary',
        'hobby_id',
        'framework_id',
    ];
    
    #funcion para obtener los hobbies y frameworks de un perfil
    public function hobbies()
    {
        return $this->hasMany(Hobby::class);
    }

    public function frameworks()
    {
        return $this->hasMany(Framework::class);
    }
}
