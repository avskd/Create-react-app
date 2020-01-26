import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";
import Eamnet from "../pages/Eamnet";
import ImportExtractors from "../pages/ImportExtractors";
import ImportRunningExtractors from "../pages/ImportRunningExtractors";

const pageNotFound = () => {
    return (
        <div>
            !! Page Not Found !!
        </div>
    );
};





const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/ChatPage/" component={ChatPage} />
                <Route path="/Eamnet/" component={Eamnet} />   
                <Route path="/GetExtractors/" component={ImportExtractors} />  
                <Route path="/GetRunningExtractors/" component={ImportRunningExtractors} />        
                <Route component={pageNotFound} />

            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;