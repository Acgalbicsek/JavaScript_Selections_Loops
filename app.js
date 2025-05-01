console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i=1; i<=100;i++){
    if(i % 2 !==0){
        console.log(i)
    }
    
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i=1; i<=100;i++){
    if(i % 3 == 0){
        console.log("FIZZ");
    }
     else if(i % 5 == 0){
        console.log("BUZZ");
    }
    else if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }
    
    }
    

// Exercise 3 Section
console.log("EXERCISE 3: \n===========\n");

let j = 1;
while(j<= 100){
    console.log(j);
    j+= 2;
}

console.log("EXERCISE 3, PART 2: \n===========\n");

let a = 0;
do{
    if(a % 3 == 0){
        console.log("FIZZ");
    }
    else if(a & 5 == 0){
        console.log("BUZZ");
    }
    else if(a % 3 == 0 && a % 5 == 0){
        console.log("FIZZBUZZ");
    }
    a++;
}
while (a<= 100);
        
    
console.log("EXERCISE 4: \n=========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for(let i = 0; i <= n; i++){
    if(i === value){
        console.log("Found value.");
        break;
    }

    if(i === n){
        console.log("Did not find value");
    }
}

console.log("EXERCISE 5: \n========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let t = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for(let i=start; i<=t;i++){
    if(i % 3 == 0){
        console.log("{fizzDivisor}");
    }
     else if(i % 5 == 0){
        console.log("{buzzDivisor}");
    }
    else if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }
        
    }