numberDoubler = (num) => {
    let outputNum = num;

    while (outputNum < 100) {
        outputNum = outputNum * 2
    }
    return outputNum; 
}

function stringRepeater(str) {
    let outputNum = str;

    while (outputNum < 10) {
        return outputNum * 2
    }
    return outputNum;
}


function makeDivisible(x, y) {

}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};