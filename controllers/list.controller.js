const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN_KEY = process.env.TRELLO_API_TOKEN;

const getAllLists = async (req, res) => {
  const API_URL_AllCards = `https://api.trello.com/1/boards/${req.query.id}/lists?key=${API_KEY}&token=${TOKEN_KEY}`;

  try {
    let response = await axios({
      method: 'get',
      url: API_URL_AllCards,
    })
      .then(function (response) {
        res.status(200).json(response.data);
        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  } catch (e) {
    // catch error
    res.status(500).send('Failed to fetch data from Trello API');
    throw new Error(e.message);
  }
};

const updateList = async (req, res) => {
  const url = `https://api.trello.com/1/lists/${req.query.listId}?key=${API_KEY}&token=${TOKEN_KEY}`;
  const data = {
    name: req.query.name,
    desc: req.query.desc,
  };
  try {
    let response = await axios
      .put(url, null, { params: data })
      .then(function (response) {
        res.status(200).json(response.data);
        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  } catch (e) {
    // catch error
    res.status(500).send('Failed to fetch data from Trello API');
    throw new Error(e.message);
  }
};

const archiveList = async (req, res) => {
  const url = `https://api.trello.com/1/lists/${req.query.listId}/closed?key=${API_KEY}&token=${TOKEN_KEY}`;

  try {
    let response = await axios({
      method: 'put',
      url: url,
    })
      .then(function (response) {
        res.status(200).json(response.data);
        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  } catch (e) {
    // catch error
    res.status(500).send('Failed to fetch data from Trello API');
    throw new Error(e.message);
  }
};

module.exports = {
  getAllLists,
  updateList,
  
};
