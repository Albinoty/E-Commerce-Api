import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Category = () => {
    // Je declare mon state pour stocker mes éléments
    const [categories,setCategories] = useState([]);

    // Lorsque mon composant est monté, je vais chercher mes éléments dans ma db
    // Via une adresse de type api avec axios
    useEffect(() => {
        // GET pour préciser quel type de requete,
        // En parametre je mets l'url de l'api
        Axios.get('/api/categories')
            // Si j'ai quelque chose, je stock mes données dans mon state
            .then((response) => setCategories(response.data.data))
            // Si y'a une erreur, j'affiche un message d'erreur dans la console
            .catch((error) => console.log(error)); 
    },[]);

    return (
        <div className="col-md-4 mt-2">
            <h2>Categories</h2>
            <ul className="list-group">
                {/* condition pour dire si mon state categories n'est pas vide, je les affiche */}
                { categories != null
                    ? 
                    categories.map((item,index) => <li className="list-group-item" key={index}>{item.name}</li>)
                    : 
                    ""
                }
            </ul>
        </div>
    );
}

export default Category;