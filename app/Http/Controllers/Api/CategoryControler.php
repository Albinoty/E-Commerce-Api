<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoryControler extends Controller
{
    public function index(){
        //Permet de renvoyer tous les données
        // return Category::all();
        //Permet de renvoyer une collection de catergory via la resource créé
        return CategoryResource::collection(Category::all());
    }
}
