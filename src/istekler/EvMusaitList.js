import React, { useState, useEffect } from "react";
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebase";

const EvMusaitList = () => {
  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    const fetchAccomodations = async () => {
      const accCollection = collection(db, "konut_temin");
      const accSnapshot = await getDocs(query(accCollection));

      setAccomodations(
        accSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    fetchAccomodations();
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
        Barınma Sağlayabilenler
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
                Adres
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Telefon
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Barınma Sağlanılabilen Kişi Sayısı
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Barınma Sağlanılabilen Gün Sayısı
              </th>
            </tr>
          </thead>
          <tbody>
            {accomodations.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.address}
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

export default EvMusaitList;
