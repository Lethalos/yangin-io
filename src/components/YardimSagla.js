import React from "react";
import ButtonComponent from "./ButtonComponent";

const YardimSagla = () => {
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
    <h2 style={{ textAlign: "center", fontFamily: 'sans-serif'}}>Yardım Sağla</h2>
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
      <ButtonComponent logo="vehicle.svg" path="/aractemin" title="Yolcu Taşıyabilirim" />
      <ButtonComponent logo="home.svg" path="/konuttemin" title="Konaklama Sağlayabilirim" />
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
        <ButtonComponent logo="animal.svg" path="/vettemin" title="Hayvanlara Yardım Edebilirim" />
        <ButtonComponent logo="spoon.svg" path="/gidatemin" title="Gıda Yardımı Sağlayabilirim" />
      </div>
    </div>
  );
}

export default YardimSagla;
