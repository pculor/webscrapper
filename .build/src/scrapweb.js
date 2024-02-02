"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const webScraper_1 = require("./services/webScraper");
const handler = async (event) => {
    console.log(event, '<<<===event');
    const reqJson = JSON.parse(event.body);
    const searchUrl = `https://www.google.com/search?gl=us&q=${encodeURIComponent(reqJson.keyword)}&tbm=isch`;
    await (0, webScraper_1.webScrapper)(searchUrl);
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
exports.handler = handler;
// const testRun = ()=> {
// 	const searchUrl = `https://www.google.com/search?gl=us&q=${encodeURIComponent('landscape')}&tbm=isch`;
// 	return webScrapper(searchUrl);
// };
// testRun();
//# sourceMappingURL=scrapweb.js.map