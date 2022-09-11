import React from "react";
import Navbar from "../components/Navbar.Component";


const DefaultLayoutHoc = (Component) => ({ ...props}) => {
  return (
    <div>
        <Navbar />
        <Component {...props}/>
        <duiv>Footer</duiv>
    </div>
  );
};

export default DefaultLayoutHoc;
