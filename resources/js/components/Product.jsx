import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Product = () => {

    // Je declare mon state pour stocker mes éléments
    const [products,setProducts] = useState([]);

    // Lorsque mon composant est monté, je vais chercher mes éléments dans ma db
    // Via une adresse de type api avec axios
    useEffect(() => {
        // GET pour préciser quel type de requete,
        // En parametre je mets l'url de l'api
        Axios.get('/api/products')
            // Si j'ai quelque chose, je stock mes données dans mon state
            .then((response) => setProducts(response.data.data))
            // Si y'a une erreur, j'affiche un message d'erreur dans la console
            .catch((error) => console.log(error)); 
    },[]);


    return (
        <div className="col-md-8 mt-2">
            <h2>Products</h2>
            <div className="row">
                {/* condition pour dire si mon state products n'est pas vide, je les affiche */}
                { 
                    products != null ?
                        products.map((item) => 
                            <div className="col-md-4 mt-2">
                                <div className="card">
                                    <img src="https://rukminim1.flixcart.com/image/714/857/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p36fkykfjqt.jpeg?q=50" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">Price : {item.price} €</p>
                                        <a href="#" className="btn btn-primary">Buy</a>
                                    </div>
                                </div>
                            </div>
                        )  
                    : ""             
                }
            </div>
        </div>
    );

}

export default Product;