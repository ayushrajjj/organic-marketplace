import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/products" component={ProductList} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
