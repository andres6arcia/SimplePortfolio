import dataInput from '../../core/inputs/data.input'
import utilsInput from '../../core/inputs/utils.input'

class PortfolioController {

    async getData(req, res) {
        try {

            const information = await dataInput.getData()
            res.status(200).send(information)

        } catch (error) { res.status(500).send({ message: error.message, data: null }) }
    }

    async postData(req, res) {
        try {

            const raw_information = req.body
            const response = await dataInput.setData(raw_information)
            res.status(200).send(response)

        } catch (error) { res.status(500).send({ message: error.message, data: null }) }
    }



    async getTweets(req, res) {
        try {

            const information = await utilsInput.getTweets()
            res.status(200).send(information)

        } catch (error) { res.status(500).send({ message: error.message, data: null }) }
    }

    async postContact(req, res) {
        try {

            //Extract the user IP to use it if I need
            const forwarded = req.headers['x-forwarded-for']
            req.body.ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;

            const raw_information = req.body
            const response = await utilsInput.postContact(raw_information)
            res.status(200).send(response)

        } catch (error) { res.status(500).send({ ok: false, message: error.message, data: null }) }
    }

}
export default new PortfolioController()