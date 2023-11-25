for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        // console.log("I am 5");
    }
    // console.log(element);
    
}
for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop: ${j}`); 
        console.log(i + "*" + j + "=" + i*j);
    }
    
}

for (let index = 1; index <= 20; index++){
    if(index == 5)
    {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
1   
}
for (let index = 1; index <= 20; index++){
    if(index == 5)
    {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`); 
}
