class School {

    constructor(name, zipcode) {
        this.type = '_school'
        this.name = name;
        this.zipcode = zipcode;
    }

    static fromJson(json) {
        var data = JSON.parse(json);
        return this.fromObj(data);
    }

    static fromObj(obj) {
        return new School(
        //  select from either:
        //  property name || name used in external data
            obj.name     || obj.SchoolName,
            obj.zipcode  || obj.Zip
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
