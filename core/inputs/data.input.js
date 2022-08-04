import { data } from "@serverless/cloud"
import Container from './dependencyContainer.utils'
import configuration from '../../configurations'
import DataInteractor from '../interactors/data.interactor'

class DataInput {
    dependencies = new Container()

    constructor() {
        //Registrar aqui las dependencias y la clase DataInteractor
        this.dependencies.singleton('settings', configuration)
        this.dependencies.singleton('dataBase', data)
        this.dependencies.register('DataInteractor', DataInteractor, ['dataBase', 'settings'])
        this.dataInteractor = this.dependencies.get('DataInteractor')
    }

    async getData() {
        return await this.dataInteractor.getData()
    }

    async setData(raw_information) {
        return await this.dataInteractor.setData(raw_information)
    }
}

export default new DataInput()