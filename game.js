var questionsArray = ["How many TIE starfighters were typically carried on an Imperial-class Star Destroyer?", 
"And how many AT-AT walkers were carried on a Star Destroyer?", 
"How about an easy one. Was the Star Destroyer equipped with a Hyperdrive System?   (Enter Y or N)", 
"Do Wookiees have claws? (Enter Y or N)", 
"How many children did Chewbacca have back on his home planet of Kashyyyk?", 
"The Incom T-__ X-wing starfigher was the model that killed the Death Star. (Fill in the blank with a two digit number!)"];
var answersArray = [48, 20, 1, 65];
var guessArray = [];

question1();
question2();
question3();
question4();
question5();
question6();

function question1() {
  var guess = prompt(questionsArray[0]);
  guessArray.push(guess);
  var msg = "<p>You guessed " + guessArray[0] + ". </p>";
  if (guessArray[0]== answersArray[0]) {
    msg+=("<p>Excellent! You win this round!</p>   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
    var imgel = document.getElementById('img1');
    imgel.innerHTML = "<img src='./images/TIEFIGHTER.jpg' width='200' height='200'>";
  
  }
    else if (guessArray[0] < answersArray[0]) {
      if ((guessArray[0] >= answersArray[0] - 20) && (guessArray[0] < answersArray[0])) {
        msg+=("<p>You guessed too low! But you are within 20 integers of the answer. So close. Try the next question!</p>");
      } 
      else {
        msg+=("<p>Oops! My calculations tell me your guess is too low.   'For every TIE fighter you shoot down, a thousand more will take its place.' (Baron Soontir Fel)</p>");
      }
    } 
    else if (guessArray[0] > answersArray[0]) {     
      if ((guessArray[0] <= answersArray[0] + 20) && (guessArray[0] > answersArray[0])) {
        msg+=("<p>You guessed too high! But you are within 20 integers of the correct answer. So close. Try the next question!</p>");
      } 
      else { 
        msg+=("<p>Oops! My calculations tell me your guess is too high. Try the next question!</p>   <p>'The aging, outdated craft employed by the Rebels are no match for the power of the TIE, and even the prototype T-65 X-wing created by the traitors who escaped from Incom is clearly outclassed.' (Captain David West Reynolds)</p>"); 
      }
    }   
    else {
      msg+=("<p>Please enter a answersArray[0] to play the game!</p>");
    }   
  var el = document.getElementById('guess1');
  el.innerHTML = msg;
  console.log("question 1", guessArray[0]);
}
function question2() {
  var guess = prompt(questionsArray[1]);
  guessArray.push(guess);
  var msg = "<p>You guessed " + guessArray[1] + ". </p>";
  if (guessArray[1] == answersArray[1] ) {
    msg+=("<p>Excellent! You win this round!</p>   <p>'We had the Battle of Gormen won, until the AT-ATs arrived. They came out of the fog and ripped apart the front lines. The locals ran in terror, but the experienced soldiers surrendered. We knew that you can't outrun an AT-AT.' (Major Bren Derlin)</p>");
    var imgel = document.getElementById('img2');
    imgel.innerHTML = "<img src='./images/ATAT.jpg' width='200' height='200'>";
  }
    
    else if (guessArray[1] < answersArray[1]) {
      if ((guessArray[1] >= answersArray[1] - 20) && (guessArray[1] < answersArray[1])) {
        msg+=("<p>You guessed too high! But you are within 20 integers of the answer. So close.</p>");
      }
      else {
        msg+=("<p>Oops! Your guess is too low.</p>   <p>'We had the Battle of Gormen won, until the AT-ATs arrived. They came out of the fog and ripped apart the front lines. The locals ran in terror, but the experienced soldiers surrendered. We knew that you can't outrun an AT-AT.' (Major Bren Derlin)</p>");
      }
    } 
    else if (guessArray[1] > answersArray[1]) {
      if ((guessArray[1] <= answersArray[1] + 20) && (guessArray[1] > answersArray[1])) {
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
  console.log("question 2", guessArray[1]);
}
function question3() {
  var guess = prompt(questionsArray[2]);
  guessArray.push(guess);
  var imgel = document.getElementById('img3');
  var msg = "<p>You guessed " + guessArray[2] + ". </p>";
  switch(guessArray[2]) {
    case "Y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        imgel.innerHTML = "<img src='./images/STARDESTROYER.jpg' width='200' height='200'>";
        break;
    case "y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        imgel.innerHTML = "<img src='./images/STARDESTROYER.jpg' width='200' height='200'>";
        break;
    case "YES":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        imgel.innerHTML = "<img src='./images/STARDESTROYER.jpg' width='200' height='200'>";
        break;
    case "yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        imgel.innerHTML = "<img src='./images/STARDESTROYER.jpg' width='200' height='200'>";
        break;    
    case "Yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)</p>");
        imgel.innerHTML = "<img src='./images/STARDESTROYER.jpg' width='200' height='200'>";
        break;
    default:
      msg+=("<p>Oops! You got it wrong. Did you answer by typing Y or N? Try this question set again by refreshing the page!</p>");
    }       
    var el = document.getElementById('guess3');
    el.innerHTML = msg;
    console.log("question 3", guessArray[2]);
}
function question4() {
  var guess = prompt(questionsArray[3]);
  guessArray.push(guess);
  var imgel = document.getElementById('img4');
  var msg = "<p>You guessed " + guessArray[3] + ". </p>";
  switch(guessArray[3]) {
    case "Y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        imgel.innerHTML = "<img src='./images/WOOKIE.jpg' width='200' height='200'>";
        break;
    case "y":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        imgel.innerHTML = "<img src='./images/WOOKIE.jpg' width='200' height='200'>";
        break;
    case "YES":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        imgel.innerHTML = "<img src='./images/WOOKIE.jpg' width='200' height='200'>";
        break;
    case "yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        imgel.innerHTML = "<img src='./images/WOOKIE.jpg' width='200' height='200'>";
        break;    
    case "Yes":
        msg+=("<p>Excellent! You win this round!</p>   <p>'I didn't realize Wookiees had claws like those. Though I suppose I should have. You are arboreal, after all.' (Princess Leia)</p>");
        imgel.innerHTML = "<img src='./images/WOOKIE.jpg' width='200' height='200'>";
        break;
    default:
      msg+=("<p>Oops! You got it wrong. Did you answer by typing Y or N? Try this question set again by refreshing the page!</p>");
    }       
  var el = document.getElementById('guess4');
  el.innerHTML = msg;
  console.log("question 4", guessArray[3]);
}
function question5() {
  var guess = prompt(questionsArray[4]);
  guessArray.push(guess);
  var msg = "<p>You guessed " + guessArray[4] + ". </p>";
  if (guessArray[4] == answersArray[2]) {
    msg+=("<p>Excellent! You win this round!</p>   <p>'But sir, nobody worries about upsetting a droid.'     'That's cause droids don't pull people's arms out of their sockets when they lose. Wookiees are known to do that.' (Han Solo to C-3PO)</p>");
    var imgel = document.getElementById('img5');
    imgel.innerHTML = "<img src='./images/KASHYYYK.jpg' width='200' height='200'>";
 
  }
      else if (guessArray[4] < answersArray[2]) {
        msg+=("<p>Oops! Your guess is too low.</p>");
      }   
      else if (guessArray[4] > answersArray[2]) {
      msg+=("<p>Oops! My calculations tell me your guess is too high. Try the next question!</p>    <p>'But sir, nobody worries about upsetting a droid.'     'That's cause droids don't pull people's arms out of their sockets when they lose. Wookiees are known to do that.' (Han Solo to C-3PO)</p>"); 
      }     
  else {
    msg+=("<p>Please enter a number to play the game!</p>");
  }
  var el = document.getElementById('guess5');
  el.innerHTML = msg;
  console.log("question 5", guessArray[4]);
}
function question6() {
  var guess = prompt(questionsArray[5]);
  guessArray.push(guess);
  var msg = "<p>You guessed " + guessArray[5] + ". </p>";
  if (guessArray[5] == answersArray[3]) {
    msg+=("<p>Excellent! You win this round!</p>   <p>'The Incom T-65 X-wing is the fighter that killed the Death Star. An almost perfect balance of speed, maneuverability, and defensive shielding make it the fighter of choice for Rogue Squadron.' (General Carlist Rieekan)</p>");
    var imgel = document.getElementById('img6');
    imgel.innerHTML = "<img src='./images/T65.jpg' width='200' height='200'>";

  }
      else if (guessArray[5] < answersArray[3]) {
        msg+=("<p>Oops! Your guess is too low.</p>");
      } 
      else if (guessArray[5] > answersArray[3]) { 
        msg+=("<p>Oops! My calculations tell me your guess is too high. Try the next question!</p>"); 
      }     
  else {
      msg+=("<p>Please enter a number to play the game!</p>");
  }
  var el = document.getElementById('guess6');
  el.innerHTML = msg;
  console.log("question 6", guessArray[5]);
}
var endMsg =("<p>Good work my young Padawan! Refresh the browser to play again!</p>");
var el = document.getElementById('endMsg');
el.innerHTML = endMsg;