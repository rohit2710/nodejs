const fs = require('fs')
console.log('utils.js');

const getNotes = ()=>{
    const stringData = fs.readFileSync('notes.txt','utf8')
    return stringData
}
module.exports = getNotes
