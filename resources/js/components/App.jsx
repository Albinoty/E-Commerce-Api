import React, { Fragment } from 'react';

import Navbar from './Navbar';
import Category from './Category';
import Product from './Product';

const App = () => {

    return (
        <Fragment>
                <Navbar />
                <div className="container row mt-5 mx-auto">
                    <Category />
                    <Product />
                </div>
        </Fragment>
    );
}

export default App;