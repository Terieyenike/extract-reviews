const puppeteer = require("puppeteer-core");
require("dotenv").config();
const fs = require("fs");

const auth = process.env.AUTH;
const host = process.env.HOST;

