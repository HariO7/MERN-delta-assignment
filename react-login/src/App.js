import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Table from './pages/table'

const App = ()=>{
    return (
    <div>
        <BrowserRouter>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/table" exact component={Table} />
        </BrowserRouter>
    </div>
    )
}

export default App