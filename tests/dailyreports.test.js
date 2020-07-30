const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("test route for all daily reports statistics", () => {
  test("all stats are returned as json", async (done) => {
    console.log("Entered test...");
    await api
      .get("/api/usa/dailyreport")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    done();
  });

  test("all global stats are returned as json", async (done) => {
    console.log("Entered test...");
    await api
      .get("/api/global/dailyreport")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    done();
  });
});
