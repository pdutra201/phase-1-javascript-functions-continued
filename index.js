function saturdayFun(activity = "roller-skate"){
    //const innerFunction = function (){
        return `This Saturday, I want to ${activity}!`
    //}
    //return innerFunction();
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(special){
    return function (someString){
        return `You are ${special}${someString}${special}!`; 
    }
}