import React from "react";

const d=new Date();
var currentYear=d.getFullYear();

function Footer(){
    return(<div className="footer">
        <p>Copyright Rythm @{currentYear}</p>
        </div>
    );
}

export default Footer;