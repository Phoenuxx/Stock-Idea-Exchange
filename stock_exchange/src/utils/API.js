import axios from "axios";

const baseURL = "https://www.alphavantage.co/query?function=";
const key = process.env.alpha_vantage;
export default {
  searchIntra: function(query) {
    return axios.get(baseURL + "TIME_SERIES_INTRADAY&datatype=json&symbol=" + query + "&interval=5min&apikey=" + key);
  },
  searchDaily: function(query) {
    return axios.get(baseURL + "TIME_SERIES_DAILY&datatype=json&symbol=" + query + "&apikey=" + key);
  },
  searchWeekly: function(query) {
    return axios.get(baseURL + "TIME_SERIES_WEEKLY&datatype=json&symbol=" + query + "&apikey=" + key);
  },
  searchMonthly: function(query) {
    return axios.get(baseURL + "TIME_SERIES_MONTHLY&datatype=json&symbol=" + query + "&apikey=" + key);
  }
};
