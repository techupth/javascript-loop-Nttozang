// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

//console.log(companyName.length); //15
for(let i = companyName.length-1; i>=0; i--){
    
    //console.log(`Number : ${i} string : ${companyName[i]}`); // 14-d, 13-n

    reversedCompanyName = reversedCompanyName + companyName[i];
}
console.log(reversedCompanyName);



