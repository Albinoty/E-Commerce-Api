<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // La resource ici signifie quand on renvoi un tableau ou peut choisir les valeurs à renvoyer
        // par défaut
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name
        ];
    }
}
