
const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN_KEY = process.env.TRELLO_API_TOKEN;

const getAllBoards = async (req, res) => {


    const API_URL_AllBoards = `https://api.trello.com/1/members/me/boards?fields=name,url&key=${API_KEY}&token=${TOKEN_KEY}`;
 
  try {
    let response = await axios({
      method: 'get',
      url: API_URL_AllBoards,
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
    res.status(500).send("Failed to fetch data from Trello API");
    throw new Error(e.message);
  }

  


      

}


const createBoard = async(req, res) => {
    const url = `https://api.trello.com/1/boards?key=${API_KEY}&token=${TOKEN_KEY}&name=${req.query.name}`;
    try {
        let response = await axios({
            method: 'post',
            url: url
        })
        .then(function (response) {
            console.log(response.data)
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
    }
    catch(err)
    {
        res.status(500).send("Failed to fetch data from Trello API");
        throw new Error(err.message);
    }
}


 

const getBoardById = async (req, res) => {
   
    const url = `https://api.trello.com/1/boards/${req.query.id}?key=${API_KEY}&token=${TOKEN_KEY}`;
    try {
        let response = await axios({
          method: 'get',
          url: url,
        })
          .then(function (response) {
            console.log(response.data)
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

        res.status(500).send("Failed to fetch data from Trello API");
        throw new Error(e.message);
      }
}




const deleteBoard = async(req, res) => {


    const url = `https://api.trello.com/1/boards/${req.query.id}?key=${API_KEY}&token=${TOKEN_KEY}`;
    try {
        let response = await axios({
            method: 'delete',
            url: url
        })
        .then(function (response) {
            console.log(response.data)
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
    }
    catch(err)
    {
        res.status(500).send("Failed to fetch data from Trello API");
        throw new Error(err.message);
    }
}

const updateBoard = async(req, res) => {


    const url = `https://api.trello.com/1/boards/${req.query.id}?key=${API_KEY}&token=${TOKEN_KEY}`;
    const data = {
        key: API_KEY,
        token: TOKEN_KEY,
        name: req.query.name,
        desc: req.query.desc
    }
    console.log(data)
    
    try {
        let response = await axios.put(url, null, {params: data})
        .then(function (response) {
            console.log(response.data)
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
    }
    catch(err)
    {
        res.status(500).send("Failed to fetch data from Trello API");
        throw new Error(err.message);
    }
}

module.exports = {
    getAllBoards,
    getBoardById,
    createBoard,
    deleteBoard,
    updateBoard
}; 