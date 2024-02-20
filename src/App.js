import './App.css';
import {Route, Routes} from "react-router-dom";
import UserPage from "./admin/UserPage";
import CategoryPage from "./admin/Category/CategoryPage";
import UpdateCategoryPage from "./admin/Category/UpdateCategoryPage";
import CreateCategoryPage from "./admin/Category/CreateCategoryPage";

function App() {
    return (
        <Routes>
            <Route path="/admin/users" element={<UserPage />} />
            <Route path="/admin/categories" element={<CategoryPage />} />
            <Route path="/admin/categories/update/:id" element={<UpdateCategoryPage />} />
            <Route path="/admin/categories/create" element={<CreateCategoryPage />} />
        </Routes>
    );
}

export default App;
