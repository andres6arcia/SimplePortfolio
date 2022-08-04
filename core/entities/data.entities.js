

export class Data {
    constructor({ names, role, personal_summary, interests, contact, work, education, skills }) {
        this.names = names
        this.role = role
        this.personal_summary = personal_summary
        this.interests = interests
        this.contact = contact
        this.work = work
        // Serverless error at db.set(): Unsupported type passed: [object Object]. Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute.
        // this.work = []; work.map((x) => this.work.push(new Work(x)))
        this.education = education
        // Serverless error at db.set(): Unsupported type passed: [object Object]. Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute.
        // this.education = []; education.map((x) => this.education.push(new Education(x)))
        this.skills = skills
    }
}

export class Work {
    constructor({ company, position, logo, summary }) {
        this.company = company
        this.position = position
        this.logo = logo
        this.summary = summary
    }
}

export class Education {
    constructor({ title, detail, college }) {
        this.title = title
        this.detail = detail
        this.college = college
    }
}
