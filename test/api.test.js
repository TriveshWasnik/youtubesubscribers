let chai = require("chai");
let chaihttp = require("chai-http");
let server = require("../src/app.js");
const mongoose = require("mongoose");

chai.should();
chai.use(chaihttp);

describe("API Tests", () => {
  /* API test for subscribers */
  describe("GET /subscribers", () => {
    it("should return an array of all youtube subscribers with full information", (done) => {
      chai
        .request(server)
        .get("/subscribers")
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.a("array");
          }
        });
      done();
    });
  });

  /* API test for subscribers/names */
  describe("GET /subscribers/names", () => {
    it("should return an array of all youtube subscribers with only name and subscribedChannel", (done) => {
      chai
        .request(server)
        .get("/subscribers/names")
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.a("array");
          }
        });
      done();
    });
  });

  /* API test for subscriber/:id */
  describe("GET /subscriber/:id", () => {
    it("should return a details of specific youtube subscriber with valid ID", (done) => {
      const id = mongoose.Types.ObjectId();
      chai
        .request(server)
        .get(`/subscriber/${id}`)
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            res.should.have.status(200);
            res.body.should.be.a("array");
          }
        });
      done();
    });
  });
});
