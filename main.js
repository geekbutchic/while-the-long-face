numberDoubler = (num) => {
    let outputNum = num;

    while (outputNum < 100) {
        outputNum = outputNum * 2
    }
    return outputNum; 
}

function stringRepeater(str) {
    let value = '';

    while (str.length >= 10) {
        value += str;
    }
    return value;
}

// stringRepeater = (str) => {

// }


makeDivisible = (x, y) => {

}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};