import axios from "axios";
require('dotenv').config()


const URL="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?"

export default {
    // get dog parks from yelp based on city
    getDogParks: function(city) {
      return axios.get(URL, {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_YELP_KEY
        },
          params: {
          term: 'dog park',
          location: city,
          limit:40
        }
        })
    },
    // get dog friendly businesses from yelp based on city
    getDogFriendly: function(city) {
      return axios.get(URL, {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_YELP_KEY
        },
          params: {
          term: 'dog allowed',
          location: city,
          limit:40
        }
        })
    },
    
  };