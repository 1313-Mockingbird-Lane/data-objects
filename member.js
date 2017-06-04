class Member {

    constructor(email, firstName, lastName, zipcode) {
        this._id = email;
        this.type = '_member';
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipcode = zipcode;
        this.fullName = firstName + " " + lastName;
    }

    static fromJson(json) {
        var data = JSON.parse(json);
        return new Member(
          data.email,
          data.firstName,
          data.lastName,
          data.zipcode,
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
    Member: Member
}
