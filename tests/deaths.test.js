const supertest = require("supertest");
const ap = require("../app");
const api = supertest(app);

describe("test route for all death statistics", () => {
  test("all stats are returned as json", async () => {
    console.log("Entered test...");
    await api
      .get("/api/coronadeaths")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});
