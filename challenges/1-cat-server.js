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
    const newBannerData = {...data}
    newBannerData.copyrightYear = 2023;
    bannerCallback(err, newBannerData);
  })
}

function fetchAllOwners() {}

function fetchCatsByOwner() {}

function fetchCatPics() {}

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
