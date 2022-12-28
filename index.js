function findMatching(drivers,variable){
    let answer=drivers.filter(drivers => (drivers===variable)||(drivers===variable.toLowerCase()));
    return answer;
}

function fuzzyMatch(drivers,variable){
   let answer= (filterItems(drivers,variable));
   return answer;


function filterItems(arr,query)
{
    return arr.filter((el) => el.toLowerCase().startsWith(query.toLowerCase()));
}}

function matchName(drivers,variable){
    let answer=drivers.filter(drivers=>drivers.name===variable);
    return answer;
}