// // function* idMaker(){
// // 	var index = 0;
// // 	while(index<5)
// // 		yield index++;
// // }
// //
// // var gen = idMaker();
// //
// // console.log(gen.next().value); // 0
// // console.log(gen.next().value); // 1
// // console.log(gen.next().value); // 2
// // console.log(gen.next().value); //
// // console.log(gen.next().value);
// // console.log(gen.next().value);
// // console.log(gen.next().value);
// // console.log(gen.next().value);
// // console.log(gen.next().value);
// function* anotherGenerator(i) {
// 	yield i + 1;
// 	yield i + 2;
// 	yield i + 3;
// }
//
// function* generator(i){
// 	yield i;
// 	yield* anotherGenerator(i);
// 	yield i + 10;
// }
//
// var gen = generator(10);
//
// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next().value); // 12
// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 20
// function Point(x = 0, y = 0) {
// 	this.x = x;
// 	this.y = y;
// }
//
// var p = new Point();
// console.log(p) // { x: 0, y: 0 }
//
// function test(c, x, y = 1) {
// 	console.log(123);
// }
//
// let v = 99;
// function foo(g = v +1) {
// 	console.log(g);
// }
// foo();
// v = 5;
// foo();
// var x = 2;
//
// function f(x, y = x) {
// 	console.log(y);
// }
//
// f(4,2) // 2

// function push(array, ...items) {
// 	items.forEach(function(item) {
// 		array.push(item);
// 		console.log(item);
// 	});
// }
//
// var a = [];
// push(a, 1, 2, 3)
// console.log(a.length);


var f = v => {console.log(1)};
console.log(f());
var s = "this is test branches";