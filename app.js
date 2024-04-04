let usernames = ["Jake", "John", "Jason", "Jacob", "JoWinnernes"];

let counter = 0;
let usernames_;
while(counter < usernames.length){
    if (usernames[counter].toLowerCase().includes("winner")){
        console.log("we have a winner");
    }
    counter++;
}