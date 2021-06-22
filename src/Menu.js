import React from "react";
import {BrowserRouter as Router , Route , Link , Switch} from "react-router-dom";

import AppOne from "./AppOne";
import AppTwo from "./AppTwo";
import {LoremGen} from "./LoremGen";
import Handler from "./Handler.js";

import {people} from "./morePeople.js";

import "./menu.css"

const Menu = () =>{
    return(
        <>
        <Router>
            <div>
                <h1 className="topic">This is menu selector <Link to="/">Home</Link></h1>
            </div>
            <Switch>
            <Route exact path="/">
                <NavZone/>
            </Route>
            <Route exact path="/appone">
                <AppOne/>
            </Route>
            <Route path="/apptwo">
                <AppTwo/>
            </Route>
            <Route path="/loremgen">
                <LoremGen/>
            </Route>
            <Route path="/handle/:id" children={<Handler/>}>
                <Handler/>
            </Route>
            <Route path="*">
                <div className="error">Error</div>
            </Route>
            </Switch>
        </Router>
        </>
    )
}

const NavZone = () =>{
    let random = Math.floor(Math.random() * people.length) + 1

    return(
        <div className="nav-zone">
            <ul>
                <Link to="/appone"><li>Page 1</li></Link>
                <Link to="/apptwo"><li>Page 2</li></Link>
                <Link to="/loremgen"><li>Page 3</li></Link>
                <Link to={`handle/${random}`}><li>Page 4</li></Link>
            </ul>
        </div>
    )
}

export default Menu;