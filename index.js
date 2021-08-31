// Your code here
function saturdayFun(activity="roller-skate") {
    return  `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity="go to the office") { 
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair="*") {
    return function(param="special") {
        return `You are ${visualFlair}${param}${visualFlair}!`;
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(c,d) {
        return c - d;
    }, 
    multiply: function(e,f) {
        return e * f;
    }, 
    divide: function(g,h) {
        return g / h;
    }
}

function actionApplyer(int, array) { 
    let x = int;
    for (let i = 0; i < array.length; i++) {
        x = array[i](x)
    }
    return x;
}