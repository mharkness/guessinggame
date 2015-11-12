question1();
question2();
question3();
question4();
question5();
question6();
function question1() {
  var q1 = ["How many TIE starfighters were typically carried on an Imperial-class Star Destroyer?"];
  var number = 48;
  var guess = prompt(q1[0]);
  var a1 = [];
  a1.push(guess);
  var msg = "<p>You guessed " + a1[0] + ". </p>";
  if (a1[0]== number ) {
    msg+=("<p>Excellent! You win this round!</p>   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
  }
    else if (a1[0] < number) {
      if ((a1[0] >= number - 20) && (a1[0] < number)) {
        msg+=("<p>You guessed too low! But you are within 20 integers of the answer. So close. Try the next question!</p>");
      } 
      else {
        msg+=("<p>Oops! My calculations tell me your guess is too low.   'For every TIE fighter you shoot down, a thousand more will take its place.' (Baron Soontir Fel)</p>");
      }
    } 
    else if (a1[0] > number) {     
      if ((a1[0] <= number + 20) && (a1[0] > number)) {
        msg+=("<p>You guessed too high! But you are within 20 integers of the correct answer. So close. Try the next question!</p>");
      } 
      else { 
        msg+=("<p>Oops! My calculations tell me your guess is too high. Try the next question!</p>   <p>'The aging, outdated craft employed by the Rebels are no match for the power of the TIE, and even the prototype T-65 X-wing created by the traitors who escaped from Incom is clearly outclassed.' (Captain David West Reynolds)</p>"); 
      }
    }   
    else {
      msg+=("<p>Please enter a number to play the game!</p>");
    }   
  var el = document.getElementById('guess1');
  el.innerHTML = msg;
  console.log("question 1", a1[0]);
}
function question2() {
  var q2 = ["And how many AT-AT walkers were carried on a Star Destroyer?"];
  var number2 = 20;
  var guess2 = prompt(q2[0]);
  var a2 = [];
  a2.push(guess2);
  var msg = "<p>You guessed " + a2[0] + ". </p>";
  if (a2[0] == number2 ) {
    msg+=("<p>Excellent! You win this round!</p>   <p>'We had the Battle of Gormen won, until the AT-ATs arrived. They came out of the fog and ripped apart the front lines. The locals ran in terror, but the experienced soldiers surrendered. We knew that you can't outrun an AT-AT.' (Major Bren Derlin)</p>");
  }
    else if (a2[0] < number2) {
      if ((a2[0] >= number2 - 20) && (a2[0] < number2)) {
        msg+=("<p>You guessed too high! But you are within 20 integers of the answer. So close.</p>");
      }
      else {
        msg+=("<p>Oops! Your guess is too low.</p>   <p>'We had the Battle of Gormen won, until the AT-ATs arrived. They came out of the fog and ripped apart the front lines. The locals ran in terror, but the experienced soldiers surrendered. We knew that you can't outrun an AT-AT.' (Major Bren Derlin)</p>");
      }
    } 
    else if (a2[0] > number2) {
      if ((a2[0] <= number2 + 20) && (a2[0] > number2)) {
       msg+=("<p>You guessed too low! But you are within 20 integers of the correct answer. So close. Try the next question. Maybe it'll be easier!</p>");
      }
      else {
        msg+=("<p>Oops! My calculations tell me your guess is too high. Try the next question!</p>   <p>'Will you look at those walkers? Has there ever been anything so big and gray and ugly, Luke?' (Captain David West Reynolds)</p>"); 
      } 
    }     
  else {
      msg+=("<p>Please enter a number to play the game!</p>");
  }
  var el = document.getElementById('guess2');
  el.innerHTML = msg;
  console.log("question 2", a2[0]);
}
function question3() {
  var q3 = ["How about an easy one. Was the Star Destroyer equipped with a Hyperdrive System? (Enter Y or N)"];
  var guess3 = prompt(q3[0]);
  var a3 = [];
  a3.push(guess3);
  var msg = "<p>You guessed " + a3[0] + ". </p>";
  switch(a3[0]) {
    case "Y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        break;
    case "y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        break;
    case "YES":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        break;
    case "yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        break;    
    case "Yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        break;
    default:
      msg+=("<p>Oops! You got it wrong. Did you answer by typing Y or N? Try this question set again by refreshing the page!</p>");
    }       
    var el = document.getElementById('guess3');
    el.innerHTML = msg;
    console.log("question 3", a3[0]);
}
function question4() {
  var q4 = ["Do Wookiees have claws? (Enter Y or N)"];
  var guess4 = prompt(q4[0]);
  var a4 = [];
  a4.push(guess4);
  var msg = "<p>You guessed " + a4[0] + ". </p>";
  switch(guess4) {
    case "Y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        break;
    case "y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        break;
    case "YES":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        break;
    case "yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        break;    
    case "Yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        break;
    default:
      msg+=("<p>Oops! You got it wrong. Did you answer by typing Y or N? Try this question set again by refreshing the page!</p>");
    }       
  var el = document.getElementById('guess4');
  el.innerHTML = msg;
  console.log("question 4", a4[0]);
}
function question5() {
  var q5 = ["How many children did Chewbacca have back on his home planet of Kashyyyk?"];
  var number5 = 1;
  var guess5 = prompt(q5[0]);
  var a5 = [];
  a5.push(guess5);
  var msg = "<p>You guessed " + a5[0] + ". </p>";
  if (a5[0] == number5) {
    msg+=("<p>Excellent! You win this round!</p>   <p>'But sir, nobody worries about upsetting a droid.'     'That's cause droids don't pull people's arms out of their sockets when they lose. Wookiees are known to do that.' (Han Solo to C-3PO)</p>");
  }
      else if (a5[0] < number5) {
        msg+=("<p>Oops! Your guess is too low.</p>");
      }   
      else if (a5[0] > number5) {
      msg+=("<p>Oops! My calculations tell me your guess is too high. Try the next question!</p>    <p>'But sir, nobody worries about upsetting a droid.'     'That's cause droids don't pull people's arms out of their sockets when they lose. Wookiees are known to do that.' (Han Solo to C-3PO)</p>"); 
      }     
  else {
    msg+=("<p>Please enter a number to play the game!</p>");
  }
  var el = document.getElementById('guess5');
  el.innerHTML = msg;
  console.log("question 5", a5[0]);
}
function question6() {
  var q6 = ["The Incom T-__ X-wing starfigher was the model that killed the Death Star. (Fill in the blank with a two digit number!)"];
  var number6 = 65;
  var guess6 = prompt(q6[0]);
  var a6 = [];
  a6.push(guess6);
  var msg = "<p>You guessed " + q6[0] + ". </p>";
  if (q6[0] == number6) {
    msg+=("<p>Excellent! You win this round!</p>   <p>'The Incom T-65 X-wing is the fighter that killed the Death Star. An almost perfect balance of speed, maneuverability, and defensive shielding make it the fighter of choice for Rogue Squadron.' (General Carlist Rieekan)</p>");
  }
      else if (q6[0] < number6) {
        msg+=("<p>Oops! Your guess is too low.</p>");
      } 
      else if (q6[0] > number6) { 
        msg+=("<p>Oops! My calculations tell me your guess is too high. Try the next question!</p>"); 
      }     
  else {
      msg+=("<p>Please enter a number to play the game!</p>");
  }
  var el = document.getElementById('guess6');
  el.innerHTML = msg;
  console.log("question 6", q6[0]);
}
var endMsg =("<p>Good work my young Padawan! Refresh the browser to play again!</p>");
var el = document.getElementById('endMsg');
el.innerHTML = endMsg;