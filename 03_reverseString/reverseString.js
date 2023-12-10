const reverseString = function(string){
    let reversedString="";
    stringLength=string.length-1;
    
    for(let i=stringLength;i>-1;i--){
        reversedString+=string.substr(i,1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
