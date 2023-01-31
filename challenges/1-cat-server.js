const request = require('../utils/server');

//this function should take a callback function as its only argument.

//your function should invoke the request function with the path /status and the callback function

function checkServerStatus(callback) {
  request('/status', callback);
}

//this function should take a callback function

//your function should make a request to the /banner end-point which responds with a banner object

//Please update the copyrightYear to 2023

//you should pass the updated banner object to the final callback function

function fetchBannerContent(bannerCallback) {
  request('/banner', (err, data) => {
    const newBannerData = { ...data };
    newBannerData.copyrightYear = 2023;
    bannerCallback(err, newBannerData);
  });
}

function fetchAllOwners(ownersCallback) {
  request('/owners', (err, owners) => {
    let newArr = [];
    for (let owner of owners) {
      newArr.push(owner.toLowerCase());
    }
    console.log(owners);
    ownersCallback(err, newArr);
  });
}

function fetchCatsByOwner(ownerName, callbackFunc) {
  request(`/owners/${ownerName}/cats`, (err, data) => {
    callbackFunc(err, data);
  });
}
// this function should take an array of strings (names of cat pics) and a callback function
// for each cat name in the passed array, a request should be sent to /pics/:catpic
// each response will represent an actual catpic with the suffix .jpg
// the callback function should be invoked with an array of responses once all the catpics have been collated(the order does not matter)
// the server will respond with an error if the requested pic doesn't contain the word "cat". Therefore, if you receive an error, you must put placeholder.jpg in its place in the response array to act as a placeholder for the missing cat picture.
// Note: You should make the request to receive the string containing .jpg rather than using a JS method!
function fetchCatPics(arrCats, callbackFunc) {
  request(`/pics/${arrCats}`, (err, pictures) => {
    const finalCats = [];
    arrCats.forEach(function (cats) {
      finalCats.push(cats);
    });
    callbackFunc(null, finalCats);
  });
}

function fetchAllCats() {}

function fetchOwnersWithCats() {}

function kickLegacyServerUntilItWorks() {}

function buySingleOutfit() {}

module.exports = {
  buySingleOutfit,
  checkServerStatus,
  kickLegacyServerUntilItWorks,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchOwnersWithCats,
  fetchCatsByOwner
};
