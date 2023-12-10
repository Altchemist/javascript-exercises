const repeatString = function(repeatingString, numberOfTimes) {
    returnString="";
    if(numberOfTimes>=0){
        for(let i = 0; i < numberOfTimes; i++){
            returnString+=repeatingString;        
        }
        return returnString;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
