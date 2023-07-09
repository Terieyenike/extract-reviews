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
  } catch (error) {

  }
  finally {
    await browser?.close()
  }
}

if (require.main == module) run();