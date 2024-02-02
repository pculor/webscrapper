import { webScrapper } from './services/webScraper';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent) => {
	console.log(event, '<<<===event');
	const reqJson = JSON.parse(event.body);
	const searchUrl = `https://www.google.com/search?gl=us&q=${encodeURIComponent(reqJson.keyword)}&tbm=isch`;
	await webScrapper(searchUrl);
	const response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*', // Required for CORS support to work
		},
		body: JSON.stringify({
			message: 'Go Serverless v1.0! Your function executed successfully!',
			input: event,
		}),
	};
	return response;
};

// const testRun = ()=> {
// 	const searchUrl = `https://www.google.com/search?gl=us&q=${encodeURIComponent('landscape')}&tbm=isch`;
// 	return webScrapper(searchUrl);
// };

// testRun();
