const removeFromArray = function(theArray, ...args) {
    const newArray=[];
    let toRemove=false;

    for(element of theArray){
        toRemove=false;
        for(const remove of args)
        {
            if (element===remove){
                toRemove=true;
                break;
            }            
        }
        if(toRemove==false)
        {
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
