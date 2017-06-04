class Campaign {

    constructor(email, name, zipcode, purpose, memberList) {
        this._id = '_campaign';
        this.email = email;
        this.name = name;
        this.zipcode = zipcode;
        this.purpose = purpose;
        this.memberList = memberList;
    }

    static fromJson(json) {
        var data = JSON.parse(json);
        return new Member(
          data.email,
          data.name,
          data.zipcode,
          data.purpose,
          data.memberList,
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
    Campaign: Campaign
}
