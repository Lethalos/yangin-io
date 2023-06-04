import React from "react";
import ButtonComponent from "./ButtonComponent";

const YardimAl = () => {
  return (
    <div 
    style={{
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        margin: "0 auto",
        marginTop: "10px",

        }}
    >
    <h2 style={{ textAlign: "center", fontFamily: 'sans-serif'}}>Yardım Al</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "70%",
        margin: "0 auto",
      }}
    >
      <ButtonComponent logo="offf.svg" path="/ambulans" title="Ambulansa İhtiyaç Var" />
      <ButtonComponent logo="vehicle.svg" path="/arac" title="Araca İhtiyaç Var" />
      <ButtonComponent logo="home.svg" path="/barinma" title="Barınma İhtiyacı Var" />
    </div>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <ButtonComponent logo="fireman.svg" path="/itfaiye" title="İtfaiyeye İhtiyaç Var" />
        <ButtonComponent logo="animal.svg" path="/hayvan" title="Tehlikede Olan Hayvan Var" />
        <ButtonComponent logo="spoon.svg" path="/gida" title="Gıdaya İhtiyacı Var" />
      </div>
    </div>
  );
}

export default YardimAl;
