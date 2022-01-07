// Code your solutions in this file


function writeCards(target, eventname){
    const newArray = []
    for (const element of target ){
        newArray.push(`Thank you, ` + element +`, for the wonderful ${eventname} gift!`)
    } 
    return newArray;
}

// function writeCards(target, eventName){
//     const newArray = []
//     for (let i=0;i<target.length;i++){
//         newArray.push(`Thank you, ` + target[i] +`, for the wonderful ${eventName} gift!`)
//     }
//     return newArray;
// }

function countDown(n){
 let i = n
 while (i>=0){
     console.log(i--)
 }  
}