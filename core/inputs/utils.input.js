import Container from './dependencyContainer.utils'
import configuration from '../../configurations'
import UtilsInteractor from '../interactors/utils.interactor'
import { params, data } from "@serverless/cloud"
import Twitter from "twitter"
import { TwitterConfiguration } from '../entities/utils.entities'

class UtilsInput {
    dependencies = new Container()

    constructor() {
        //Register dependencies for UtilsInteractor class
        this.dependencies.singleton('params', params)
        this.dependencies.register('TwitterConfiguration', TwitterConfiguration, ['params'])
        this.dependencies.register('Twitter', Twitter, ['TwitterConfiguration'])
        this.dependencies.singleton('settings', configuration)
        this.dependencies.singleton('dataBase', data)
        this.dependencies.register('UtilsInteractor', UtilsInteractor, ['dataBase', 'Twitter', 'settings'])
        this.utilsInteractor = this.dependencies.get('UtilsInteractor')
    }

    async getTweets() {
        return await this.utilsInteractor.getTweets()
    }

    async postContact(raw_information) {
        return await this.utilsInteractor.postContact(raw_information)
    }

}
export default new UtilsInput()