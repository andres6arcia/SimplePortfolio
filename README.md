# Simple Portfolio
This app was developed for Zemoga company, and consist on a simple portfolio that retrieves all information from the data base. This app takes me 20h of coding and setting up.


## Steps to get up the app
1. Create a free account on https://cloud.serverless.com or use the GitHub account to login.
2. Create an app with the wizard, it gives you an SECRET KEY 
3. Use this line to create an app template localy, run the command below and then take note the name you used for your app:
```CMD
npx @serverless/cloud --template js-api -—login <SECRET_KEY_GIVEN>
```
4. Remove all files given an clone my GitHub repository in that folder with this command: 
```CMD
git clone https://github.com/andres6arcia/SimplePortfolio.git
```
5. Install dependencies with the command: 
```CMD
cloud install
```
6. Deploy the proyect with this command:
```CMD
cloud deploy <NAME_OF_YOUR_APP>
```
7. The command line gives you a URL like this "https://delightful-stack-k2dxr.cloud.serverless.com" to access the app, and that's it 
* * *

## Technologies used
* The serverless cloud framework
* Twitter library to retrieve the last 5 tweets.
* Template from HTML5UP webpage: html5up.net
* Dependency injection container
* * *

## Architecture Used: Onion
![Onion Architecture](https://raw.githubusercontent.com/andres6arcia/SimplePortfolio/master/onionArchitecture.png)

