
const csv=require('csvtojson')


const toJsonArray = async (dataPath, config) => {
    return await csv(config).fromFile(dataPath);
}

module.exports = {
    toJsonArray,
}