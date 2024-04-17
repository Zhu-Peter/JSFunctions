// let usernames = ["Jake", "John", "Jason", "Jacob", "Jones"];

// let counter = 0;
// let usernames_;
// while(counter < usernames.length){
//     if (usernames[counter].toLowerCase().includes("winner")){
//         console.log("we have a winner");
//     }
//     counter++;
// }

// function specific_greeting(user) {
//     return "Hello and welcome "+user;
// }

// while(counter < usernames.length){
//     console.log(specific_greeting(usernames[counter]));
//     counter++;  
// }

// document.getElementById('button1').addEventListener('click', function(){
//     if(Cookies.get('button_clicked') === undefined){

//         Cookies.set('button_clicked', 'yes')
//     }else{
//         Cookies.remove('button_clicked')
//     }
// })

document.getElementById('button1').addEventListener('click', function(){
    document.getElementById(`product_container`).insertAdjacentHTML(`afterbegin`, `
    <h1>${this.attributes.product_name.value}</h1>
    <h2>$${this.attributes.product_price.value}</h2>
    <p>${this.attributes.product_description.value}</p>
    <img style="width: 300px" src="${this.attributes.product_image_url.value}"><br>
    <button id="button1" product_name="Pancakes" product_price="5.65" product_description="a fluffy cake made with butter topped with syrup" product_image_url="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">eat me</button>
    `)
})