import React from "react";
import "./state/stores/ProductsStore";
import "./state/stores/AuthStore";
import './index.scss';
import ProductList from "./components/productList";
import Login from "./components/Login";


export class App extends React.Component {


    render() {
        return (
            <main>
                <ProductList/>
                <Login/>
            </main>
        );
    }
}



