const csv = require('csvtojson');

async function getDataFromFile(filePath){
    const dataArray = await csv().fromFile(filePath)
    return dataArray;
}

module.exports = {
    getDataFromFile: getDataFromFile
}
