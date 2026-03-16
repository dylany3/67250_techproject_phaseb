
var now = new Date();
var hour = now.getHours();
function greeting(x) {
    if (x < 5 || x >= 20) {
        document.getElementById("greeting").innerHTML = "Good night";
    }
    else if (x < 12) {
        document.getElementById("greeting").innerHTML = "Good morning";
    }
    else if (x < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon";
    }
    else {
        document.getElementById("greeting").innerHTML = "Good evening";
    }
}
greeting(hour);

// write a function addYear() that:
// Uses new Date().getFullYear()
// Updates the copyYear paragraph
// Call addYear() When the Page Loads
// In the <body> tag of every html page, add:
// onload="addYear()"
// Verify your code is working correctly:
// The current year appears in the footer on all pages
//does this work on all pages
function addYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = currentYear;
}
addYear();






















// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);
// var A = "Hello ";
// var B = "world!";
// var C = A + B;
// console.log(C);

// function sumnPrint(x1, x2) {
//     var result = x1 + x2;
//     console.log(result);
// }
// sumnPrint(x, y);
// sumnPrint(A, B);

// if (C.length > z) {
//     console.log(C);
// }
// else if (C.length < z) {
//     console.log(z);
// }
// else {
//     console.log("good job!");
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// // function findTheBanana(array){
// //     for (var i = 0; i < array.length; i++){
// //         if (array[i] === "Banana"){
// //             alert("Found the banana in L1!");
// //         }
// //     }
// // }
// // findTheBanana(L1);
// // findTheBanana(L2);

// // function findTheBananaForEach(array){
// //     array.forEach(function(item){
// //         if (item === "Banana"){
// //             alert("Found the banana in L1!");
// //         }
// //     });
// // }

