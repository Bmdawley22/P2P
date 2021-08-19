const fs = require('fs');
const axios = require('axios').default;

const getData = async () => {
    const dataRead = await fs.readFileSync('./data/users.json','utf-8',(err) => {
        if(err) throw err;
    });

    return JSON.parse(dataRead)
}

const reWriteData = async (rawData) => {
    const data = JSON.stringify(rawData, null, 5)

    await fs.writeFile('./data/users.json', data, (err) => {
        if(err) throw err;
    }) 
    
}

const findActiveUser = (data) => {
    for(i=0; i < data.users.length ; i++) {
        if (data.users[i]["active"] === true) {
            return data.users[i]
        }
    }
}

const getSports = async () => {
    // gets sports data from API

    // const axios = require("axios").default;

    // const options = {
    //     method: 'GET',
    //     url: 'https://odds.p.rapidapi.com/v1/sports',
    //     headers: {
    //       'x-rapidapi-host': 'odds.p.rapidapi.com',
    //       'x-rapidapi-key': '326573e030msh98a3e3e2255cea7p1a7dd7jsn93b6a9b075ab'
    //     }
    // };
      
      
    //   const data = await axios.request(options).then(function (response) {
    //     return response.data.data
    //   }).catch(function (error) {
    //       console.error(error);
    //   });

    //   return data

    const dataRead = await fs.readFileSync('./data/sports.json','utf-8',(err) => {
        if(err) throw err;
    });

    return JSON.parse(dataRead)
};


module.exports = {
    getData,
    reWriteData,
    findActiveUser,
    getSports
}