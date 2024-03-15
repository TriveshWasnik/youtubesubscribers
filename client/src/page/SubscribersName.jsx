import React, { useState, useEffect } from "react";
import axios from "axios";

function SubscribersName() {
  const [subscribersData, setSubscribersData] = useState(null);
  // create a function to fetch all Youtube Subscribers but show only name and subscribedChannel
  const subscribersName = async function () {
    let res = null;
    try {
      res = await axios.get("/subscribers/names", {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setSubscribersData(res?.data);
    } catch (error) {
      // Error shown on frontend screen
      console.error("Error fetching /subscribers/names:", error);
      res.status(400).send({ message: error.message });
    }
  };

  useEffect(() => {
    subscribersName();
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
              <p>"name":"{item?.name}"</p>
              <p>"subscribedChannel":"{item?.subscribedChannel}"</p>
            </div>
            {"}"}
          </div>
        ))}
        <div>{"]"}</div>
      </pre>
    </>
  );
}

export default SubscribersName;
