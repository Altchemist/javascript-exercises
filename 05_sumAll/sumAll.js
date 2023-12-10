const sumAll = function(limit1, limit2){
    let sum=0;

    if((typeof limit1!="number" || typeof limit2!="number") || (limit1<0 || limit2<0)){
        return "ERROR"
    }

    if(limit1<limit2)
    {
        for(let number=limit1; number<=limit2; number++)
        {
            sum+=number;
        }
    }
    else{
        for(let number=limit1; number>=limit2; number--){
            sum+=number;
        }
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
