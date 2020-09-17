// function showName (firstName, lastName) {

//   var nameIntro = "Your name is ";

//   function makeFullName () {
//     return nameIntro + firstName + " " + lastName;
//   }
//   return makeFullName() ;
// }

// console.log(showName ("Michael", "Jakson"));

                                            //////////////////////////РЕКУРСИЯ////////////////////////
// function sum (x, y){
//   if (y > 0) {
//     console.log(x, y);
//     return sum(x + 1, y - 1);
//   } else {
//     return x;
//   }
// }

// sum (1, 10);

// function mySandwich (param1, param2, callback){
//   alert('blablablalbahdfhffjfj. n hi' + param1 + " " + param2);
//   callback();
// }
// mySandwich('ham', 'cheese', function() {
//   alert ('finish eat');
// });
//                                                                       АСИНХРОН

// var value;
// var a = function () {
//   setTimeout(function (){
//     value = 10;
//   } , 200);
// }
// var b = function () {
//   console.log(value) ;
// }
// a();
// b();

// var value;
// var a = function (callback) {
//   setTimeout(function (){
//     value = 10;
//     callback();
//   } , 200);
// };
// var b = function () {
//   console.log(value) ;
// };
// a(b);

                                                                      // SETINTERVAL


// function timer (){
//   let i = 0;
//   let timerId = setInterval(() => console.log(i), 2000);
//   if(i < 10){
//     i++
//   } else {
//     clearInterval(timerId);
//   }
// }
// timer ();
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let i = 0;
//
// function recursion(arr){
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length){
//         recursion(arr);
//     }else{
//         return
//     }
// }
// console.log(recursion(arr));

