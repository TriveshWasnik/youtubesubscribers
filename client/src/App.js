import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="container">
      <h2 className="heading">Get Youtube Subscribers</h2>
      <p className="paragraph">
        Get Youtube Subscribers is a simple API application that makes use of
        nodejs and mongoDB as a NoSQL database. The goal of this project is to
        create an API for there are three routers in it.
      </p>

      <h4 onClick={() => navigate("/subscribers")}>/subscribers</h4>

      <h4 onClick={() => navigate("/subscribers/names")}>/subscribers/names</h4>
      <div style={{ display: "flex" }}>
        <h4
          onClick={() => {
            if (id) {
              navigate(`/subscriber/${id}`);
            } else {
              setError("Please Enter Youtube Subscriber ID");
            }
          }}
        >
          /subscriber/
        </h4>
        <input
          type="text"
          placeholder="Enter subscriber ID here"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ marginLeft: "2px" }}
          required
        />
      </div>
      <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>
        {error}
      </p>
    </div>
  );
}

export default App;
