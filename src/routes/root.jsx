import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from '../Containers/Home'
import Users from '../Containers/Users'

function Root(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/users" element={<Users />}/>
            </Routes>
        </Router>
    )
}

export default Root