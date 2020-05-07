//  there are a few desicions of this task

// variant 1
function cookie(x) {
    return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}

// variant 2
function cookie(x) {
    var result = typeof x;
    var who = result == "string" ? 'Zach' : result == "number" ? 'Monica' : 'the dog';
    return `Who ate the last cookie? It was ${who}!`;
}

// variant 3
function cookie(x) {
    var resultString = "Who ate the last cookie? It was " 
    switch(typeof x) {
        case "string": return resultString += "Zach!"
        case "number": return resultString += "Monica!"
        default: return resultString += "the dog!"
    }
}