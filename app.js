let usernames = ["Jake", "John", "Jason", "Jacob", "Jones"];

let counter = 0;
// let usernames_;
// while(counter < usernames.length){
//     if (usernames[counter].toLowerCase().includes("winner")){
//         console.log("we have a winner");
//     }
//     counter++;
// }

function specific_greeting(user) {
    return "Hello and welcome "+user;
}

while(counter < usernames.length){
    console.log(specific_greeting(usernames[counter]));
    counter++;  
}