'use strict';
let UserName = prompt('whats your name')
alert('Hello '+UserName+' ,I hope you are fine')
alert('I will ask you questions about myself. I hope you can guess the answers.')
let MyName = prompt('Is my name Zaid Al-Shami?')
MyName = MyName.toLowerCase()
if (MyName === 'yes' || MyName === 'y'){
    alert('sorry, incorrect answer')
}
else if (MyName === 'no' || MyName === 'n') {
    alert('good, correct answer')
    let i = 0 
    i = 1 + i
}
else {
    alert('please answer with Yes or No')
}

let MyAge = prompt('Am I 24 years old ?')
MyAge = MyAge.toLowerCase()
if (MyAge === 'yes' || MyAge === 'y'){
    alert('good, correct answer')
   // console.log('good, correct answer')
    i = 1 + i
}
else if (MyAge === 'no' || MyAge === 'n') {
    alert('sorry, incorrect answer')
}
else {
    alert('please answer with Yes or No')
}

let MyMajoring = prompt('Did I study Mechatronics Engineering at the university?')
MyMajoring = MyMajoring.toLowerCase()
if (MyMajoring === 'yes' || MyMajoring === 'y'){
    alert('good, correct answer')
    i = 1 + i
}
else if (MyMajoring === 'no' || MyMajoring === 'n') {
    alert('sorry, incorrect answer')
}
else {
    alert('please answer with Yes or No')
}
let MyUniversity = prompt('Did I study at the Hashemite University?')
MyUniversity = MyUniversity.toLowerCase()
if (MyUniversity === 'yes' || MyUniversity === 'y'){
    alert('sorry, incorrect answer')
}
else if (MyUniversity === 'no' || MyUniversity === 'n') {
    alert('good, correct answer')
    i = 1 + i
}
else {
    alert('please answer with Yes or No')
}
let MyState = prompt('Am I married ?')
MyState = MyState.toLowerCase()
if (MyState === 'yes' || MyState === 'y'){
    alert('sorry, incorrect answer')
}
else if (MyState === 'no' || MyState === 'n') {
    alert('good, correct answer') 
    i = 1 + i
}
else {
    alert('please answer with Yes or No')
}
alert('your Grade is '+i+'/5')
alert('My name is yazeed alshami , Im 24 old ,I studied Mechatronics Engineering in Al-Balqa university and Im single ;) , welcom '+UserName+' in my website')