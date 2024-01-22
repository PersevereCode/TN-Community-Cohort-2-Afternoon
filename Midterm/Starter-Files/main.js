// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(age){
    switch(true){
        case age < 16: 
            return "You can't drive."
        case age <= 17 && age >= 16:
            return "You can drive but not vote."
        case age <= 24 && age >= 18:
            return "You can vote but not rent a car."
        case age >= 25:
            return "You can do pretty much anything."
        default: break;
    }
}

function oddIndices(arr){
    let result =[]
    for(let i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            result.push(arr[i])
        }
    }return result
}

function numOddValues(arr){
    let count = 0;
    for(let num of arr){
        if(num % 2 !== 0){
            count++
        }
    }
    return count
}

function averageStringLength(arr){
    if (arr.length === 0){
        return 0
    }
    let totalLength = 0;
    for(let str of arr){
        totalLength += str.length
    }
    return totalLength/arr.length
}

function firstPunctuationIndex(str){
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if(char === '!' || char === '.' || char === '?'){
            return i
        }
    }
    return -1
}

function getPlace(arr, newScore){
    let place = (arr.length + 1).toString()
    for(let i = 0; i < arr.length; i++){
        if(newScore > arr[i]){
            place = (i + 1).toString()
            break;
        }
    }

    if(place[place.length - 1] === '1'){
        return place + 'st place'
    }else if(place[place.length - 1] === '2'){
        return place + 'nd place'
    }else if(place[place.length - 1] === '3'){
        return place + 'rd place'
    }else{
        return place + 'th place'
    }
}

function addToObj(obj, key, value){
    if(typeof key !== 'string'){
        return 'Function must be called with a valid key.'
    }
    obj[key] = value
}
function duplicateElements(arr){
    let obj = {}
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1
        }else if(obj[arr[i]] === 1){
            obj[arr[i]] += 1
            result.push(arr[i])
        }else{
            continue;
        }
    }
    return result
}




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
