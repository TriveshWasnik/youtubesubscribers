const express = require("express");
const app = express();
const Subscriber = require("./models/subscribers");
const { ObjectId } = require("mongoose");

// Get all Youtube Subscribers Code
app.get("/subscribers", async (req, res) => {
  try {
    // To fetch all records of Subcribers
    const subscribers = await Subscriber.find({});
    // All Subscribers show on server (backend)
    res.status(200).send({
      success: true,
      message: "All Subscribers",
      totalSubscribers: subscribers.length,
      subscribers,
    });
  } catch (error) {
    console.log(error);
    // Show Error on the Server (backend)
    res.status(500).send({
      success: false,
      message: "Error in getting subscribers",
      error: error.message,
    });
  }
});

// Get all Youtube Subscribers but display only their name and subscribedChannel

app.get("/subscribers/names", async (req, res) => {
  try {
    // To fetch all records of Subcribers to specifying name and subscribedChannel
    const subscribers = await Subscriber.find({}).select([
      "-_id",
      "-subscribedDate",
      "-__v",
    ]);
    // All Subscribers show on server (backend)
    res.status(200).send({
      success: true,
      message: "All Subscribers",
      totalSubscribers: subscribers.length,
      subscribers,
    });
  } catch (error) {
    console.log(error);
    // Show Error on the Server (backend)
    res.status(500).send({
      success: false,
      message: "Error in getting subscribers",
      error: error.message,
    });
  }
});

// get only one subscriber

app.get("/subscriber/:id", async (req, res) => {
  try {
    // To fetch single record
    const id = req.params.id;
    const subscribers = await Subscriber.find({ _id: id });
    // that Subscriber show on server (backend)
    res.status(200).send({
      success: true,
      message: "Get Single Subscriber",
      subscribers,
    });
  } catch (error) {
    console.log(error);
    // Show Error on the Server (backend)
    res.status(500).send({
      success: false,
      message: "Error in getting subscriber",
      error: error.message,
    });
  }
});

module.exports = app;
