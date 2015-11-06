var number = 48;
var guess = prompt("How many TIE starfighters were typically carried on an Imperial-class Star Destroyer?");
alert("You guessed " + guess + ".");
  if (guess == number ) {
  alert("Excellent! You win this round!   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)");
  }
	  else if (guess < number) {
	    if ((guess >= number - 20) && (guess < number)) {
		    alert("You guessed too low! But you are within 20 integers of the answer. So close. Try the next question!");
		  } 
      else {
        alert("Oops! My calculations tell me your guess is too low.   'For every TIE fighter you shoot down, a thousand more will take its place.' (Baron Soontir Fel)");
      }
	  } 
	  else if (guess > number) {	   
		  if ((guess <= number + 20) && (guess > number)) {
		    alert("You guessed too high! But you are within 20 integers of the correct answer. So close. Try the next question!");
		  }	
      else { 
        alert("Oops! My calculations tell me your guess is too high. Try the next question!   'The aging, outdated craft employed by the Rebels are no match for the power of the TIE, and even the prototype T-65 X-wing created by the traitors who escaped from Incom is clearly outclassed.' (Captain David West Reynolds)"); 
      }
	  }		
    else {
      alert("Please enter a number to play the game!");
    }   
  console.log("question 1", guess);
var number2 = 20;
var guess2 = prompt("And how many AT-AT walkers were carried on a Star Destroyer?");
alert("You guessed " + guess2 + ".");
  if (guess2 == number2 ) {
    alert("Excellent! You win this round!   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)");
  }
	  else if (guess2 < number2) {
      if ((guess2 >= number2 - 20) && (guess2 < number2)) {
		    alert("You guessed too high! But you are within 20 integers of the answer. So close.");
      }
      else {
        alert("Oops! Your guess is too low.   'We had the Battle of Gormen won, until the AT-ATs arrived. They came out of the fog and ripped apart the front lines. The locals ran in terror, but the experienced soldiers surrendered. We knew that you can't outrun an AT-AT.' (Major Bren Derlin)");
      }
    } 
		else if (guess2 > number2) {
			if ((guess2 <= number2 + 20) && (guess2 > number2)) {
			 alert("You guessed within 20 integers of the correct answer. So close. Try the next question. Maybe it'll be easier!");
			}
      else {
        alert("Oops! My calculations tell me your guess is too high. Try the next question!   'Will you look at those walkers? Has there ever been anything so big and gray and ugly, Luke?' (Captain David West Reynolds)"); 
      }	
		}		  
  else {
      alert("Please enter a number to play the game!");
  }
  console.log("question 2", guess2);
var guess3 = prompt("How about an easy one. Was the Star Destroyer equipped with a Hyperdrive System? (Enter Y or N)");
alert("You guessed " + guess3 + ".");
  switch(guess3) {
    case "Y":
        alert("Excellent! You win this round!   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)");
        break;
    case "y":
        alert("Excellent! You win this round!   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)");
        break;
	  case "YES":
        alert("Excellent! You win this round!   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)");
        break;
    case "yes":
        alert("Excellent! You win this round!   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)");
        break;    
	  case "Yes":
        alert("Excellent! You win this round!   'I maintain that the effectiveness of the Star Destroyer stems from not only its massive firepower, but from its size. When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' (Grand Moff Wilhuff Tarkin)");
        break;
    default:
   		alert("Oops! You got it wrong. Did you answer by typing Y or N? Try this question set again by refreshing the page!");
	  }				
	console.log("question 3", guess3);