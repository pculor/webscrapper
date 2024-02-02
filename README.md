1. Setup running puppeteer in AWS lambda using Serverless framework
2. Continue the previous step, write a simple scraping program for google.com that use given fingerprint, cookies (can be hardcoded), your desired anti-captcha techniques/3rd parties services
3. Write scraped  data to your desired database
Tech stacks: Nodejs, Typescript

Test Process

### Locally
Run PostgreSQL via docker (make sure you have docker installed on your machine)
`./startdb.sh `

Then run app offline
`npm run local`

[POST]  http://localhost:3000/dev/datalog

request body
```
{
  "keyword": "landscape"
 }
```

### To run remotely

[POST] https://2bonmldyj3.execute-api.us-east-1.amazonaws.com/dev/datalog

request body
```
{
  "keyword": "landscape"
 }
```