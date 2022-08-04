

export class TwitterConfiguration {
    constructor({consumer_key, consumer_secret, access_token_key, access_token_secret}) {
        this.consumer_key = consumer_key
        this.consumer_secret = consumer_secret
        this.access_token_key = access_token_key
        this.access_token_secret = access_token_secret
    }
}

export class ContactData {
    constructor({ip, name, email, message}){
        this.ip = ip
        this.name = name
        this.email = email
        this.message = message 
    }
}