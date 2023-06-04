import React from "react";
import ButtonComponent from "./ButtonComponent";

const YardimListeleri = () => {
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
    <h2 style={{ textAlign: "center", fontFamily: 'sans-serif'}}>Yardım Listeleri</h2>
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
      <ButtonComponent logo="vehicle2.svg" path="/araclist" title="Yolcu Taşıyabilenler" />
      <ButtonComponent logo="home.svg" path="/konutlist" title="Barınma İhtiyacı Olanlar" />

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
      <ButtonComponent logo="homee.svg" path="/evmusaitlist" title="Evim Müsait" />
      <ButtonComponent logo="spoon.svg" path="/gidalist" title="Gıdaya İhtiyacı Olanlar" />
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
        <ButtonComponent logo="animal.svg" path="/hayvanlist" title="Tehlikede Olan Hayvanlar" />
        <ButtonComponent logo="spoon.svg" path="/gidaverenlist" title="Gıda Sağlayanlar" />
        <ButtonComponent logo="veter.svg" path="/hayvanyardimlist" title="Hayvanlara Yardım Edenler" />

      </div>
    </div>
  );
}

export default YardimListeleri;
