const puppeteer = require("puppeteer-core");
const auth = "brd-customer-hl_05f7a03a-zone-extract_reviews:h7izen1ms7e8";

async function run() {
  let browser;
  try {
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://${auth}@brd.superproxy.io:9222`,
    });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(2 * 60 * 1000);
    await page.goto(
      "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
    );
    const html = await page.content();
    const title = await page.evaluate(() => document.title);
    console.log(html);
    console.log(title);
  } catch (e) {
    console.error("run failed", e);
  } finally {
    await browser?.close();
  }
}

if (require.main == module) run();
