const puppeteer = require("puppeteer-core");
require("dotenv").config();
const fs = require("fs");

const auth = process.env.AUTH;
const host = process.env.HOST;

async function run() {
  let browser;
  try {
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://${auth}@${host}`,
    });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(2 * 60 * 1000);
    await page.goto(
      "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
    );

    const reviews = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          ".reviews--reviews-desktop--3cOLE .review--review-container--knyTv"
        ),
        (e) => ({
          reviewerName: e.querySelector(".ud-heading-md").innerText,
          reviewerText: e.querySelector(".ud-text-md span").innerText,
          id: Math.floor(Math.random() * 100),
        })
      )
    );

   const outputFilename = "reviews.json"
   fs.writeFile(outputFilename, JSON.stringify(reviews, null, 2), (err) => {
     if (err) throw err;
     console.log("file saved");
   });
  } catch (e) {
    console.error("run failed", e);
  } finally {
    await browser?.close();
  }
}

if (require.main == module) run();
