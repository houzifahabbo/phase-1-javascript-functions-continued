function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`;
}
const mondayWork = function(place = 'go to the office'){
    return `This Monday, I will ${place}.`;
}

function wrapAdjective(visualFlair){
    return function(adjective){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}