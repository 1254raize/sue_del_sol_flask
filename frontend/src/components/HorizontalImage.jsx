import React from "react";
import Image from "mui-image";
import IsVisible from "react-is-visible/lib/IsVisible";
import { imageTransitionStyling } from "./constants";

function HorizontalImage(props) {
    return(
        <IsVisible>
        {(isVisible) => <Image style={imageTransitionStyling(isVisible)} src={props.image} alt={props.alt} height={props.screenSize ? "300px": "500px"} width="100%" fit={props.fit} overFlow="Hidden" sx={{objectPosition: "0% 35%"}}/>}
    </IsVisible>
    );
    
}

export default HorizontalImage;