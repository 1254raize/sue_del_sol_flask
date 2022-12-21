import React from "react";
import Header from "./Header";
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
    const screenSize = useMediaQuery('only screen and (max-width: 900px)');
    return (

    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home screenSize={screenSize}/>} />
          <Route path="contacto" element={<Contact screenSize={screenSize}/>}/>
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
    </Routes>

    )

}

function Layout() {
    
    const screenSize = useMediaQuery('only screen and (max-width: 1000px)');
    return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
    
        <Header screenSize={screenSize}></Header>

    {/* <br></br> */}
    <div className="main"><Outlet/></div>
    <div><Footer/></div>
    </div>
    )   
}

export default App;