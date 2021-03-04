numberDoubler = (num) => {
    let outputNum = num;

    while (outputNum < 100) {
        outputNum = outputNum * 2
    }
    return outputNum; 
}

function stringRepeater(str) {
    // Could not figure out how to use while loop so attempted another method
    return 10 > 0 ? Array(4).fill(str).join("") : "";
}


function makeDivisible(x, y) {

}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};