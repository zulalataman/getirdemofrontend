import './App.css';
import {Route, Routes} from "react-router-dom";
import UserPage from "./admin/UserPage";

function App() {
    return (
        <Routes>
            <Route path="/admin/users" element={<UserPage />} />
        </Routes>
    );
}

export default App;
