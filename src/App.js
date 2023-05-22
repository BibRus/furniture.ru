import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from "./pages/Main/Main";
import Catalog from "./pages/Catalog/Catalog";

import './App.module.css';
import Products from "./pages/Products/Products";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Main />} />
                <Route path='/' element={<Main/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/products/:productId' element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    );
}