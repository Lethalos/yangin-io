import React from "react";
import logo from '../logo/logo.png';

const LogoComp = () => {
    return (
        <div
            style={{    
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
                height: "60%",
                margin: "0 auto",
                marginTop: "0px",
            }} 
            onClick={
                () => {
                    window.location.href = "/";
                }
            }
        >
            <img src={logo} alt="logo"  
                style={{
                    width: "20%",
                    height: "20%",
                    margin: "0 auto",
                }}
            />
        </div>
    );
}

export default LogoComp;
