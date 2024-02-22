import './App.css';
import {Route, Routes} from "react-router-dom";
import UserPage from "./admin/UserPage";
import CategoryPage from "./admin/Category/CategoryPage";
import UpdateCategoryPage from "./admin/Category/UpdateCategoryPage";
import CreateCategoryPage from "./admin/Category/CreateCategoryPage";
import ProductPage from "./admin/Product/ProductPage";
import UpdateProductPage from "./admin/Product/UpdateProductPage";
import CreateProductPage from "./admin/Product/CreateProductPage";

function App() {
    return (
        <Routes>
            <Route path="/admin/users" element={<UserPage/>}/>
            <Route path="/admin/categories" element={<CategoryPage/>}/>
            <Route path="/admin/categories/update/:id" element={<UpdateCategoryPage/>}/>
            <Route path="/admin/categories/create" element={<CreateCategoryPage/>}/>
            <Route path="/admin/products" element={<ProductPage/>}/>
            <Route path="/admin/products/update/:id" element={<UpdateProductPage/>}/>
            <Route path="/admin/products/create" element={<CreateProductPage/>}/>
        </Routes>
    );
}

export default App;
