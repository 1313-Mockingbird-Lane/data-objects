" use strict ";

var display = document.getElementById("display");

var keyValuePairs = [];
var pairString = "";
var doubleQuoteString = "\"";
var colonString = " : ";
var myObj = {};
var testCampaignData = ["Title", "Purpose", "Key words", "Owner First Name",
                      "Owner Last Name", "Organization", "Address1", "Address2",
                      "City", "State", "Zip", "Primary phone", "Secondary phone",
                      "Mobile phone text", "email address", "Facebook", "Twitter",
                      "Web site", "Other social media", "Leader", "Categories",
                      "Time Frame", "Locations", "Skills Needed"];
var campaignDataFields = ["title", "purpose", "keywords", "ownerFirstName", "ownerLastName",
                      "organizationName", "address1", "address2", "city", "state", "zip",
                      "primaryPhone", "secondaryPhone", "mobilePhone", "email", "facebook",
                      "twitter", "webURL", "otherSocialMedia", "leaderOfAction", "typeOfIssue",
                      "timeFrame", "locationOfAction", "skillsNeeded"];
var volunteerFields = ["First Name", "Last Name", "Organization", "Address1",
                      "Address2", "City", "State", "Zip", "Primary phone",
                      "Secondary phone", "Mobile phone text", "email address",
                      "Facebook", "Twitter", "Other social media",
                      "Interest category", "Additional interest", "Time Frame",
                      "Campaign membership", "Skills", "Location", "Travel range",
                      "Communication options"];
var arrayOfCampaigns = [];
var arrayOfVolunteers = [];


function createKeyValuePairsForObject(arrayOfFieldNames, arrayOfFormData) {
  for (var i = 0; i < arrayOfFieldNames.length; i++) {
    pairString = doubleQuoteString + arrayOfFieldNames[i] + doubleQuoteString + colonString + doubleQuoteString + arrayOfFormData[i] + doubleQuoteString + ",";
    keyValuePairs.push(pairString);
  }
  return keyValuePairs;
}


function createJsonObj(keyValuePairs) {

}

function showCurrentStateOfData() {
  display.innerHTML = createKeyValuePairsForObject(campaignDataFields, testCampaignData);
}
