import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Subscriber() {
  // create a function to fetch Single Youtube Subscriber
  const [subscribersData, setSubscribersData] = useState(null);
  const { id } = useParams();
  const getSubscriber = async function () {
    let res = null;
    try {
      res = await axios.get(`/subscriber/${id}`, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setSubscribersData(res?.data);
    } catch (error) {
      // Error shown on frontend screen
      console.error(`Error fetching /subscriber/${id}:`, error);
      res.status(400).send({ message: error.message });
    }
  };

  useEffect(() => {
    getSubscriber();
  }, [subscribersData]);

  return (
    <>
      {/* Show a result to fetch Single Youtube Subscriber */}
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

export default Subscriber;
