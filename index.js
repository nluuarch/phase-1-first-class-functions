const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);


function receivesAFunction(callbackFunc) {
    return callbackFunc();
}


function returnsANamedFunction(){
    return function namedCallBack() {
    }
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}


