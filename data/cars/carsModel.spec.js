const Cars = require("./carsModel");
const db = require("../dbconfig");

beforeEach(async () => {
  await db("cars").truncate();
});

describe("cars model", () => {
  describe("insert()", () => {
    it("should insert the provided cars into the db", async () => {
      await Cars.insert({ make: "toyota" });
      await Cars.insert({ make: "nissan" });
      const cars = await db("cars");

      expect(cars).toHaveLength(2);
    });
    it("should insert the provided car into the db", async () => {
      let car = await Cars.insert({ make: "toyota" });
      expect(car.make).toBe("toyota");
    });
    it("should not post car with an existing make", async () => {
      try {
        await Cars.insert({ make: "toyota" });
        await Cars.insert({ make: "toyota" });
        const cars = await db("cars");
        expect(cars).toHaveLength(2);
      } catch (error) {
        expect(error.code).toBe("SQLITE_CONSTRAINT");
      }
    });
  });
});
