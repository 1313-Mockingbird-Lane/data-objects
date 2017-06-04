class School {

    constructor(name, zipcode) {
        this.type = '_school'
        this.name = name;
        this.zipcode = zipcode;
    }

    static fromJson(json) {
        var data = JSON.parse(json);
        return new School(
        //  select from either:
        //  property name || name used in external data
            data.name     || data.SchoolName,
            data.zipcode  || data.Zip
        );
    }

    static fromArray(array) {
        return new Member(...array);
    }

    toJson() {
        return JSON.stringify(this);
    }

}

module.exports = {
    School: School
}
