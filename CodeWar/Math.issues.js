Math.round = function(number){
    if (number %1 >=0.5){
        return parseInt(number) + 1; //i was having trouble because of the spelling "parsetInt", it took me a while to recognize the mixtake
    }else{
        return parseInt(number);
    }
};
// trouble with the curly braket, there was in different places or miss one.
Math.ceil = function(number){
    if (parseInt(number) === number) {
        return number;
    } else{ 
        return parseInt(number) + 1;}
}
Math.floor = function(number){
return parseInt(number);}
//i was making mistake because i was puting "else"