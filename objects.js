class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static fromJson(json) {
        var data = JSON.parse(json);
        return new Member(data.firstName, data.lastName);
    }

    static fromArray(array) {
        return new Member(...array);
    }

    toJson() {
        return JSON.stringify(this);
    }

}

var tom = Member.fromJson('{"firstName":"Tom","lastName":"Marks"}')
