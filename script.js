// let a= document.querySelector("h1");
// console.log(a);

// console.log("hello");
// a.innerHTML="LETS CHANGE THIS DUDE";
// console.log(a);

// another approach

// Change the inner HTML of the <h1> element
// let a = document.querySelector("h1");
// a.innerHTML = "LETS CHANGE THIS DUDE";

// Apply the style
// a.style.color = "red";
// a.style.backgroundColor="black";
// Log the element to the console
// console.log(a);
// a.addEventListener("click",function(){
//     // console.log("HELLO BUDDY");
//     a.innerHTML="practice eventlistener property";
//     a.style.color="red";
//     a.style.backgroundColor="black";
// })

// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var flag = 0;

// btn.addEventListener("click", function() {
//     if (flag === 0) {
//         bulb.style.backgroundColor = "yellow";
//         console.log("clicked");
//         flag = 1;
//     } else if (flag === 1) {
//         bulb.style.backgroundColor = "transparent";
//         console.log("Again clicked");
//         flag = 0;
//     }
// });



// let ele=document.getElementById('p');
// let a=ele.closest("span");
// console.log(a);

// let ele=document.getElementById('p');
// let a=ele.matches(".box");
// console.log(ele.matches(".box"));
// console.log(ele.closest("p"));

// let parent= document.getElementById("p");
// let child=document.getElementById("span");
// if(parent.contains(child)){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// document.getElementsByTagName("nav")[0].firstElementChild.style.color="white";
// console.log("hello");
// let name = {
//     sujata:'90',
//    stuti:'jagtap',
//     vedant:'agrawal',
//     gyanesh:'nagar'
// }
// // console.log(name['sujata']);
// //  for(let i in name){
//     const a= Object.keys(name);
//     console.log(a);
// let numbers = [1, 2, 3, 4, 5];

// // Using reduce() to sum all elements in the array
// let sum = numbers.reduce(function(accumulator, currentValue, index, array) {
//     console.log(accumulator); // Prints the accumulator
//     console.log(currentValue); // Prints the current value
//     console.log(index); // Prints the current index
//     console.log(array); // Prints the original array
//     return accumulator + currentValue; // Return the sum of accumulator and currentValue
// }, 0); // Initial value is 0

// console.log(sum); // Output: 15 (sum of all elements in the array)


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(function(element) {
//     return element % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
// let element = document.getElementById("na");
// let attribute=document.getAttribute("class");
// let attribute_1=element.removeAttribute("class");
// console.log(attribute);  // this is return undefined value bcz above method has deleted that attribute
 let element1=document.getElementById("H_1");
// let attribute_2=element1.setAttribute("class","heading");
// // console.log(attribute_2);
// let attribute_3=element1.getAttribute("class");
// console.log(attribute_3);
if(element1.hasAttribute("class")){
    console.log("TRUEE");
}


else{
    console.log("FALSE");
}