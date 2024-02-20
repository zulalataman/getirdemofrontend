import './App.css';
import {Route, Routes} from "react-router-dom";
import UserPage from "./admin/UserPage";
import CategoryPage from "./admin/CategoryPage";

function App() {
    return (
        <Routes>
            <Route path="/admin/users" element={<UserPage />} />
            <Route path="/admin/categories" element={<CategoryPage />} />
        </Routes>
    );
}

export default App;
