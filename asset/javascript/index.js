//Declare an empty array;
let arr=[]
console.log(arr);

//Declare an array with more than 5 number of elements

let arr2=[15,23,45,234,124,789,434]
console.log(arr2)

//Find the length of your array

let arr3=[1,2,3,4,5,6,7,8,9].length
console.log(arr3)

//Get the first item, the middle item and the last item of the array
let arr4=["sakshi","surbhi","radhika"]
console.log(arr4[0])
console.log(arr4[1])
console.log(arr4[2])

/*Declare an array called mixedDataTypes, put different data types in the array and find the length of
the array. The array size should be greater than 5*/

let arr5=[1,"sakshi",true," ", 6.5, { country: 'India', city: 'Helsinki' },{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }]
console.log(arr5)
console.log(arr5.length)
/*Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft,
Apple, IBM, Oracle and Amazon*/

let itCompanies=["Facebook", "Google", "Microsoft","Apple", "IBM", "Oracle", "Amazon"]
//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array

console.log('Number of itcompanies', itCompanies.length)

//Print the first company, middle and last company

console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
//Print out each company
// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
/*Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big
IT companies.*/

console.log(itCompanies[0], itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6],'are big IT companies')

/*Check if a certain company exists in the itCompanies array. If it exist return the company else return a
company is not found

let company=prompt("enter company name")
if (company.includes(itCompanies)

{
   console.log(company)
}
else{
    console.log(' company is not found')
}*/

//Filter out companies which have more than one 'o' without the filter method

//Sort the array using sort() method

let arr6=["sakshi","surbhi","ranu"]
console.log(arr6.sort())


/*
let arr7=["apple","ball","cat"]
console.log(arr7.sort())*/

//Reverse the array using reverse() method
let arr8=["apple","ball","cat"]
console.log(arr8.reverse())

//Slice out the first 3 companies from the array

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
console.log(webTechs)
console.log(webTechs.slice(3))

//Slice out the last 3 companies from the array
console.log(webTechs.slice(0,4))
//Slice out the middle IT company or companies from the array


//Remove the first IT company from the array
console.log(webTechs.slice(1))

//Remove the last IT company from the array
console.log(webTechs.slice(0,6))

//Remove all IT companies
console.log(webTechs.slice(7))

/*Create a separate countries.js file and store the countries array in to this file, create a separate file
web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/

let text =["I", "love", "coding"]

console.log(text.length)

//In the following shopping cart add, remove, edit items
//add 'Meat' in the beginning of your shopping cart if it has not been already added

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
console.log(shoppingCart.unshift("Meat"))
console.log(shoppingCart)
//add Sugar at the end of you shopping cart if it has not been already added
console.log(shoppingCart.push("sugar"))
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey

//modify Tea to 'Green Tea'
shoppingCart[3]='Green Tea'
console.log(shoppingCart)
/*In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist
add to the countries list*/
let country=['India','Ethiopia','England','Japan']

if(country.includes('Ethiopia')){
    console.log("ETHIOPIA")
}
else{
    console.log('not exist')
}

/*In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it
does not exist add Sass to the array and print the array.*/

if(webTechs.includes("Sass")){
    console.log("Sass is a CSS prepocess")
}
else{
    console.log("does not exist sass")
}
//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const backEnd = ['Node','Express', 'MongoDB']

let fullStack=frontEnd.concat(backEnd)

console.log(fullStack)

//The following is an array of 10 students ages:

//Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())


