//
// var stuff = require('./count');
// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
//
// console.log(stuff.adder(1,2));
// console.log(stuff.adder(stuff.pi,5));
//
//
// // ......................................................... //
//
// var events = require('events');
//
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('mEvent',function(msg){
//   console.log(msg);
// });
//
// myEmitter.emit('mEvent','Message emitted');
//
// // .......................................................... //
//
// var util = require('util');
//
// var person = function(name){
//   this.name = name;
// };
//
// // We want to attach custom events to people created
//
// util.inherits(person, events.EventEmitter);
//
// var James = new person('James');
// var Mary = new person('Mary');
// var Ryu = new person('Ryu');
//
// var people = [James, Mary, Ryu];
//
// people.forEach(function(person){
//   person.on('speak', function(msg){
//     console.log(`${person.name} said ${msg}`);
//   });
// });
//
// James.emit('speak', 'hey dudes');
//
// Ryu.emit('speak', 'I want curry');
//
//
// // ............................................. //
// //For file R/W
//
// var fs = require('fs')
// //This method deals with binary data here, so encoding must be specified
// fs.readFile('readme.txt', 'utf8', function(err, data){
//   // fs.writeFile('writeme.txt', data, function(err, result){
//   //   if(err) console.log('error', err);
//   //   else console.log('It is written');
//   // });
//   console.log(data);
// });
//

// File deletion
// fs.unlink('writeme.txt', function(err, result){
//   if(err) console.log('error', err);
//   else console.log('deleted successfully');
// });

//
// fs.mkdir('stuff', function(){
//   fs.readFile('readme.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeme.txt', data, function(err, result){
//       if(err)  console.log('error', err);
//     });
//   });
// });


// NOTE: cANNOT REMOVE A DIRECTORY THAT IS NOT EMPTY
