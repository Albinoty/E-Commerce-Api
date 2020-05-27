<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        //Permet de renvoyer tous les données
        // return Product::all();
        //Permet de renvoyer une collection de produit via la resource créé
        return ProductResource::collection(Product::all());
    }
}
