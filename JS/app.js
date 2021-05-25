/* eslint-disable no-unused-vars */
'use strict';
let score=0;
let UserName = prompt('whats your name')
alert('Hello ' + UserName + ' ,I hope you are fine');
alert('I will ask you questions about myself. I hope you can guess the answers.');
let MyName = prompt('Is my name Zaid Al-Shami?');
MyName = MyName.toLowerCase();
if (MyName === 'yes' || MyName === 'y') {
  alert('sorry, incorrect answer');
// console.log('sorry, incorrect answer')
}
else if (MyName === 'no' || MyName === 'n') {
  alert('good, correct answer');
  // eslint-disable-next-line no-unused-vars
  score++;
}
else {
  alert('please answer with Yes or No');
//console.log('please answer with Yes or No')
}



let MyAge = prompt('Am I 24 years old ?');
MyAge = MyAge.toLowerCase();
if (MyAge === 'yes' || MyAge === 'y') {
  alert('good, correct answer');
  //console.log('good, correct answer')
  //eslint-disable-next-line indent
  score++;
}
else if (MyAge === 'no' || MyAge === 'n') {
  alert('sorry, incorrect answer');
}
else {
  alert('please answer with Yes or No');
}



let MyMajoring = prompt('Did I study Mechatronics Engineering at the university?');
MyMajoring = MyMajoring.toLowerCase();
if (MyMajoring === 'yes' || MyMajoring === 'y') {
  alert('good, correct answer');
  score++;
}
else if (MyMajoring === 'no' || MyMajoring === 'n') {
  alert('sorry, incorrect answer');
}
else {
  alert('please answer with Yes or No');
}


let MyUniversity = prompt('Did I study at the Hashemite University?')
MyUniversity = MyUniversity.toLowerCase();
if (MyUniversity === 'yes' || MyUniversity === 'y') {
  alert('sorry, incorrect answer');
}
else if (MyUniversity === 'no' || MyUniversity === 'n') {
  alert('good, correct answer');
  score++;
}
else {
  alert('please answer with Yes or No');
}


let MyState = prompt('Am I married ?');
MyState = MyState.toLowerCase();
switch(MyState) {
case 'yes' :
case 'y' :
  alert('I hope that' );
  score++;
  break;
case 'no' :
case 'n' :
  alert('correct answer');
  break;
default:
  alert('you must write YES or NO');
}


alert('your Grade is ' + score + '/5');
alert('My name is yazeed alshami , Im 24 old ,I studied Mechatronics Engineering in Al-Balqa university and Im single' );
alert(' welcom ' + UserName + ' in my website');
