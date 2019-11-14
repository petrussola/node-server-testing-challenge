const server = require("./server");
const request = require("supertest");

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/");
      expect(response.status).toBe(expectedStatusCode);
    });
    it("should return a JSON object from the index route", async () => {
      const expectedBody = { api: "running" };
      const response = await request(server).get("/");
      expect(response.body).toEqual(expectedBody);
    });
    it("should return a JSON object from the index route", async () => {
      const response = await request(server).get("/");
      expect(response.type).toEqual("application/json");
    });
  });
});