numberDoubler = (num) => {
    let outputNum = num;

    while (outputNum < 100) {
        outputNum = outputNum * 2;
    }
    return outputNum; 
}

stringRepeater = (str) => {
    let outputStr = str;

    while (outputStr.length < 10) {
        outputStr += str;
    }
    return outputStr
}


makeDivisible = (x, y) => {
    let outputX = x;
    while (outputX % y !== 0) {
        outputX++;
    }
    return outputX;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};