const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("test route for all death statistics", () => {
  test("all stats are returned as json", async (done) => {
    console.log("Entered test...");
    await api
      .get("/api/usa/coronadeaths")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    done();
  });

  test("all global stats are returned as json", async (done) => {
    console.log("Entered test...");
    await api
      .get("/api/global/coronadeaths")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    done();
  });
});
