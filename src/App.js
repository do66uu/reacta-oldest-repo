import React from 'react';
import './styles/App.css'
import {BrowserRouter, Link} from "react-router-dom";
import PostRoutes from "./components/PostRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </div>
            <PostRoutes/>
        </BrowserRouter>
    );
};

export default App;
