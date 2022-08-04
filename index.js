import { api } from "@serverless/cloud"
import configuration from "./configurations"
import portfolioController from "./server/controllers/portfolio.controller"


// Set routes for the API
api.get(configuration.SERVER.ROUTES.GET_DATA, portfolioController.getData)
api.post(configuration.SERVER.ROUTES.POST_DATA, portfolioController.postData)
api.get(configuration.SERVER.ROUTES.GET_TWEETS, portfolioController.getTweets)
api.post(configuration.SERVER.ROUTES.POST_CONTACT, portfolioController.postContact)