const fs = require('fs');

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
module.exports = {
    getData,
    reWriteData
}