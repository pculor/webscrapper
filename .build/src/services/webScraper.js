"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webScrapper = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const databaseConnection_1 = __importDefault(require("../models/databaseConnection"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { databaseConnection } = databaseConnection_1.default;
const webScrapper = async (siteUrl) => {
    const browser = await puppeteer_1.default.launch({
        headless: false,
        defaultViewport: null,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    });
    const page = await browser.newPage();
    await page.goto(siteUrl, {
        waitUntil: 'networkidle2',
    });
    await page.setViewport({ width: 1680, height: 1050 });
    // Get page data
    const imageDescription = await page.evaluate(() => {
        // Fetch the first element with class "quote"
        const imageList = document.querySelector('.islrc');
        const dataSet = [];
        imageList.querySelectorAll('.bytUYc').forEach((element) => dataSet.push(element.textContent));
        return { dataSet };
    });
    // Display the image description
    const descriptionText = imageDescription;
    console.log(descriptionText);
    // write text to database
    const userQuery = 'INSERT INTO datalog (imageDescription) VALUES ($1) returning *';
    const params = [descriptionText.dataSet];
    await databaseConnection.query(userQuery, params);
    await browser.close();
};
exports.webScrapper = webScrapper;
//# sourceMappingURL=webScraper.js.map