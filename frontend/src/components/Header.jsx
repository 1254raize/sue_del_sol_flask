import React from "react";
import NavBar from "./navbar";
import HorizontalImage from "./HorizontalImage";

function Header(props) {
    return (
        <div>
            <NavBar screenSize={props.screenSize}/>
        </div>
        
    )
}

export default Header;