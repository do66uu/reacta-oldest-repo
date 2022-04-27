import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "../pages/Posts";
import PostItem from "../pages/PostItem";
import About from "../pages/About";
import Error from "../pages/Error";

const PostRoutes = () => {
    return (
        <Switch>
            <Route exact path="/posts">
                <Posts/>
            </Route>
            <Route exact path="/posts/:id">
                <PostItem/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/error">
                <Error/>
            </Route>
            <Redirect to="/posts"/>
        </Switch>
    );
};

export default PostRoutes;
