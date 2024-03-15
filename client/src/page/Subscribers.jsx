// Subscribers.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Subscribers() {
  const [subscribersData, setSubscribersData] = useState(null);
  // create a function to fetch all Youtube Subscribers

  const subscribersAll = async function () {
    let res = null;
    try {
      res = await axios.get("/subscribers", {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      console.log(res);
      setSubscribersData(res?.data);
    } catch (error) {
      // Error shown on frontend screen
      console.error("Error fetching /subscribers:", error);
      //res.status(400).send({ message: error.message });
    }
  };

  useEffect(() => {
    subscribersAll();
  }, [subscribersData]);

  return (
    <>
      {/* Show a result to fetch All Youtube Subscribers */}

      <pre style={{ padding: "20px" }}>
        <div>{"["}</div>
        {subscribersData?.subscribers?.map((item) => (
          <div key={item?.name} style={{ padding: "10px 20px" }}>
            {"{"}
            <div style={{ paddingLeft: "15px" }}>
              <p>"_id":"{item?._id}"</p>
              <p>"name":"{item?.name}"</p>
              <p>"subscribedChannel":"{item?.subscribedChannel}"</p>
              <p>"subscribedDate":"{item?.subscribedDate}"</p>
              <p>"__v":{item?.__v}</p>
            </div>
            {"}"}
          </div>
        ))}
        <div>{"]"}</div>
      </pre>
    </>
  );
}

export default Subscribers;
