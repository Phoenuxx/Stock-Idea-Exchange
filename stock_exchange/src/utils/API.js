import axios from 'axios';
require("dotenv").config();

const key = process.env.alpha_vantage;
export default {

    search: function(query) {
      return axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + query + "&interval=5min&apikey=" + key);
    }
  };
  