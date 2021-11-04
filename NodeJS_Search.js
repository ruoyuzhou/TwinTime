/*NodeJs regular keyword search file directory, 
mainly including NodeJs regular keyword search file directory 
and search file contains keywords
*/

var fs = require("fs");
const resultArr = [];

//routing 
const filePath = path.resolve('./src');
//Keyword
const lookingForString = /ipos-chains\/.*?(?=')/g;

recursiveReadFile(filePath);
const newArr = [...new Set(resultArr)];

console.log('data—-->', newArr);
// console.log('data—-->',JSON.stringify(newArr)); 
function recursiveReadFile(fileName) {

    if (!fs.existsSync(fileName)) return;
    if (isFile(fileName)) {
        check(fileName);
    }
    if (isDirectory(fileName)) {
        var files = fs.readdirSync(fileName);
        files.forEach(function (val, key) {
            var temp = path.join(fileName, val);
            if (isDirectory(temp)) recursiveReadFile(temp);
            if (isFile(temp)) check(temp);
        })
    }
}
function check(fileName) {
    var data = readFile(fileName);
    var exc = new RegExp(lookingForString);
    const arr = data.match(exc);
    if (!arr) return;
    resultArr.push(...arr);
}

function isDirectory(fileName) {
    if (fs.existsSync(fileName)) return fs.statSync(fileName).isDirectory();
}

function isFile(fileName) {
    if (fs.existsSync(fileName)) return fs.statSync(fileName).isFile();
}

function readFile(fileName) {
    if (fs.existsSync(fileName)) return fs.readFileSync(fileName, "utf-8");
}
