/* eslint-disable no-unused-vars */
'use strict';
let score=0;
let UserName = prompt('whats your name')
alert('Hello ' + UserName + ' ,I hope you are fine');
alert('I will ask you questions about myself. I hope you can guess the answers.');

function firstQ() {
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
}

function secondQ() {
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
}

function thirdQ() {
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
}

function fourthQ() {
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
}

function fifthQ() {
  let MyState = prompt('Am I married ?');
  MyState = MyState.toLowerCase();
  switch(MyState) {
  case 'yes' :
  case 'y' :
    alert('I hope that' );
    break;
  case 'no' :
  case 'n' :
    alert('correct answer');
    score++;
    break;
  default:
    alert('you must write YES or NO');
  }
}

function sixthQ() {
  let MyTall ;
  MyTall = Number(MyTall);
  for (let attempt = 0 ; attempt < 4 ; attempt++ ){
    MyTall = prompt ('How much you think my tall ? (please enter a number) you just have 4 attempt' );
    MyTall = Number(MyTall);
    if (MyTall === 170 ) {
      console.log('WoW Great');
      alert('WoW Great thats true');
      score++;
      break;
    }else if ( MyTall > 170){
      console.log('The guess is too high ,please try again' );
      alert('The guess is too high you so close,please try again');
    }
    else{
      console.log('The guess is too low  ,please try again' );
      alert('The guess is too low ,please try again');
    }
  }
}

function seventhQ() {
  let MyFavCol = ['red','blue','black'];
  let UserInput;
  let index;

  for (let attempt = 0 ; attempt < 6 ; attempt++ ){
    UserInput = prompt ('which my favorite colors you think ? (you just have 6 attempt)' );
    UserInput = UserInput.toLowerCase();
    for( index = 0; index < MyFavCol.length; index++){
      if (MyFavCol[index] === UserInput ) {
        console.log('WoW Great thats true');
        alert('WoW Great thats true');
        score++;
        break;
      }
    }
    if (MyFavCol[index] === UserInput) {
      console.log('WoW Great thats true');
      alert('WoW Great thats true');
      break;
    }else {
      console.log('please,try again' );
      alert('please,try again');
    }
  }
}

firstQ();
secondQ();
thirdQ();
fourthQ();
fifthQ();
sixthQ();
seventhQ();
alert('your Grade is ' + score + '/7');
alert('My name is yazeed alshami , Im 24 old ,I studied Mechatronics Engineering in Al-Balqa university and Im single , My Tall is 170,my favorite colors is red,blue,and black');
alert(' welcom ' + UserName + ' in my website');
