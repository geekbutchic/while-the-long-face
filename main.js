numberDoubler = (num) => {
    let outputNum = num;

    while (outputNum < 100) {
        outputNum = outputNum * 2
    }
    return outputNum; 
}

function stringRepeater(str) {
    let num = 0;
    while (str < 10) {
        return num * 2;
    }
    return num;
}


function makeDivisible(x, y) {

}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};