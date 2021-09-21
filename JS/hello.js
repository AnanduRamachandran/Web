myName = 'Anandu';
// // // // console.log(myName);
console.log(`Hello ${myName}, How are you`) ;//This is a templete
/* This
is 
a 
multi-line 
comment */ 
skyIsBlue = true
if (skyIsBlue){
    console.log('Hello')
}else{
    console.log('NO')
}

const temp = 55;
if (temp >= 55){
    console.log('Its too hot');
}else{
    console.log('Its cool');
}

let subt = 10
while(subt>0){
    console.log(subt);
    subt -= 1;
}
console.log(subt);

let friendsAtYourParty = 0 
for(let i=0; i<=10; i++){ 
    friendsAtYourParty += 1 
    console.log(`Value of i is ${i}`)
    console.log(`friends at your party is ${friendsAtYourParty}`)
}
console.log(friendsAtYourParty)
console.log(Math.ceil(4.5));
let cities = ['Tokyo', 'Istanbul', 'New York']
for(let i = 0; i<cities.length; i++){
    console.log(cities[i]);
}