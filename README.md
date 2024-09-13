# :sunglasses: Quote of the day

I started from here: [Azure SWAG](https://docs.microsoft.com/azure/static-web-apps?WT.mc_id=build2020_swa-github-yolasors) (**S**tatic **W**eb **A**pps on **G**itHub).


It includes a website using HTML + JavaScript and a Node.js API.
See it live [here](https://gray-hill-0afb0d903.azurestaticapps.net).

## Working in VS Code

```bash

swa build

swa start

```

After that you will see:
```bash
Functions:

        httpTriggerQuotesFunction: [GET,POST] http://localhost:7071/api/httpTriggerQuotesFunction

        httpTriggerWaitAMomentFunction: [GET,POST] http://localhost:7071/api/httpTriggerWaitAMomentFunction

        ...
        ...
        ...
Azure Static Web Apps emulator started at http://localhost:4280. Press CTRL+C to exit.
```

## What's Azure *SWAG*?

TL;DR:

> It's an all-inclusive hosting service for web apps with serverless APIs built using JavaScript, based on continuous deployment from a *GitHub repository*.

For the longer version with the deployment instructions, [see this full length article](https://dev.to/sinedied/the-easy-way-to-serverless-web-apps-and-apis-with-azure-swag-2heb).

Take a look at [the official docs](https://docs.microsoft.com/azure/static-web-apps?WT.mc_id=build2020_swa-github-yolasors).

## Reference
[Add an API to Azure Static Web Apps with Azure Functions](https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript)
