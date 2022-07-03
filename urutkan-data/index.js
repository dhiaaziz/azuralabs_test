const { toJsonArray } = require('./helpers/csvtojson');
const csvFilePath = './data/data.csv'
const configcsvtojson = {
    delimiter: ';',
    colParser: {
        'nama': 'string',
        'harga': 'number',
        'rating': 'number',
        'likes': 'number'
    }
}

const sort = (arrOfObj) => {
    return arrOfObj.sort((a, b) => {
        return a.harga - b.harga || b.rating - a.rating || b.likes - a.likes;
    })
}

const main = async () => {
    const dataJson = await toJsonArray(csvFilePath, configcsvtojson);
    console.table(dataJson);
    const sortedData = sort(dataJson);
    console.table(sortedData);

}


main()