import React, { useState, useEffect } from "react";
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebase";

const GidaList = () => {
  const [reso, setReso] = useState([]);

  useEffect(() => {
    const fetchReso = async () => {
      const resoCollection = collection(db, "gida_temin");
      const resoSnapshot = await getDocs(query(resoCollection));

      setReso(
        resoSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    fetchReso();
  }, []);
    
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Gıda Temin Edenler
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "80%",
            borderRadius: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f07f13", color: "#fff" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>İsim</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Telefon
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Gıda Temin Edilebilen Kişi Sayısı
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Konuma Olan Uzaklık (saat)
              </th>
            </tr>
          </thead>
          <tbody>
            {reso.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.phone}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.passengerCount}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GidaList;
