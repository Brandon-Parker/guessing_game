var no =0;
var yes =0;

 var question1 = prompt('Have I lived in Washington my whole life?').toLowerCase();

if (question1 === 'yes' || question1 === 'y' || question1 === 'ye' || question1 === 'Yeah' || question1 ==='yea') {
  alert('You got it!');
  console.log('The user answered correct with: ' + question1);
  yes +=1;
} else {
  alert('Uh oh! That is wrong');
  console.log('The user answered incorrect with: ' + question1);
}

 var question2 = prompt('Is my favorite color yellow?').toLowerCase();

if (question2 === 'no' || question2 === 'n' || question2 === 'NO') {
  alert('You got it!');
  console.log('The user answered correct with: ' + question2);
  yes +=1;
} else {
  alert('Uh oh! That is wrong')
  console.log('The user answered incorrect with: ' + question2);
}

 var question3 = prompt('Is my favorite instrument the guitar?').toLowerCase();

if (question3 === 'yes' || question3 ==='ye' || question3 ==='y' || question3 ==='yeah' || question3 ==='yea') {
  alert('You got it!');
  console.log('The user answered correct with: ' + question3);
  yes +=1;
} else {
  alert('Uh oh! That is wrong')
  console.log('The user answered incorrect with: ' + question3);
}

var question4 = parseInt(prompt('How old am I?'));
  console.log("This is the user's answer");
  console.log(typeof(question4));
  console.log("This what we are validating");
  console.log(typeof(22))
if (question4 === 22) {
  alert('Great guess!');
  console.log('The User answered correct with: ' + question4);
  yes +=1;
} else if(question4 < 22) {
  alert('You were close, but not quite there!');
  console.log('The User answered incorrect with: ' + question4);
} else {
  alert('You were close, better luck next time!');
  console.log('The User answered incorrect with: ' + question4);
}

var question5 = prompt("Am I a big video gamer?").toLowerCase();
if (question5 === 'yes' || question5 ==='ye' || question5 ==='y' || question5 ==='yeah' || question5 ==='yea') {
  alert('You got it!');
  console.log('The user answered correct with: ' + question5);
  yes +=1;
} else {
  alert('Hmmm...that is not the correct answer, maybe next time!');
  console.log('The User answered incorrect with: ' + question5);
}

var question6 = parseInt(prompt("How many guitars do I have?"));

while (question6 !==5) {
  alert("That's not quite the right guess. Give it another guess!");
  question6 = parseInt(prompt('What is your guess?'));
  console.log(question6)
}
if (question6 ===5) {
  alert('Way to go!');
  console.log('The user answered correct with: ' + question6);
  yes +=1;
}

  alert('You got ' + yes + ' out of 6 questions correct! Good job!');
  alert('The answer to question 1 was yes! I have lived in Mill Creek, Woodinville and Bellevue!');
  alert('The answer to question 2 was no! Blue is my favorite color!');
  alert('Question 3 was a resounding yes! Guitar is awesome! I started playing guitar when I was 12! Rock and roll!');
  alert('The answer to question 4 was 22!');
  alert('The answer to question 5 was a definite yes! Some of my favorite games include Halo, Mass Effect and Star Wars!');
  alert('Question 6 was the number 5! I have 5 guitars at home!')



