import React, { useState } from "react";
import LogoComp from "../components/LogoComp";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const AracForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passengerCount, setPassengerCount] = useState("");
  const [time, setTime] = useState("");
  const [urgency, setUrgency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collection(db, "Arac"), {
      name,
      surname,
      address,
      email,
      phone,
      passengerCount,
      time,
      urgency,
      creationDate: serverTimestamp(),
    }).then(() => {
      setName("");
      setSurname("");
      setAddress("");
      setEmail("");
      setPhone("");
      setPassengerCount("");
      setTime("");
      setUrgency("");
    });
  };

  return (
    <div>
      <LogoComp />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Araç Talebi
          </h1>
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#f7f7f7",
              padding: "40px",
              borderRadius: "6px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              marginTop: "-20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "48%", marginRight: "10px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#f07f13",
                  }}
                >
                  * İsim:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid rgba(71, 101, 255, 0.37)",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                  required
                />
              </div>
              <div style={{ width: "48%" }}>
                <label
                  htmlFor="surname"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#f07f13",
                  }}
                >
                  * Soyisim:
                </label>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid rgba(71, 101, 255, 0.37)",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                  required
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "48%" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#f07f13",
                  }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid rgba(71, 101, 255, 0.37)",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ width: "48%" }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#f07f13",
                  }}
                >
                  * Telefon:
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid rgba(71, 101, 255, 0.37)",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                  required
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="address"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#f07f13",
                }}
              >
                * Nereden Alınacak:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "2px solid rgba(71, 101, 255, 0.37)",
                  borderRadius: "10px",
                  outline: "none",
                }}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "48%" }}>
                <label
                  htmlFor="passengerCount"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#f07f13",
                  }}
                >
                  * Kaç Kişi :
                </label>
                <input
                  type="number"
                  id="passengerCount"
                  value={passengerCount}
                  onChange={(e) => setPassengerCount(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid rgba(71, 101, 255, 0.37)",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                  required
                  min={1}
                />
              </div>
              <div style={{ marginBottom: "20px", width: "48%" }}>
                <label
                  htmlFor="urgency"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "bold",
                    color: "#f07f13",
                  }}
                >
                  * Aciliyet:
                </label>
                <select
                  id="urgency"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "2px solid rgba(71, 101, 255, 0.37)",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                  required
                >
                  <option value="">Aciliyet Seçin</option>
                  <option value="Kritik">Kritik</option>
                  <option value="Orta">Orta</option>
                  <option value="Normal">Normal</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "rgba(128,9,9)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  color: "#eeeff6",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Formu Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AracForm;
