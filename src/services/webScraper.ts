import puppeteer from 'puppeteer';
import databaseQuery from '../models/databaseConnection';
import dotenv from 'dotenv';

dotenv.config();

const { databaseConnection } = databaseQuery;


export const webScrapper = async (siteUrl) => {
	const browser = await puppeteer.launch({
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