const path = require('path')
const fs = require('fs')

// const file = require('./public/Ingenico_Update.xlsx')

function getData() {
    let data = fs.readFile('./public/Ingenico_Update.xlsx', function(err, data) {
        console.log(data)
        return(data)
    })
    return data
}

module.exports = getData
