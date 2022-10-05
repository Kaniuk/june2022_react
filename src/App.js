import {Route, Routes} from "react-router-dom";

import {Comments, MainLayout, Posts, Users} from "./components";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
            </Route>
        </Routes>
    );
}

export default App;
