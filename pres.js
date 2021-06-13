//                                     const, let vs var 
// if(true){
//     var a =21
// }
// console.log(a)// a=21

// if(true){
//     let a=21
// }
// console.log(a)// error

// let a=11
// if(true){
//     let a =21
//     console.log(a)//21
// }
// console.log(a)// a=11

//var a=11
// if(true){
//     var a =21
//     console.log(a)//21
// }
// console.log(a)// a=21
//-----------------------------
// var a=21
// var a=11
// console.log(a)// a=11

// let a=21
// let a=11
// console.log(a)// error
//-------------------------
// for(var i=0;i<10;i++){
// }
// console.log(i)//i=10

// for(var i=0;i<10;i++){
// }
// console.log(i)//i=10

// for(let i=0;i<10;i++){
// }
// console.log(i)//error

// for(let i=0;i<10;i++){ 
// }
// console.log(i)//error

//----------------------

// let array=[]
// for(var i=0; i<10;i++){
//     array.push(function(){
//         console.log(i);
//     })
// }
// array[0]()//10
// array[3]()//10

// let array=[]
// for(let i=0; i<10;i++){
//     array.push(function(){
//         console.log(i);
//     })
// }
// array[0]()//0
// array[3]()//4

//--------------
// hoisting
// b=11
// console.log(b)//v=11
// var b=8

// b=11
// console.log(b)//error
// let b=8

// function hois(){
//     b=15
// }
// let b 
// hois()
// console.log(b)//b=15
//------------
//const 
// const massiv=[1,2,3,4,5,6]
// // massiv='1'/error
// // massiv=123//error
// massiv.push(7)
// conmsole.log(massiv)//[1,2,3,4,5,6,7]


//                                       arrow function
// function sum(a,b){
//     return a+b
// } //ES5

// const sum=(a,b)=>{
//     return a+b
// }//ES6

//context(arrow function)
// function log(){
//     console.log(this)
// }

// const arrowlog=()=>console.log(this)

// const person={
//     name:'Kutman',
//     age:20,
//     log:log,
//     arrowlog:arrowlog,
//     delaylog:function(){
//         setTimeout(()=>{
//             console.log(this.name+' '+this.age)
//         },500)
//     }
// }

// // person.log()
// person.delaylog()


//                                   default params
// let defaultB=123
// let c=(c)=>c*2
// const sum=(a,b=c(a))=>a+b

// console.log(sum(2))

//                      строковые шаблоны 


// var name ='Kutman'
// var hello='Hello '+ name;
// console.log(hello)//ES5

// const name1='Atay'
// const hello1=`Hello ${name1}`
// console.log(hello1)//es6

// var name = 'Kutman';
// var html = '<div>' +
//   '<h1>' + name + '<h1>' +
//   '</div>';
// console.log(html)//es5

// const name = 'Kutman';
// const html = `
//   <div>
//     <h1>${name}</h1>
//   </div>
// `;
// console.log(html)//es6

// const message = `This equals to ${100/4}`;
// console.log(message);//es6



// const tag = (strings, ...values) => {
//     console.log(strings, values);
//     if (values[0] < 20) {
//         values[1] = 'бодрый';
//       }
//       return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
// }

// const message = tag`Сейчас ${new Date().getHours()} и я ${'сонный'}`
// console.log(message);

//                                  REST Spread
//                           Rest
// function foo(...args) {
//     console.log(args);
// }
// foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

  
//                          Spread
// function foo(x, y, z) {
//     console.log(x, y, z);
// }

// let arr = [1, 2, 3];
// foo(...arr);


// const getText = (a, ...args) => {
//     console.log(a, args);
//   }
//   getText('a', 'b', 'c')

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);//es5

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// arr1.push(...arr2)
// console.log(arr1);//es6

// const args = ['a', 'b', 'c'];
// const getText = (a, b, c) => {
//   console.log(a, b, c);
// }
// getText.apply(null, args);//es5

// const args = ['a', 'b', 'c'];
// const getText = (a, b, c) => {
//   console.log(a, b, c);
// }
// getText(...args);//es6
//                       6/ literali

// function getCar(make, model, value) {
//     return {
//         // с синтаксисом короткой записи можно
//         // пропускать значение свойства, если оно
//         // совпадает с именем переменной, значение
//         // которой мы хотим использовать
//         make,  // аналогично make: make
//         model, // аналогично model: model
//         value, // аналогично value: value

//         // вычисляемые свойства теперь работают в
//         // литералах объекта
//         ['make' + make]: true,

//         // Короткая запись метода объекта пропускает
//         // ключевое слово `function` и двоеточие. Вместо
//         // "depreciate: function() {}" можно написать:
//         depreciate() {
//             this.value -= 2500;
//         }
//     };
// }

//                      7. Destructuring arrays and objects
// var obj = {
//     width: 100
// }

// console.log(obj.width)
// var { width } = {
//     width: 100
//   }

// var { width, height } = {
//     width: 100,
//     height: 200
// };

// function generateObj () {
//     return {
//       width: 100,
//       height: 200
//     };
//   }
  
//   var { width, height } = generateObj();

//   function generateObj () {
//     return {
//       title: 'Menu',
//       width: 100,
//       height: 200
//     };
//   }
  
//   var { width: containerWidth, height: containerHeight } = generateObj();
//   console.log(containerWidth);
//   console.log(containerHeight);
  
//   var obj = {
//     id: '123',
//     attributes: {
//       width: 100,
//       height: 100
//     }
//   }
//   var { id, attributes: { width, height } } = obj;
// console.log(id)
// console.log(width)
// console.log(height)

// var { id, attributes: { width = 50, height = 50 } } = obj;


// var [ red, yellow ] = ['red', 'yellow'];
// console.log(red);
// console.log(yellow);


// var [first, , , , fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];
// function getSizes ({ width, height }) {
//     console.log(width)
//     console.log(height)
//   }
  
//   getSizes({
//     width: 100,
//     height: 200
//   })

//                                  for of for in 
//for...of используется для перебора в цикле итерируемых объектов, например, массивов.
// let nicknames = ['di', 'boo', 'punkeye'];
// nicknames.size = 3;
// for (let nickname of nicknames) {
//     console.log(nickname);
// }
// // di
// // boo
// // punkeye


// //for...in используется для перебора в цикле всех доступных для перебора (enumerable) свойств объекта.
// let nicknames = ['di', 'boo', 'punkeye'];
// nicknames.size = 3;
// for (let nickname in nicknames) {
//     console.log(nickname);
// }
// // 0
// // 1
// // 2
// // size

// //class super
// class SimpleDate {
//     constructor (year, month, day) {
//       this.year = year;
//       this.month = month;
//       this.day = day;
//     }
//     toString () {
//       return `${this.day}/${this.month}/${this.year}`;
//     }
//   }
  
//   const today = new SimpleDate(2017, 1, 28)
//   console.log(today.toString())
//   class OtherDate extends SimpleDate {
//     constructor(year, month, day) {
//       super(year, month, day)
//     }
//     toString () {
//         return `${this.day}.${this.month}.${this.year}`;
//       }
//   }
//   const tomorrow = new OtherDate(2017, 1, 29)
//   console.log(tomorrow.toString())
