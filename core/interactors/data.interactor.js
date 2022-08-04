import { Data } from '../entities/data.entities'


export default class DataInteractor {

    constructor(db, settings) {
        this.db = db
        this.settings = settings
    }

    async getData() {
        try {

            const raw_information = await this.db.get(this.settings.CORE.DB.DATA_KEY)
            const information = new Data(raw_information)
            return { message: this.settings.CORE.MESSAGES.GET_SUCCESS, data: information }

        } catch (error) { throw new Error(this.settings.CORE.MESSAGES.GET_ERROR + ': ' + error.message) }
    }

    async setData(raw_information) {
        try {
            
            const information = new Data(raw_information)
            const res = await this.db.set(this.settings.CORE.DB.DATA_KEY, information)

        } catch (error) { throw new Error(this.settings.CORE.MESSAGES.SET_ERROR + ': ' + error.message) }
    }

}